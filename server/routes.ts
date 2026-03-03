import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const serpApiSearchSchema = z.object({
  trade: z.string().min(1),
  suburb: z.string().min(1),
  state: z.string().optional(),
});

const callbackFormSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  suburb: z.string().min(1),
  trade: z.string().optional(),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/competitor-search", async (req, res) => {
    try {
      const parsed = serpApiSearchSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid request. Provide trade and suburb." });
      }

      const { trade, suburb, state } = parsed.data;
      const apiKey = process.env.SERPAPI_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "SerpApi key not configured." });
      }

      const query = `${trade} in ${suburb}${state ? `, ${state}` : ""}, Australia`;
      const params = new URLSearchParams({
        engine: "google_maps",
        q: query,
        api_key: apiKey,
        hl: "en",
        gl: "au",
      });

      const response = await fetch(`https://serpapi.com/search.json?${params.toString()}`);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("SerpApi error:", errorText);
        return res.status(502).json({ error: "Failed to fetch competitor data from Google Maps." });
      }

      const data = await response.json();
      const localResults = data.local_results || [];

      const competitors = localResults.slice(0, 5).map((result: any) => {
        const reviewCount = result.reviews || 0;
        const rating = result.rating || 0;
        const hasWebsite = !!result.website;

        let competitiveLabel = "Moderate Competitor";
        if (reviewCount < 5) {
          competitiveLabel = "Market Opportunity — Easy to Outrank";
        } else if (reviewCount < 10) {
          competitiveLabel = "Low Barrier to Entry";
        } else if (reviewCount > 50) {
          competitiveLabel = "Established Competitor — Professional Ads Required";
        }

        if (!hasWebsite) {
          competitiveLabel = "Digital Gap — High Conversion Potential";
        }

        return {
          name: result.title || "Unknown Business",
          rating,
          reviewCount,
          address: result.address || "Address not available",
          phone: result.phone || null,
          website: result.website || null,
          hasWebsite,
          competitiveLabel,
          thumbnail: result.thumbnail || null,
          placeId: result.place_id || null,
          gpsCoordinates: result.gps_coordinates || null,
        };
      });

      const totalCompetitors = localResults.length;
      let densityLevel = "Low";
      let densityMessage = `Only ${totalCompetitors} active businesses found — Market Leadership Opportunity.`;

      if (totalCompetitors >= 15) {
        densityLevel = "High";
        densityMessage = `${totalCompetitors}+ active advertisers found — requires a 'Sniper' strategy.`;
      } else if (totalCompetitors >= 5) {
        densityLevel = "Medium";
        densityMessage = `${totalCompetitors} active businesses found — moderate competition.`;
      }

      const visibilityGaps = [
        {
          keyword: `Emergency ${trade} ${suburb}`,
          status: totalCompetitors < 5 ? "Underserved (High Value!)" : "Competitive",
          priority: totalCompetitors < 5 ? "high" : "medium",
        },
        {
          keyword: `${trade} near me`,
          status: totalCompetitors >= 10 ? "Saturated (Expensive)" : "Opportunity",
          priority: totalCompetitors >= 10 ? "low" : "high",
        },
        {
          keyword: `${trade} ${suburb} reviews`,
          status: "Critical Gap (Low competition)",
          priority: "high",
        },
        {
          keyword: `Best ${trade} ${suburb}`,
          status: totalCompetitors < 8 ? "Underserved" : "Moderate",
          priority: totalCompetitors < 8 ? "high" : "medium",
        },
      ];

      return res.json({
        query,
        suburb,
        trade,
        timestamp: new Date().toISOString(),
        competitors,
        marketDensity: {
          level: densityLevel,
          totalFound: totalCompetitors,
          message: densityMessage,
        },
        visibilityGaps,
      });
    } catch (error: any) {
      console.error("Competitor search error:", error);
      return res.status(500).json({ error: "An unexpected error occurred." });
    }
  });

  app.post("/api/callback-request", async (req, res) => {
    try {
      const parsed = callbackFormSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Please provide your name, phone and suburb." });
      }

      console.log("Callback request received:", parsed.data);

      return res.json({
        success: true,
        message: "Your dominance plan request has been received. We'll be in touch shortly.",
      });
    } catch (error: any) {
      console.error("Callback request error:", error);
      return res.status(500).json({ error: "Failed to process your request." });
    }
  });

  return httpServer;
}
