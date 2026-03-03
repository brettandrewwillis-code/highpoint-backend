import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/FadeIn";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  Wrench,
  Zap,
  Home,
  Trees,
  HardHat,
  Grid3x3,
  Layers,
  PaintBucket,
  ChefHat,
  CarFront,
  Bug,
  Box,
  Search,
  TrendingUp,
  DollarSign,
  MapPin,
  Star,
  Globe,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Loader2,
  ArrowRight,
  BarChart3,
  Target,
  Shield,
  Activity,
  ExternalLink,
  Key,
} from "lucide-react";
import {
  tradeProfiles,
  regionalMultipliers,
  australianStates,
  stateRegulators,
  type RegionalMultiplier,
} from "@shared/tradeData";
import { apiRequest } from "@/lib/queryClient";

const tradeIcons: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Trees: <Trees className="w-6 h-6" />,
  HardHat: <HardHat className="w-6 h-6" />,
  Grid3x3: <Grid3x3 className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  PaintBucket: <PaintBucket className="w-6 h-6" />,
  ChefHat: <ChefHat className="w-6 h-6" />,
  CarFront: <CarFront className="w-6 h-6" />,
  Bug: <Bug className="w-6 h-6" />,
  Box: <Box className="w-6 h-6" />,
};

interface CompetitorResult {
  name: string;
  rating: number;
  reviewCount: number;
  address: string;
  phone: string | null;
  website: string | null;
  hasWebsite: boolean;
  competitiveLabel: string;
  thumbnail: string | null;
}

interface CompetitorSearchResponse {
  query: string;
  suburb: string;
  trade: string;
  timestamp: string;
  competitors: CompetitorResult[];
  marketDensity: {
    level: string;
    totalFound: number;
    message: string;
  };
  visibilityGaps: Array<{
    keyword: string;
    status: string;
    priority: string;
  }>;
}

