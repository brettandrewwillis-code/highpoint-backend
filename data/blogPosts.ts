import blogConstruction from "@/assets/images/blog-construction.jpg";
import blogStrategy from "@/assets/images/blog-strategy.jpg";
import blogHvac from "@/assets/images/blog-hvac.jpg";
import blogLsa from "@/assets/images/blog-lsa.png";
import blogConversion from "@/assets/images/blog-conversion.png";
import blogSeoTrades from "@/assets/images/blog-seo-trades.png";
import blogFbAds from "@/assets/images/blog-fb-ads.png";
import blogFailedAds from "@/assets/images/blog-failed-ads.png";
import blogReferrals from "@/assets/images/blog-referrals.png";
import blogSeoPpc from "@/assets/images/blog-seo-ppc.png";
import { newBlogPosts } from "./newBlogPosts";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  videoId?: string;
}

export const blogPosts: BlogPost[] = [
  ...newBlogPosts,
  {
    id: "7",
    slug: "facebook-ads-retargeting-for-hvac",
    title: "Stop Losing Leads: The Power of Facebook Retargeting for HVAC",
    excerpt: "98% of people visit your website and leave without calling. Here is the comprehensive guide to using Facebook Ads to follow them around the internet until they book.",
    content: `
      <h2>The "Leaky Bucket" Problem in HVAC Marketing</h2>
      <p>Imagine you fill a bucket with water, but it has holes in the bottom. You can keep pouring more water in (buying more traffic), or you can plug the holes. Most HVAC contractors are obsessed with pouring more water. They want "more leads," "more clicks," and "more traffic." But they ignore the fact that <strong>95-98% of the traffic they already paid for is leaving without converting.</strong></p>
      
      <p>Typical conversion rates for home service websites hover around 2-5%. That means for every 100 people who click your Google Ad (which might cost you $15-$25 per click), only 2 to 5 of them actually call you. The other 95 people? They leave. Maybe their kids started screaming, maybe the dog needed to go out, maybe they just wanted to "shop around."</p>
      
      <p>Without retargeting, those 95 people are gone forever. You paid for them, and now they are looking at your competitor's site. Retargeting stops this bleeding.</p>

      <h2>What is Retargeting?</h2>
      <p>Retargeting (also known as remarketing) is a technology that allows you to show advertisements specifically to people who have already visited your website. It works by placing a small piece of code (called a "Pixel") on your website. When a user visits your site, the Pixel "cookies" them. Then, when they go to Facebook, Instagram, or other websites, your ad follows them.</p>
      
      <p>It’s the digital equivalent of a salesperson following a customer out of the store and saying, "Hey, I saw you looking at that AC unit. If you buy it today, I'll give you $50 off."</p>

      <h2>Why It Works for Trades</h2>
      <p>HVAC is often an emergency purchase, but not always. AC replacements, furnace upgrades, and maintenance plans have a longer sales cycle. People do research. They compare.</p>
      <ul>
        <li><strong>Brand Awareness:</strong> They saw you once on Google. Now they see you on Facebook, then Instagram. You look everywhere. You look "big" and trustworthy.</li>
        <li><strong>Trust Building:</strong> You can show them testimonials and before/after photos, reinforcing that you are the right choice.</li>
        <li><strong>Cost Efficiency:</strong> Retargeting audiences are small (only people who visited your site). You don't need a $5,000 budget. You can often run a highly effective retargeting campaign for $5-$10 a day.</li>
      </ul>

      <h2>The Strategy: How to Execute</h2>
      <h3>Step 1: The Setup</h3>
      <p>You need to install the <strong>Meta Pixel</strong> (formerly Facebook Pixel) on your website header. If you use WordPress, there are plugins for this. If you are on a custom site, your developer can do it in 5 minutes. This is non-negotiable.</p>

      <h3>Step 2: Create Your Audiences</h3>
      <p>Don't just target "everyone in Australia." In Facebook Ads Manager, create a <strong>Custom Audience</strong> based on "Website Traffic."</p>
      <ul>
        <li><strong>All Visitors (30 Days):</strong> Good for general branding.</li>
        <li><strong>Visited "AC Repair" Page (7 Days):</strong> High intent. These people have a broken AC right now.</li>
        <li><strong>Visited "Contact" Page but didn't submit:</strong> The hottest leads. They almost booked but got distracted.</li>
      </ul>

      <h3>Step 3: The Creative (What to Say)</h3>
      <p>Do not just show the same "We do AC Repair" ad they saw on Google. They already know that. You need to overcome their hesitation.</p>
      <ul>
        <li><strong>The "Offer" Ad:</strong> "Still sweating? Get $50 off your repair if you book before Friday."</li>
        <li><strong>The "Social Proof" Ad:</strong> A video of a happy customer standing in their cool living room thanking your team.</li>
        <li><strong>The "Authority" Ad:</strong> "Did you know regular maintenance saves you $300/year on energy bills? Book your $89 tune-up."</li>
      </ul>

      <h2>Budgeting for Retargeting</h2>
      <p>Unlike Google Ads where you pay per click (which is expensive), on Facebook you pay per Impression (CPM). Because your retargeting audience is small (maybe 500-1,000 people a month), it costs very little to reach them.</p>
      <p><strong>A budget of $5 to $10 per day</strong> is usually sufficient to reach all your past website visitors multiple times a week. It is arguably the highest ROI $300 you will spend all month.</p>

      <h2>Conclusion</h2>
      <p>Stop letting your hard-earned traffic walk out the door. Implement a simple Facebook retargeting campaign this week. It’s cheap, it’s effective, and it turns your "maybe" prospects into "booked" jobs.</p>
    `,
    author: "Brett Willis",
    date: "February 12, 2026",
    category: "Facebook Ads",
    image: blogFbAds,
    readTime: "9 min read"
  },
  {
    id: "6",
    slug: "seo-for-plumbers-and-electricians",
    title: "The Ultimate Guide to SEO for Plumbers and Electricians (2026 Edition)",
    excerpt: "Want to rank #1 for 'plumber near me'? It’s not about magic tricks. It’s about authority, relevance, and local signals. Here is the step-by-step roadmap.",
    content: `
      <h2>Why SEO Matters for Tradies in 2026</h2>
      <p>When a pipe bursts at 2 AM or the power goes out, nobody opens the Yellow Pages. Nobody asks Facebook for recommendations and waits 3 hours for a reply. They go to Google and search "emergency plumber near me."</p>
      
      <p>The top 3 results in the Google Map Pack get <strong>over 70% of the clicks</strong>. If you are in spot #1, your phone rings. If you are in spot #10, you are invisible. SEO (Search Engine Optimization) is the process of getting into those top spots without paying for every single click.</p>

      <h2>The 3 Pillars of Local SEO</h2>
      <p>Local SEO is different from regular SEO. Google knows that if someone searches for "electrician," they want someone local, not a company in another state. To rank locally, you need to master three specific areas.</p>

      <h3>1. Google Business Profile (The Crown Jewel)</h3>
      <p>Your Google Business Profile (formerly GMB) is arguably more important than your website. It is the first thing people see.</p>
      <ul>
        <li><strong>Verification:</strong> Ensure you are verified.</li>
        <li><strong>Categories:</strong> Choose the primary category carefully (e.g., "Plumber") and add all secondary categories (e.g., "Drainage Service," "Hot Water System Supplier").</li>
        <li><strong>Photos:</strong> Upload photos of your team, your branded trucks, and your completed work weekly. Google's AI "sees" these photos and trusts that you are a real, active business.</li>
        <li><strong>Reviews:</strong> This is the biggest ranking factor. You need a system to get reviews. Send a text message to every client immediately after the job is done. Respond to EVERY review, good or bad.</li>
      </ul>

      <h3>2. On-Page Website Structure</h3>
      <p>Most tradie websites fail here. They have a "Home" page and a "Services" page with a bulleted list of what they do. This is not enough.</p>
      <p>You need a <strong>dedicated page for every single service</strong> you offer.</p>
      <ul>
        <li>Blocked Drains Page</li>
        <li>Hot Water Repair Page</li>
        <li>Gas Fitting Page</li>
        <li>Leaking Tap Page</li>
      </ul>
      <p>Why? Because when someone searches "blocked drain plumber," Google wants to send them to a page specifically about blocked drains, not a generic homepage.</p>
      
      <p><strong>Location Pages:</strong> If you service multiple suburbs, create pages for them. "Plumber in Parramatta," "Plumber in Penrith," etc. This signals to Google that you are relevant in those specific areas.</p>

      <h3>3. Citations and Backlinks (Digital Reputation)</h3>
      <p>Google needs to verify that you are a legitimate business. It does this by checking if your Name, Address, and Phone Number (NAP) appear consistently across the internet.</p>
      <ul>
        <li><strong>Directories:</strong> Get listed on Yellow Pages, True Local, HiPages, and industry-specific directories. Ensure your address is identical on every single one.</li>
        <li><strong>Local Backlinks:</strong> This is the secret weapon. Sponsor a local footy club. Join the local Chamber of Commerce. Get listed on your supplier's website. These local links tell Google, "This business is trusted in this community."</li>
      </ul>

      <h2>The "E-E-A-T" Factor</h2>
      <p>Google evaluates content based on Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). Show your license number on your footer. Show photos of your team in uniform. Write blog posts about common local plumbing issues (e.g., "Why Pipes Burst in [Your City] Winters").</p>

      <h2>Conclusion</h2>
      <p>SEO is not a switch you flip. It is a garden you water. It takes 3-6 months to see significant movement, but once you rank #1 for your main keywords, the ROI is infinite. You stop renting your traffic (Ads) and start owning it.</p>
    `,
    author: "Brett Willis",
    date: "February 7, 2026",
    category: "SEO",
    image: blogSeoTrades,
    readTime: "12 min read"
  },
  {
    id: "5",
    slug: "why-your-trade-website-isnt-converting",
    title: "Why Your Trade Business Website Isn't Converting (And How to Fix It)",
    excerpt: "Traffic is useless if it doesn't turn into jobs. Here are the 5 critical design flaws killing your conversion rate and how to solve them today.",
    content: `
      <h2>Your Website Has One Job</h2>
      <p>It's not to look pretty. It's not to impress your competitors. It's not to win design awards. Your website has one single purpose: <strong>To get the phone to ring.</strong></p>
      
      <p>Many tradies spend thousands on a website that looks like a brochure but performs like a brick. If you are getting traffic but no calls, your website is broken. Here are the most common reasons why.</p>

      <h2>Mistake #1: No Clear Call to Action (CTA)</h2>
      <p>When a customer lands on your site, they are often stressed (water leak, no power). They don't want to hunt for your phone number.</p>
      <p><strong>The Fix:</strong></p>
      <ul>
        <li>Put your phone number in the top right corner of every page in big, bold text.</li>
        <li>Make it "Click-to-Call." If I tap it on my mobile, it should dial immediately.</li>
        <li>Have a "Book Online" button that floats or stays sticky as they scroll.</li>
        <li>Use action verbs: "Call Now for Emergency Service" is better than "Contact Us."</li>
      </ul>

      <h2>Mistake #2: Slow Load Speeds</h2>
      <p>Speed is a killer. 53% of mobile users abandon a site if it takes longer than 3 seconds to load. If your site is slow, you are literally handing money to the next plumber on the list.</p>
      <p><strong>The Fix:</strong></p>
      <ul>
        <li>Compress your images. You don't need 5MB photos of a tap.</li>
        <li>Minimize code and scripts.</li>
        <li>Use a fast host (not cheap $2/month shared hosting).</li>
        <li>Check your speed on Google PageSpeed Insights. Aim for a score of 90+.</li>
      </ul>

      <h2>Mistake #3: Generic Stock Photos</h2>
      <p>People buy from people. When I hire a tradesman, I am inviting a stranger into my home. I want to know who is coming.</p>
      <p>If your website is full of generic American stock photos of models in pristine hard hats pointing at blueprints, I don't trust you. It feels fake.</p>
      <p><strong>The Fix:</strong> Use real photos. Show your actual team. Show your actual branded trucks. Show your messy work in progress. Authentic, slightly imperfect photos convert significantly better than polished stock photos.</p>

      <h2>Mistake #4: No Social Proof "Above the Fold"</h2>
      <p>"Above the fold" means the part of the website I see before scrolling. If I land on your site and don't immediately see proof that you are good, I might leave.</p>
      <p><strong>The Fix:</strong></p>
      <ul>
        <li>Embed your Google Star Rating right near the top.</li>
        <li>Show logos of associations (Master Plumbers, NECA, etc.).</li>
        <li>Show badges like "24/7 Service" or "Licensed & Insured."</li>
      </ul>

      <h2>Mistake #5: Complicated Contact Forms</h2>
      <p>Nobody wants to fill out a 15-field form on their iPhone. Name, Address, Email, Phone, Description, Budget, How did you hear about us... Stop it.</p>
      <p><strong>The Fix:</strong> Reduce friction. Ask for Name, Phone, and "What's the problem?" That's it. You can get the address when you call them back.</p>

      <h2>The "Granny Test"</h2>
      <p>Hand your phone to your grandmother (or someone non-technical). Ask them to find your phone number and book a job. If they hesitate, stumble, or can't find it in 5 seconds, your site needs work. Fix these issues, and watch your conversion rate double.</p>
    `,
    author: "Brett Willis",
    date: "February 2, 2026",
    category: "Web Design",
    image: blogConversion,
    readTime: "8 min read"
  },
  {
    id: "4",
    slug: "google-local-services-ads-vs-traditional-ads",
    title: "Google Local Services Ads vs. Traditional Search Ads: What's Best for Tradies?",
    excerpt: "The Google Guaranteed badge is a game-changer. Here is the detailed breakdown of the difference between LSA and PPC, and which one gives you the best ROI.",
    content: `
      <h2>The Landscape Has Changed</h2>
      <p>For years, Google Ads (PPC) was the king. You bid on keywords, your text ad showed up, and you paid for the click. But recently, Google introduced a game-changer that pushed traditional ads down the page: <strong>Local Services Ads (LSA).</strong></p>

      <h2>What are Local Services Ads (LSA)?</h2>
      <p>You've seen them. They are the boxes at the very top of Google—above the map, above the text ads. They show a business name, a star rating, and a green checkmark that says "Google Guaranteed."</p>

      <h3>Key Differences:</h3>
      <ul>
        <li><strong>Pay Per Lead, Not Click:</strong> This is the massive difference. With traditional ads, you pay every time someone clicks, even if they bounce. With LSA, <strong>you only pay if they actually call you or message you.</strong> If it's a spam call or a wrong number, you can dispute it and get your money back.</li>
        <li><strong>The Trust Badge:</strong> The "Google Guaranteed" badge signals that Google has background-checked your business, verified your license, and verified your insurance. It builds massive trust instantly.</li>
        <li><strong>No Keywords:</strong> You don't bid on "emergency plumber." You just select your service categories (e.g., "Plumbing," "Water Heater Repair") and Google decides when to show you.</li>
      </ul>

      <h2>The Pros and Cons of Traditional Search Ads (PPC)</h2>
      <p>So, is traditional PPC dead? Absolutely not.</p>
      <p><strong>Pros of PPC:</strong></p>
      <ul>
        <li><strong>Scale:</strong> LSA inventory is limited. Only 3 businesses show up. PPC has unlimited scale.</li>
        <li><strong>Control:</strong> You can target specific keywords. Want to target specifically "Rheem 400L hot water system price"? You can do that with PPC. You can't with LSA.</li>
        <li><strong>Landing Pages:</strong> You can send traffic to a specific high-converting landing page. LSA just opens a Google form/dialer.</li>
      </ul>

      <h2>The Winning Strategy: Do Both</h2>
      <p>It's not an "either/or" question. The smartest trade businesses dominate the entire search results page (SERP).</p>
      <p>Imagine a customer searches "electrician near me."</p>
      <ol>
        <li>They see your <strong>LSA</strong> at the very top (Trust).</li>
        <li>They scroll down and see your <strong>Search Ad</strong> (Relevance).</li>
        <li>They see your <strong>Map Pack</strong> listing (Location).</li>
        <li>They see your <strong>Organic</strong> website link (Authority).</li>
      </ol>
      <p>When you own that much real estate, the customer feels like you are the <em>only</em> option in town. This is called "Search Dominance."</p>
      
      <h2>How to Get Started with LSA</h2>
      <p>Getting onto LSA is harder than PPC. You can't just pay. You have to pass the vetting process.</p>
      <ul>
        <li>Submit your Business License.</li>
        <li>Submit your Insurance Certificate.</li>
        <li>Undergo background checks (owner and sometimes field staff).</li>
        <li>Gather customer reviews (you need a minimum rating to appear).</li>
      </ul>
      <p>It takes time—sometimes weeks—to get approved. But once you are in, the leads are typically cheaper and higher quality than any other source. Start the process today.</p>
    `,
    author: "Brett Willis",
    date: "January 28, 2026",
    category: "Google Ads",
    image: blogLsa,
    readTime: "10 min read"
  },
  {
    id: "1",
    slug: "5-reasons-hvac-businesses-fail-google-ads",
    title: "5 Reasons Why HVAC Businesses Fail at Google Ads (And How to Fix It)",
    excerpt: "Most HVAC contractors are burning cash on Google Ads because of simple, avoidable mistakes. Here is the blueprint to turn your ad spend into booked jobs.",
    content: `
      <h2>The "Set It and Forget It" Trap</h2>
      <p>Google Ads is not a slow cooker. You can't just set it and walk away. The landscape changes daily—competitors change bids, search volumes shift with the weather, and Google's algorithm is constantly evolving.</p>
      
      <p>If you aren't optimizing your campaign weekly, you are losing money. Period.</p>

      <h2>1. Sending Traffic to Your Homepage</h2>
      <p>This is the #1 sin of contractor marketing. Your homepage is a maze. It has links to your "About Us" page, your blog, your gallery, and your social media.</p>
      <p>When someone searches "emergency AC repair," they don't want to read your mission statement. They want to book a repair.</p>
      <p><strong>The Fix:</strong> Build dedicated landing pages for each service. If they search for AC repair, send them to a page that talks ONLY about AC repair and has a big "Call Now" button.</p>

      <h2>2. Ignoring Negative Keywords</h2>
      <p>You pay for every click. If you don't use negative keywords, you might be paying for clicks from people searching for:</p>
      <ul>
        <li>"Free AC repair"</li>
        <li>"AC repair jobs"</li>
        <li>"DIY AC repair"</li>
        <li>"Auto AC repair" (if you only do residential)</li>
      </ul>
      <p><strong>The Fix:</strong> Review your search terms report weekly and relentlessly block irrelevant keywords.</p>

      <h2>3. Not Tracking Conversions</h2>
      <p>Clicks are vanity. Revenue is sanity. If you don't know exactly which keyword generated the phone call that led to a $10,000 install, you are flying blind.</p>
      <p><strong>The Fix:</strong> Implement call tracking (like CallRail) and connect it to your Google Ads account. You need to know that the keyword "blocked drain plumber" cost you $50 but made you $1,500.</p>

      <h2>4. Using "Broad Match" Keywords</h2>
      <p>Google loves to recommend "Broad Match" keywords because it spends your budget faster. This means your ad for "plumber" might show up for "plumber salary" or "mario plumber game."</p>
      <p><strong>The Fix:</strong> Use "Phrase Match" or "Exact Match" keywords to ensure your ads only show for people actually looking for your services.</p>

      <h2>5. Ignoring Mobile Experience</h2>
      <p>80% of emergency HVAC searches happen on a mobile phone. If your landing page is hard to read or the phone number isn't clickable, they will bounce.</p>
      <p><strong>The Fix:</strong> Test your ads on your own phone. Make sure the "Call Now" button is huge and sticky at the top of the screen.</p>

      <h2>Conclusion</h2>
      <p>Google Ads works. It works incredibly well for trades. But it's a precision tool, not a blunt instrument. Treat it with respect, and it will build your business.</p>
    `,
    author: "Brett Willis",
    date: "January 20, 2026",
    category: "Google Ads",
    image: blogFailedAds,
    readTime: "8 min read"
  },
  {
    id: "2",
    slug: "stop-relying-on-referrals",
    title: "Why Relying on Referrals is a Dangerous Growth Strategy",
    excerpt: "Referrals are great, but they are unpredictable. To scale your trade business, you need a predictable client acquisition system.",
    content: `
      <h2>The Comfort Zone of Referrals</h2>
      <p>We love referrals. They are free, they close easily, and there is high trust. But you cannot scale a business on "hope."</p>
      <p>If you want to grow from $1M to $5M, you can't just hope your past clients talk to their friends. You need a system.</p>

      <h2>The Problem with "Word of Mouth"</h2>
      <p>Referrals are inconsistent. You might get 5 referrals one month and 0 the next. How can you hire staff, buy trucks, or plan for the future when you don't know where your next job is coming from?</p>
      
      <h2>Predictability is King</h2>
      <p>Investors and smart business owners value predictability. A paid acquisition channel (like Facebook or Google Ads) is like a faucet. You turn it on, leads flow. You turn it up, more leads flow.</p>
      <p>Referrals are like rain. It's great when it happens, but you can't control the weather.</p>

      <h2>The "Referral Trap"</h2>
      <p>Relying solely on referrals creates an "Echo Chamber." You tend to get referrals for the same type of work you've always done. If you want to pivot to higher-margin work (e.g., from maintenance to installation), referrals alone won't get you there fast enough.</p>

      <h2>The Hybrid Approach</h2>
      <p>We aren't saying stop asking for referrals. We are saying build a machine that works <strong>alongside</strong> them.</p>
      <p>When you have a predictable flow of new leads coming in from ads, referrals become the "cherry on top" rather than the whole meal. This gives you the stability to sleep at night and the confidence to grow.</p>
      
      <h2>How to Transition</h2>
      <ol>
        <li><strong>Start small:</strong> Pick one channel (e.g., Google Ads) and master it.</li>
        <li><strong>Track your numbers:</strong> Know your Cost Per Lead (CPL) and Customer Acquisition Cost (CAC).</li>
        <li><strong>Automate referrals:</strong> Use email marketing to remind past clients to refer you, rather than waiting for it to happen by magic.</li>
      </ol>
    `,
    author: "Brett Willis",
    date: "January 14, 2026",
    category: "Business Growth",
    image: blogReferrals,
    readTime: "7 min read"
  },
  {
    id: "3",
    slug: "seo-vs-ppc-for-trades",
    title: "SEO vs. PPC: Where Should Trade Businesses Invest First?",
    excerpt: "The age-old debate. Should you invest in long-term organic growth or immediate paid traffic? The answer depends on your cash flow.",
    content: `
      <h2>The Great Debate: Rent vs. Buy</h2>
      <p>When it comes to digital marketing for trades, there are two main players: SEO (Search Engine Optimization) and PPC (Pay-Per-Click Advertising).</p>
      
      <h2>Understanding PPC (Google Ads)</h2>
      <p>Think of PPC like <strong>renting a penthouse</strong>. It's expensive, but you move in today and have the best view immediately. As soon as you stop paying rent, you're out on the street.</p>
      <p><strong>Pros:</strong> Instant results (calls in 48 hours), highly targeted, easy to measure.</p>
      <p><strong>Cons:</strong> Expensive (prices rise every year), zero long-term equity.</p>
      
      <h2>Understanding SEO (Organic Search)</h2>
      <p>Think of SEO like <strong>building a house</strong>. It takes months of laying the foundation, framing, and finishing. It's hard work and you don't see results immediately. But once it's built, you own it, and it pays you dividends for years without monthly "rent."</p>
      <p><strong>Pros:</strong> "Free" clicks (highest ROI long-term), builds massive trust/authority.</p>
      <p><strong>Cons:</strong> Slow (3-6 months minimum), requires upfront investment without instant return.</p>

      <h2>The Decision Matrix: Which One Do You Need?</h2>
      
      <h3>Scenario A: "I Need Cash Now"</h3>
      <p><strong>Winner: PPC.</strong> If your trucks are sitting idle next week, SEO won't save you. Google Ads can have your phone ringing in 48 hours. Start here to get cash flow moving.</p>

      <h3>Scenario B: "I Want to Dominate My Market"</h3>
      <p><strong>Winner: Both.</strong> You use PPC to get immediate jobs, and you reinvest a portion of that profit into SEO. Over time, your SEO leads (free) will start to overtake your PPC leads (paid), lowering your overall average cost per lead.</p>

      <h2>The Highpoint Strategy</h2>
      <p>We almost always recommend starting with PPC to get cash flow moving. It validates your offer and your website. Once the profit engine is running, take 20% of those profits and pour them into SEO to build your long-term asset value. This is how you build a sellable business.</p>
    `,
    author: "Brett Willis",
    date: "January 7, 2026",
    category: "Strategy",
    image: blogSeoPpc,
    readTime: "8 min read"
  }
];