export default function TradeAudit() {
  const [, navigate] = useLocation();
  const [selectedTrade, setSelectedTrade] = useState<string>("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [regionType, setRegionType] = useState<string>("metro");
  const [jobType, setJobType] = useState<"standard" | "highValue">("standard");
  const [monthlyBudget, setMonthlyBudget] = useState<number>(2000);
  const [closingRate, setClosingRate] = useState<number>(20);
  const [competitorData, setCompetitorData] = useState<CompetitorSearchResponse | null>(null);
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [callbackName, setCallbackName] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");

  const trade = useMemo(
    () => tradeProfiles.find((t) => t.id === selectedTrade),
    [selectedTrade]
  );

  const region = regionalMultipliers[regionType] as RegionalMultiplier;

  const competitorMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/competitor-search", {
        trade: trade?.searchTerms[0] || selectedTrade,
        suburb,
        state,
      });
      return res.json();
    },
    onSuccess: (data: CompetitorSearchResponse) => {
      setCompetitorData(data);
    },
  });

  const callbackMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/callback-request", {
        name: callbackName,
        phone: callbackPhone,
        suburb,
        trade: trade?.name,
      });
      return res.json();
    },
  });

  const roiCalc = useMemo(() => {
    if (!trade || !region) return null;

    const avgLeadCost =
      ((trade.leadCost[0] + trade.leadCost[1]) / 2) * region.cpcMultiplier;
    const avgJobValue =
      jobType === "standard"
        ? ((trade.services.standard.range[0] + trade.services.standard.range[1]) / 2) *
          region.jobValueMultiplier
        : ((trade.services.highValue.range[0] + trade.services.highValue.range[1]) / 2) *
          region.jobValueMultiplier;

    const monthlyLeads = monthlyBudget / avgLeadCost;
    const closedJobs = monthlyLeads * (closingRate / 100);
    const monthlyRevenue = closedJobs * avgJobValue;
    const roi = ((monthlyRevenue - monthlyBudget) / monthlyBudget) * 100;
    const breakEvenJobs = Math.ceil(monthlyBudget / avgJobValue);

    return {
      avgLeadCost: Math.round(avgLeadCost),
      avgJobValue: Math.round(avgJobValue),
      monthlyLeads: Math.round(monthlyLeads * 10) / 10,
      closedJobs: Math.round(closedJobs * 10) / 10,
      monthlyRevenue: Math.round(monthlyRevenue),
      roi: Math.round(roi),
      breakEvenJobs,
    };
  }, [trade, region, jobType, monthlyBudget, closingRate]);

  const chartData = useMemo(() => {
    if (!roiCalc) return [];
    return [
      { name: "Ad Spend", value: monthlyBudget, fill: "#ef4444" },
      { name: "Revenue", value: roiCalc.monthlyRevenue, fill: "#22c55e" },
      { name: "Profit", value: Math.max(0, roiCalc.monthlyRevenue - monthlyBudget), fill: "#3b82f6" },
    ];
  }, [roiCalc, monthlyBudget]);

  const handleRunAudit = () => {
    if (trade && suburb) {
      competitorMutation.mutate();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="Free Trade Audit"
        description="Get a 60-second digital audit for your trade business. See live competitor data, ROI projections, and market gaps for any Australian suburb."
      />
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge variant="outline" className="text-primary border-primary/30 px-4 py-1">
                2026 Market Data
              </Badge>
              <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-medium">Live Data: Connected to Google Ads & Maps API v3.4</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Stop Losing {suburb ? suburb : "Local"} Jobs to Your{" "}
              <span className="text-primary">Competitors.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-medium mb-2" data-testid="text-audit-subtitle">
              Run a 60-Second Market Audit.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Live 2026 Google Maps Data: Identify the revenue leak in your local trade patch.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* TRADE SELECTOR */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-center text-2xl md:text-3xl font-display font-bold text-white mb-8">
              Select Your Trade
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-2 sm:gap-3 max-w-5xl mx-auto">
              {tradeProfiles.map((tp) => (
                <button
                  key={tp.id}
                  data-testid={`button-trade-${tp.id}`}
                  onClick={() => setSelectedTrade(tp.id)}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 flex flex-col items-center gap-1.5 sm:gap-2 hover:-translate-y-1 cursor-pointer ${
                    selectedTrade === tp.id
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center ${
                      selectedTrade === tp.id
                        ? "bg-primary text-white"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    {tradeIcons[tp.icon]}
                  </div>
                  <span className="text-[11px] sm:text-sm font-medium text-white text-center leading-tight">
                    {tp.name}
                  </span>
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      {trade && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {/* LEFT SIDEBAR */}
              <div className="lg:col-span-1 space-y-6">
                <FadeIn>
                  <Card className="bg-white/5 border-white/10 overflow-hidden">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
                        <MapPin className="w-5 h-5 text-primary shrink-0" />
                        Your Location
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <Label className="text-white/70 text-sm">Suburb / Town</Label>
                        <Input
                          data-testid="input-suburb"
                          placeholder="e.g. Wollongong, Eagleby..."
                          value={suburb}
                          onChange={(e) => setSuburb(e.target.value)}
                          className="bg-white/5 border-white/10 text-white text-sm"
                        />
                      </div>
                      <div>
                        <Label className="text-white/70 text-sm">State</Label>
                        <Select value={state} onValueChange={setState}>
                          <SelectTrigger
                            data-testid="select-state"
                            className="bg-white/5 border-white/10 text-white text-sm"
                          >
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            {australianStates.map((s) => (
                              <SelectItem key={s} value={s}>
                                {s}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-white/70 text-sm">Region Type</Label>
                        <Select value={regionType} onValueChange={setRegionType}>
                          <SelectTrigger
                            data-testid="select-region"
                            className="bg-white/5 border-white/10 text-white text-sm"
                          >
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="metro">Metro / Capital City</SelectItem>
                            <SelectItem value="regional">Regional / Coastal</SelectItem>
                            <SelectItem value="rural">Rural / Outer Suburbs</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {state && (
                        <div className="bg-white/5 rounded-lg p-2.5">
                          <p className="text-xs text-white/50 break-words">
                            <Shield className="w-3 h-3 inline mr-1 shrink-0" />
                            {stateRegulators[state] || "N/A"}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <Card className="bg-white/5 border-white/10 overflow-hidden">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
                        <DollarSign className="w-5 h-5 text-primary shrink-0" />
                        ROI Calculator
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <Label className="text-white/70 text-sm">Job Type</Label>
                        <Select
                          value={jobType}
                          onValueChange={(v) =>
                            setJobType(v as "standard" | "highValue")
                          }
                        >
                          <SelectTrigger
                            data-testid="select-job-type"
                            className="bg-white/5 border-white/10 text-white text-sm"
                          >
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">
                              {trade.services.standard.label}
                            </SelectItem>
                            <SelectItem value="highValue">
                              {trade.services.highValue.label}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-white/70 text-sm">
                          Monthly Ad Budget ($)
                        </Label>
                        <Input
                          data-testid="input-budget"
                          type="number"
                          value={monthlyBudget}
                          onChange={(e) =>
                            setMonthlyBudget(Number(e.target.value) || 0)
                          }
                          className="bg-white/5 border-white/10 text-white text-sm"
                        />
                      </div>
                      <div>
                        <Label className="text-white/70 text-sm">
                          Closing Rate (%)
                        </Label>
                        <Input
                          data-testid="input-closing-rate"
                          type="number"
                          min={1}
                          max={100}
                          value={closingRate}
                          onChange={(e) =>
                            setClosingRate(Number(e.target.value) || 0)
                          }
                          className="bg-white/5 border-white/10 text-white text-sm"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.15}>
                  <div className="sticky bottom-4 z-20">
                    <Button
                      data-testid="button-run-audit"
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-5 sm:py-6 text-base sm:text-lg font-bold shadow-lg shadow-primary/30"
                      onClick={handleRunAudit}
                      disabled={!suburb || competitorMutation.isPending}
                    >
                      {competitorMutation.isPending ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          <span className="truncate">Scanning {suburb}...</span>
                        </>
                      ) : (
                        <>
                          <Search className="w-5 h-5 mr-2 shrink-0" />
                          Run Live Market Audit
                        </>
                      )}
                    </Button>
                  </div>
                </FadeIn>
              </div>

              {/* RIGHT CONTENT */}
              <div className="lg:col-span-2 space-y-6">
                {/* MARKET BENCHMARKS */}
                <FadeIn delay={0.1}>
                  <Card className="bg-white/5 border-white/10 overflow-hidden backdrop-blur-md">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-white flex flex-wrap items-center gap-2 text-base sm:text-lg">
                        <BarChart3 className="w-5 h-5 text-primary shrink-0" />
                        <span className="break-words">{trade.name} — 2026 Benchmarks</span>
                        {suburb && (
                          <Badge variant="secondary" className="text-xs">
                            {suburb}{state ? `, ${state}` : ""}
                          </Badge>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <div className="bg-white/5 rounded-xl p-3 sm:p-4 overflow-hidden">
                          <p className="text-white/50 text-xs sm:text-sm mb-1 truncate">
                            {trade.services.standard.label}
                          </p>
                          <p className="text-lg sm:text-2xl font-bold text-white" data-testid="text-standard-price">
                            ${Math.round(trade.services.standard.range[0] * region.jobValueMultiplier).toLocaleString()} — ${Math.round(trade.services.standard.range[1] * region.jobValueMultiplier).toLocaleString()}
                          </p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-3 sm:p-4 overflow-hidden">
                          <p className="text-white/50 text-xs sm:text-sm mb-1 truncate">
                            {trade.services.highValue.label}
                          </p>
                          <p className="text-lg sm:text-2xl font-bold text-primary" data-testid="text-high-value-price">
                            ${Math.round(trade.services.highValue.range[0] * region.jobValueMultiplier).toLocaleString()} — ${Math.round(trade.services.highValue.range[1] * region.jobValueMultiplier).toLocaleString()}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                        <div className="text-center bg-white/5 rounded-lg p-2 sm:p-3 overflow-hidden">
                          <p className="text-[10px] sm:text-xs text-white/50">Standard CPC</p>
                          <p className="text-sm sm:text-lg font-bold text-white" data-testid="text-standard-cpc">
                            ${Math.round(trade.cpc.standard[0] * region.cpcMultiplier)}–${Math.round(trade.cpc.standard[1] * region.cpcMultiplier)}
                          </p>
                        </div>
                        <div className="text-center bg-white/5 rounded-lg p-2 sm:p-3 overflow-hidden">
                          <p className="text-[10px] sm:text-xs text-white/50">High-Intent CPC</p>
                          <p className="text-sm sm:text-lg font-bold text-orange-400" data-testid="text-high-cpc">
                            ${Math.round(trade.cpc.highIntent[0] * region.cpcMultiplier)}–${Math.round(trade.cpc.highIntent[1] * region.cpcMultiplier)}
                          </p>
                        </div>
                        <div className="text-center bg-white/5 rounded-lg p-2 sm:p-3 overflow-hidden">
                          <p className="text-[10px] sm:text-xs text-white/50">Cost Per Lead</p>
                          <p className="text-sm sm:text-lg font-bold text-yellow-400" data-testid="text-cpl">
                            ${Math.round(trade.leadCost[0] * region.cpcMultiplier)}–${Math.round(trade.leadCost[1] * region.cpcMultiplier)}
                          </p>
                        </div>
                        <div className="text-center bg-white/5 rounded-lg p-2 sm:p-3 overflow-hidden">
                          <p className="text-[10px] sm:text-xs text-white/50">Avg. CVR</p>
                          <p className="text-sm sm:text-lg font-bold text-green-400" data-testid="text-cvr">
                            {(trade.conversionRate * 100).toFixed(0)}%
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                        <p className="text-xs sm:text-sm text-blue-300 break-words">
                          <Activity className="w-4 h-4 inline mr-1 shrink-0" />
                          {region.tip}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                {/* TARGET KEYWORDS */}
                <FadeIn delay={0.15}>
                  <Card className="bg-white/5 border-white/10 overflow-hidden backdrop-blur-md">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
                        <Key className="w-5 h-5 text-primary shrink-0" />
                        Target Keywords — {trade.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto -mx-6 px-6">
                        <table className="w-full min-w-[400px]">
                          <thead>
                            <tr className="border-b border-white/10">
                              <th className="text-left text-white/50 text-xs sm:text-sm p-2 sm:p-3">
                                Keyword
                              </th>
                              <th className="text-left text-white/50 text-xs sm:text-sm p-2 sm:p-3">
                                Intent
                              </th>
                              <th className="text-right text-white/50 text-xs sm:text-sm p-2 sm:p-3">
                                Est. CPC
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {trade.targetKeywords.map((kw, i) => (
                              <tr
                                key={i}
                                className="border-b border-white/5"
                                data-testid={`row-keyword-${i}`}
                              >
                                <td className="p-2 sm:p-3">
                                  <span className="text-white text-xs sm:text-sm font-medium">
                                    {kw.keyword.replace("[Suburb]", suburb || "[Suburb]")}
                                  </span>
                                </td>
                                <td className="p-2 sm:p-3">
                                  <Badge
                                    className={`text-[10px] sm:text-xs whitespace-nowrap ${
                                      kw.intent === "high"
                                        ? "bg-red-500/20 text-red-400"
                                        : kw.intent === "medium"
                                        ? "bg-yellow-500/20 text-yellow-400"
                                        : "bg-green-500/20 text-green-400"
                                    }`}
                                  >
                                    {kw.intent.toUpperCase()}
                                  </Badge>
                                </td>
                                <td className="p-2 sm:p-3 text-right">
                                  <span className="text-white/70 text-xs sm:text-sm font-mono whitespace-nowrap">
                                    {kw.value}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                {/* ROI PROJECTION */}
                {roiCalc && (
                  <FadeIn delay={0.2}>
                    <Card className="bg-white/5 border-white/10 overflow-hidden backdrop-blur-md">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
                          <TrendingUp className="w-5 h-5 text-primary shrink-0" />
                          Projected Monthly ROI
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                          <div className="text-center bg-white/5 rounded-lg p-3">
                            <p className="text-[10px] sm:text-xs text-white/50 mb-1">Leads</p>
                            <p className="text-xl sm:text-3xl font-bold text-white" data-testid="text-monthly-leads">
                              {roiCalc.monthlyLeads}
                            </p>
                            <p className="text-[10px] sm:text-xs text-white/40">per month</p>
                          </div>
                          <div className="text-center bg-white/5 rounded-lg p-3">
                            <p className="text-[10px] sm:text-xs text-white/50 mb-1">Jobs Won</p>
                            <p className="text-xl sm:text-3xl font-bold text-primary" data-testid="text-jobs-won">
                              {roiCalc.closedJobs}
                            </p>
                            <p className="text-[10px] sm:text-xs text-white/40">{closingRate}% close</p>
                          </div>
                          <div className="text-center bg-white/5 rounded-lg p-3">
                            <p className="text-[10px] sm:text-xs text-white/50 mb-1">Revenue</p>
                            <p className="text-xl sm:text-3xl font-bold text-green-400" data-testid="text-monthly-revenue">
                              ${roiCalc.monthlyRevenue.toLocaleString()}
                            </p>
                            <p className="text-[10px] sm:text-xs text-white/40">projected</p>
                          </div>
                          <div className="text-center bg-white/5 rounded-lg p-3">
                            <p className="text-[10px] sm:text-xs text-white/50 mb-1">ROI</p>
                            <p
                              className={`text-xl sm:text-3xl font-bold ${
                                roiCalc.roi > 0 ? "text-green-400" : "text-red-400"
                              }`}
                              data-testid="text-roi"
                            >
                              {roiCalc.roi > 0 ? "+" : ""}{roiCalc.roi}%
                            </p>
                            <p className="text-[10px] sm:text-xs text-white/40">return</p>
                          </div>
                        </div>

                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 sm:p-4 mb-6">
                          <p className="text-primary text-sm sm:text-lg font-bold text-center break-words" data-testid="text-break-even">
                            You only need {roiCalc.breakEvenJobs}{" "}
                            {roiCalc.breakEvenJobs === 1 ? "job" : "jobs"} per
                            month to cover your entire Google Ads investment.
                          </p>
                        </div>

                        <div className="h-48 sm:h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                              <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="rgba(255,255,255,0.1)"
                              />
                              <XAxis
                                dataKey="name"
                                stroke="rgba(255,255,255,0.5)"
                                fontSize={11}
                                tick={{ fill: "rgba(255,255,255,0.5)" }}
                              />
                              <YAxis
                                stroke="rgba(255,255,255,0.5)"
                                fontSize={11}
                                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                                tick={{ fill: "rgba(255,255,255,0.5)" }}
                                width={50}
                              />
                              <Tooltip
                                formatter={(value: number) => [
                                  `$${value.toLocaleString()}`,
                                  "",
                                ]}
                                contentStyle={{
                                  background: "rgba(0,0,0,0.9)",
                                  border: "1px solid rgba(255,255,255,0.1)",
                                  borderRadius: "8px",
                                  color: "white",
                                  fontSize: "13px",
                                }}
                              />
                              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                                {chartData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                              </Bar>
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </FadeIn>
                )}

                {/* TRADE INSIGHTS */}
                <FadeIn delay={0.25}>
                  <Card className="bg-white/5 border-white/10 overflow-hidden">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
                        <Target className="w-5 h-5 text-primary shrink-0" />
                        Trade Insights — {trade.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 sm:space-y-3">
                        {trade.insights.map((insight, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 sm:gap-3 bg-white/5 rounded-lg p-2.5 sm:p-3"
                          >
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                            <p className="text-white/80 text-xs sm:text-sm break-words">{insight}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* COMPETITOR RESULTS */}
      {competitorData && (
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <FadeIn>
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">
                    Live Data
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2" data-testid="text-market-title">
                  Market Analysis for {competitorData.suburb}
                </h2>
                <p className="text-white/50 text-xs sm:text-sm">
                  Last Updated:{" "}
                  {new Date(competitorData.timestamp).toLocaleString("en-AU")}
                </p>
              </div>
            </FadeIn>

            {/* DENSITY CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
              <FadeIn delay={0.05}>
                <Card
                  className={`border overflow-hidden backdrop-blur-md ${
                    competitorData.marketDensity.level === "High"
                      ? "bg-red-500/10 border-red-500/20"
                      : competitorData.marketDensity.level === "Medium"
                      ? "bg-yellow-500/10 border-yellow-500/20"
                      : "bg-green-500/10 border-green-500/20"
                  }`}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <p className="text-xs sm:text-sm text-white/50 mb-1">Competition</p>
                    <p
                      className={`text-2xl sm:text-3xl font-bold ${
                        competitorData.marketDensity.level === "High"
                          ? "text-red-400"
                          : competitorData.marketDensity.level === "Medium"
                          ? "text-yellow-400"
                          : "text-green-400"
                      }`}
                      data-testid="text-density-level"
                    >
                      {competitorData.marketDensity.level}
                    </p>
                    <p className="text-[10px] sm:text-xs text-white/40 mt-1 break-words" data-testid="text-density-message">
                      {competitorData.marketDensity.message}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.1}>
                <Card className="bg-white/5 border-white/10 overflow-hidden">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <p className="text-xs sm:text-sm text-white/50 mb-1">Businesses Found</p>
                    <p className="text-2xl sm:text-3xl font-bold text-white" data-testid="text-total-found">
                      {competitorData.marketDensity.totalFound}
                    </p>
                    <p className="text-[10px] sm:text-xs text-white/40 mt-1">
                      in Google Maps Pack
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.15}>
                <Card className="bg-white/5 border-white/10 overflow-hidden">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <p className="text-xs sm:text-sm text-white/50 mb-1">Impression Share Goal</p>
                    <p className="text-2xl sm:text-3xl font-bold text-primary">70%+</p>
                    <p className="text-[10px] sm:text-xs text-white/40 mt-1">
                      to own the suburb
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            {/* COMPETITORS LIST */}
            {competitorData.competitors.length > 0 && (
              <FadeIn delay={0.1}>
                <Card className="bg-white/5 border-white/10 mb-8 overflow-hidden backdrop-blur-md">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
                      <Star className="w-5 h-5 text-yellow-400 shrink-0" />
                      Top Competitors — Google Map Pack
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {competitorData.competitors.map((comp, i) => (
                        <div
                          key={i}
                          className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/5 overflow-hidden"
                          data-testid={`card-competitor-${i}`}
                        >
                          <div className="flex items-start gap-3 mb-2 sm:mb-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold shrink-0 text-sm">
                              #{i + 1}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-white font-bold text-sm sm:text-base truncate" data-testid={`text-competitor-name-${i}`}>
                                {comp.name}
                              </p>
                              <p className="text-white/40 text-xs sm:text-sm truncate">
                                {comp.address}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 shrink-0" />
                              <span className="text-white font-bold text-xs sm:text-sm" data-testid={`text-competitor-rating-${i}`}>
                                {comp.rating || "N/A"}
                              </span>
                              <span className="text-white/40 text-xs">
                                ({comp.reviewCount})
                              </span>
                            </div>

                            {comp.hasWebsite ? (
                              <Badge
                                variant="secondary"
                                className="bg-green-500/10 text-green-400 border-green-500/20 text-[10px] sm:text-xs px-1.5 sm:px-2"
                              >
                                <Globe className="w-3 h-3 mr-0.5 sm:mr-1 shrink-0" />
                                Website
                              </Badge>
                            ) : (
                              <Badge
                                variant="secondary"
                                className="bg-red-500/10 text-red-400 border-red-500/20 text-[10px] sm:text-xs px-1.5 sm:px-2"
                              >
                                <XCircle className="w-3 h-3 mr-0.5 sm:mr-1 shrink-0" />
                                No Site
                              </Badge>
                            )}

                            <Badge
                              variant="outline"
                              className={`text-[10px] sm:text-xs px-1.5 sm:px-2 ${
                                comp.competitiveLabel.includes("Opportunity") ||
                                comp.competitiveLabel.includes("Easy") ||
                                comp.competitiveLabel.includes("Gap")
                                  ? "text-green-400 border-green-500/30"
                                  : comp.competitiveLabel.includes("Established")
                                  ? "text-red-400 border-red-500/30"
                                  : "text-yellow-400 border-yellow-500/30"
                              }`}
                            >
                              {comp.competitiveLabel}
                            </Badge>

                            {comp.website && (
                              <a
                                href={comp.website}
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary hover:text-primary/80 shrink-0"
                                data-testid={`link-competitor-site-${i}`}
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            )}

            {/* VISIBILITY GAP TABLE */}
            <FadeIn delay={0.15}>
              <Card className="bg-white/5 border-white/10 mb-8 overflow-hidden backdrop-blur-md">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
                    <Search className="w-5 h-5 text-primary shrink-0" />
                    Visibility Gap Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto -mx-6 px-6">
                    <table className="w-full min-w-[380px]">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left text-white/50 text-xs sm:text-sm p-2 sm:p-3">
                            Keyword
                          </th>
                          <th className="text-left text-white/50 text-xs sm:text-sm p-2 sm:p-3">
                            Status
                          </th>
                          <th className="text-left text-white/50 text-xs sm:text-sm p-2 sm:p-3">
                            Priority
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {competitorData.visibilityGaps.map((gap, i) => (
                          <tr
                            key={i}
                            className="border-b border-white/5"
                            data-testid={`row-gap-${i}`}
                          >
                            <td className="p-2 sm:p-3">
                              <span className="text-white text-xs sm:text-sm font-medium break-words">
                                {gap.keyword}
                              </span>
                            </td>
                            <td className="p-2 sm:p-3">
                              <Badge
                                variant="outline"
                                className={`text-[10px] sm:text-xs whitespace-nowrap ${
                                  gap.status.includes("Underserved") ||
                                  gap.status.includes("Critical") ||
                                  gap.status.includes("Opportunity")
                                    ? "text-green-400 border-green-500/30"
                                    : gap.status.includes("Saturated")
                                    ? "text-red-400 border-red-500/30"
                                    : "text-yellow-400 border-yellow-500/30"
                                }`}
                              >
                                {gap.status}
                              </Badge>
                            </td>
                            <td className="p-2 sm:p-3">
                              <Badge
                                className={`text-[10px] sm:text-xs ${
                                  gap.priority === "high"
                                    ? "bg-green-500/20 text-green-400"
                                    : gap.priority === "medium"
                                    ? "bg-yellow-500/20 text-yellow-400"
                                    : "bg-white/10 text-white/50"
                                }`}
                              >
                                {gap.priority.toUpperCase()}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* CALLBACK CTA */}
            <FadeIn delay={0.2}>
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 overflow-hidden backdrop-blur-md">
                <CardContent className="p-6 sm:p-8 text-center">
                  {!showCallbackForm ? (
                    <>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 break-words">
                        Claim Your {competitorData.suburb} Dominance Plan
                      </h3>
                      <p className="text-white/60 mb-5 sm:mb-6 max-w-lg mx-auto text-sm sm:text-base">
                        We'll build a custom strategy to get you to #1 in the
                        Google Map Pack and start generating high-quality leads.
                      </p>
                      <Button
                        data-testid="button-request-plan"
                        className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-lg font-bold"
                        onClick={() => setShowCallbackForm(true)}
                      >
                        <span className="truncate">Claim My {competitorData.suburb} Dominance Plan</span>
                        <ArrowRight className="ml-2 w-5 h-5 shrink-0" />
                      </Button>
                    </>
                  ) : (
                    <div className="max-w-md mx-auto">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6 break-words">
                        Claim Your {competitorData.suburb} Dominance Plan
                      </h3>
                      <div className="space-y-3 sm:space-y-4">
                        <Input
                          data-testid="input-callback-name"
                          placeholder="Your Name"
                          value={callbackName}
                          onChange={(e) => setCallbackName(e.target.value)}
                          className="bg-white/10 border-white/20 text-white text-sm"
                        />
                        <Input
                          data-testid="input-callback-phone"
                          placeholder="Phone Number"
                          value={callbackPhone}
                          onChange={(e) => setCallbackPhone(e.target.value)}
                          className="bg-white/10 border-white/20 text-white text-sm"
                        />
                        <Input
                          value={suburb}
                          disabled
                          className="bg-white/5 border-white/10 text-white/50 text-sm"
                        />
                        <Button
                          data-testid="button-submit-callback"
                          className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-5 sm:py-6 text-sm sm:text-lg font-bold"
                          onClick={() => {
                            callbackMutation.mutate(undefined, {
                              onSuccess: () => {
                                setTimeout(() => navigate("/thank-you"), 1500);
                              },
                            });
                          }}
                          disabled={
                            !callbackName ||
                            !callbackPhone ||
                            callbackMutation.isPending
                          }
                        >
                          {callbackMutation.isPending ? (
                            <>
                              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                              Submitting...
                            </>
                          ) : callbackMutation.isSuccess ? (
                            <>
                              <CheckCircle2 className="w-5 h-5 mr-2" />
                              Request Sent! Redirecting...
                            </>
                          ) : (
                            "Claim My Plan"
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ERROR STATE */}
      {competitorMutation.isError && (
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="bg-red-500/10 border-red-500/20 overflow-hidden">
              <CardContent className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-red-400 font-bold text-sm sm:text-base break-words">
                    Live Google Syncing... Please check your API Connection
                  </p>
                  <p className="text-red-300/60 text-xs sm:text-sm mt-1 break-words">
                    Unable to fetch live data. Please try again or check the API configuration.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* DISCLAIMER */}
      <section className="py-6 sm:py-8 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/30 text-[10px] sm:text-xs max-w-2xl mx-auto">
            Rates based on current 2026 Australian metropolitan and regional averages
            for licensed contractors. CPC and lead cost data reflects Google Ads
            benchmarks. Actual results may vary based on market conditions, ad
            quality, and competition.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-3">
            <Badge variant="outline" className="text-white/30 border-white/10 text-[10px] sm:text-xs">
              <Shield className="w-3 h-3 mr-1 shrink-0" />
              Google Partner
            </Badge>
            <Badge variant="outline" className="text-white/30 border-white/10 text-[10px] sm:text-xs">
              2026 Market Data
            </Badge>
            <Badge variant="outline" className="text-white/30 border-white/10 text-[10px] sm:text-xs">
              Australian Standards
            </Badge>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
