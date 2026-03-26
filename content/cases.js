// ─── Case Study Content ───────────────────────────────────────────────────
// Edit this file to update case study titles, metrics, and written content.

const cases={
onboarding:{
  tag:'Product Launch · Account Opening · Digital Banking',bg:'bg1',
  title:'From 48 hours to 10 minutes: rebuilding digital account opening for 2.5M users',
  metrics:[{num:'48h→10m',label:'Account opening time'},{num:'+15%',label:'Completion rate'},{num:'2.5M',label:'Users impacted'}],
  tabs:['Story','Process','Artifacts','Retrospective'],
  story:`<div class="msec"><div class="mst">The Problem</div><div class="msb"><strong>It was 2022, and a fast-growing digital bank was still onboarding users like it was designed for a physical branch visit.</strong> A user would download the app, start their account, then wait. Upload a government ID. Wait for manual review. Wait for a callback. 48 hours, if everything went right. It rarely did.<br><br>When I pulled the funnel data, the number that hit hardest wasn't the overall drop off, it was <strong>where</strong> it was happening. 60% of users who started the account-opening journey never reached an active, funded account. The heaviest exit point was the identity verification step. Not because users didn't want to continue, because the system was actively fighting them.</div></div>
<div class="msec"><div class="mst">What the data revealed (and what surprised everyone)</div><div class="msb">The first assumption from the team was that users were confused by the document upload instructions, so we improved them. Drop-off didn't move.<br><br>Then I dug deeper. <strong>42% of identity verification failures were third party API timeouts. These were not user errors at all.</strong> Users were retrying on a broken system, getting frustrated, and leaving. We had been attributing a system failure to user behavior for months.<br><br>The second insight came from the payment data. Funding drop offs weren't because users changed their minds, <strong>specific payment processors had transaction failure rates 3× the baseline.</strong> We built a list. 11 processors accounted for 68% of all funding-stage failures.</div></div>
<div class="msec"><div class="mst">The Hypothesis</div><div class="msb">If we could remove the manual review step entirely, replacing document upload with real time live video verification, and fix payment routing before users hit the failing processors, we could cut account opening time from days to minutes and meaningfully move the completion rate. The regulatory requirement (verifying identity) stays fully met. Only the mechanism changes.</div></div>`,
  process:`<div class="msec"><div class="mst">How we got from problem to shipped</div><div class="msteps">
<div class="mstep"><div class="msnum">1</div><div class="mstxt"><strong>Stakeholder mapping (Week 1):</strong> Compliance, Legal, Engineering, and the core platform team all had sign-off power. I mapped every dependency before writing a spec. Key learning: Compliance's concern was audit trail integrity, not the experience itself. That shaped the entire verification flow design.</div></div>
<div class="mstep"><div class="msnum">2</div><div class="mstxt"><strong>API failure audit (Week 2):</strong> Pulled 90 days of identity verification error logs. Categorized every failure: connection timeout vs. data mismatch vs. one-time passcode expiry. Built a priority matrix: which errors to handle in-app, which needed vendor fixes, which needed flow redesign.</div></div>
<div class="mstep"><div class="msnum">3</div><div class="mstxt"><strong>Live verification flow design (Weeks 3–5):</strong> Designed a 4-step real time video verification call to replace the manual document upload process. Key decisions: agent training protocol, low-connectivity fallback path, retry logic, and anti-fraud liveness check specifications.</div></div>
<div class="mstep"><div class="msnum">4</div><div class="mstxt"><strong>A/B test (Weeks 6–8):</strong> Ran the new flow against the legacy process on a 20% traffic split. Primary metric: time-to-active-funded-account. Secondary: completion rate, call duration, error rate. Monitored daily with a custom Adobe Analytics dashboard I built.</div></div>
<div class="mstep"><div class="msnum">5</div><div class="mstxt"><strong>Full rollout (Weeks 9–10):</strong> Staggered release, 20% → 50% → 100%. Built a real time alert for verification failure spikes. Account opening time dropped from 48 hours to under 10 minutes. Completion rate +15% within 60 days.</div></div>
</div></div>
<div class="msec"><div class="mst">Payment routing fix (parallel track)</div><div class="msb">While the verification launch ran, engineering built a dynamic payment routing layer: if a user's bank or payment processor was on the high-failure list, we surfaced an alternative funding method proactively before they hit the error message. This reduced funding-stage drop off by an estimated 8%.</div></div>`,
  artifacts:`<div class="msec"><div class="mst">Documents produced for this project</div>
<div class="agrid">
<div class="acard"><div class="alabel">PRD</div><div class="atit">Live Video Verification, Product Requirements</div><div class="adesc">Full scope: verification flow, fallback logic, fraud/liveness specifications, compliance requirements, agent training protocol. Success metrics defined pre launch.</div></div>
<div class="acard"><div class="alabel">Technical Spec</div><div class="atit">API Failure Classification Matrix</div><div class="adesc">90-day error log analysis: vendor-side fixable vs. in-app handleable vs. flow redesign required. Used to scope the engineering sprint backlog.</div></div>
<div class="acard"><div class="alabel">Research</div><div class="atit">Payment Processor Failure Analysis</div><div class="adesc">Ranked payment processors by transaction failure rate. Built the routing priority model used to surface alternative payment options proactively.</div></div>
<div class="acard"><div class="alabel">A/B Test Design</div><div class="atit">New vs. Legacy Flow Test Plan</div><div class="adesc">Hypothesis, traffic allocation (20/80 split), primary/secondary metrics, statistical significance threshold, monitoring cadence, and early-stop criteria.</div></div>
</div></div>
<div class="msec" style="margin-top:1.4rem"><div class="mst">Funnel, Before vs. After Launch</div>
<div class="fviz">
<div class="frow"><div class="flabel">App opened</div><div class="fbw"><div class="fbar" style="width:100%;background:#C4501A">100%</div></div><div class="fpct">100%</div></div>
<div class="frow"><div class="flabel">Verification started</div><div class="fbw"><div class="fbar" style="width:78%;background:#C4501A">78%</div></div><div class="fpct">78%</div></div>
<div class="frow"><div class="flabel" style="color:#888">Verification passed (before)</div><div class="fbw"><div class="fbar" style="width:38%;background:#888">38%</div></div><div class="fpct" style="color:#888">38%</div></div>
<div class="frow"><div class="flabel" style="color:#27476A;font-weight:500">Verification passed (after)</div><div class="fbw"><div class="fbar" style="width:61%;background:#27476A">61%</div></div><div class="fpct" style="color:#27476A;font-weight:600">61%</div></div>
<div class="frow"><div class="flabel">Account funded</div><div class="fbw"><div class="fbar" style="width:53%;background:#27476A">53%</div></div><div class="fpct">53%</div></div>
</div></div>`,
  retro:`<div class="msec"><div class="mst">What I'd do differently</div><div class="mquote">"The hardest part wasn't the UX, it was compliance alignment. Every delay we hit came from surprises, not constraints. My lesson: map every stakeholder's specific concern in week 1 (for Compliance it was audit trail integrity, not the user experience), then design around those concerns explicitly. Surprises cost sprints. Transparency is faster."</div></div>
<div class="msec"><div class="mst">What this project taught me about PM craft</div><div class="msb">Before this, I thought drop off analysis meant finding the leaky screen. After this, I understand it means finding the leaky <strong>system</strong>. The user experience failure was downstream of an API failure and a routing logic failure. Neither showed up in a standard funnel view. The question that changed my entire approach: <em>"Is this a user behavior problem or a system behavior problem?"</em> Those require completely different solutions.</div></div>`
},

dropoff:{
  tag:'Analytics · Behavioral Segmentation · Remarketing',bg:'bg2',
  title:'The drop off detective: cutting repeat signup failures by 22%',
  metrics:[{num:'−22%',label:'Repeat failures'},{num:'+18%',label:'Conversion lift'},{num:'×60%',label:'Faster iteration'}],
  tabs:['Story','Process','Artifacts','Retrospective'],
  story:`<div class="msec"><div class="mst">The Problem</div><div class="msb"><strong>One in four users who failed account signup tried again. And then failed again.</strong> At scale across 2.5M accounts, that's not a UX inconvenience, it's a massive acquisition cost multiplier and a signal that something structural was broken.<br><br>The team's assumption: these were "confused users" who needed better instructions. I wasn't convinced. The retry rate was too consistent, too patterned. Something systematic was causing it.</div></div>
<div class="msec"><div class="mst">The data architecture problem nobody had noticed</div><div class="msb">When I tried to analyze the repeat-failure cohort, I hit the first real obstacle: <strong>our analytics tracked sessions, not users.</strong> Someone who failed on Monday and retried on Wednesday appeared as two separate, unrelated sessions. There was no way to see the same person's journey across time.<br><br>I rebuilt the query in SQL to join on user ID across sessions. The first time I ran it, the picture became instantly clear: <strong>63% of repeat failures were happening at the exact same step as the person's first failure.</strong> Not a new confusion. The same unresolved friction point, hit again.</div></div>
<div class="msec"><div class="mst">Three root causes, not one</div><div class="msb">Segmenting by device, payment processor, and time-of-attempt revealed three distinct failure clusters:<br><br><strong>Cluster 1API failures:</strong> 42% of identity verification failures were third party service timeouts. These users weren't doing anything wrong.<br><strong>Cluster 2Device failures:</strong> Mobile users on older Android devices with low-resolution cameras had 3× the document rejection rate. Image compression degraded quality below the processing threshold.<br><strong>Cluster 3Payment failures:</strong> 11 specific payment processors had failure rates above 18%. Users in these clusters were retrying the funding step, not the verification step.</div></div>`,
  process:`<div class="msec"><div class="mst">From segmentation to solution</div><div class="msteps">
<div class="mstep"><div class="msnum">1</div><div class="mstxt"><strong>User-level analytics rebuild:</strong> Redesigned the tracking schema to join user IDs across session boundaries. This single infrastructure change, shifting from session tracking to user tracking, unlocked all subsequent analysis and changed how the entire team understood the funnel.</div></div>
<div class="mstep"><div class="msnum">2</div><div class="mstxt"><strong>Behavioral clustering:</strong> Segmented all repeat-fail users by device type, OS version, payment processor, time of day, attempt count, and failure step. Built a failure taxonomy with 3 primary and 6 secondary clusters with specific root causes for each.</div></div>
<div class="mstep"><div class="msnum">3</div><div class="mstxt"><strong>Hypothesis testing across 3 sprints:</strong> H1: real time document quality indicator for low-resolution devices. H2: friendly error messaging with retry CTA for API timeout failures. H3: proactive alternative payment options for high-failure processors. H1 and H2 both showed significant improvement. H3 showed no lift, documented as a negative result.</div></div>
<div class="mstep"><div class="msnum">4</div><div class="mstxt"><strong>Behavioral remarketing automation:</strong> Built context-aware re-engagement campaigns mapped to failure clusters. Not generic "complete your account" pushes, step-specific messages: "Having trouble with verification? Here's an alternative path." Designed 4 message variants with specific triggers per failure type.</div></div>
<div class="mstep"><div class="msnum">5</div><div class="mstxt"><strong>Results:</strong> Repeat failures −22% within 90 days. Conversion +18%. Iteration velocity ×60% faster because the team now had a shared failure taxonomy that let engineering triage tickets in minutes instead of hours.</div></div>
</div></div>
<div class="msec"><div class="mst">User profiles identified through segmentation</div>
<div class="pgrid">
<div class="persona"><div class="pav pa1">MK</div><div class="pname">Marcus, 34</div><div class="prole">Mid-level professional, smaller city</div><div class="pneed">Older smartphone with a 5MP camera. Hit a document rejection 3× before abandoning. Never received an error message explaining what "acceptable quality" meant.</div></div>
<div class="persona"><div class="pav pa2">SP</div><div class="pname">Sara, 28</div><div class="prole">Salaried, urban area</div><div class="pneed">Identity verification worked fine, but her bank's payment transfer failed the funding step. She assumed her bank was blocking it and gave up. She never knew it was a routing issue on our side.</div></div>
<div class="persona"><div class="pav pa3">AJ</div><div class="pname">Alex, 22</div><div class="prole">First-time banking, student</div><div class="pneed">The one-time verification passcode expired during a slow network connection. No in-app guidance on what to do. Restarted the entire flow 4 times from scratch.</div></div>
</div></div>`,
  artifacts:`<div class="msec"><div class="mst">Artifacts & Deliverables</div>
<div class="agrid">
<div class="acard"><div class="alabel">Analytics Design</div><div class="atit">User-Level Funnel Schema (SQL)</div><div class="adesc">Cross-session user tracking schema built in SQL. First-ever ability to perform cohort analysis of repeat-failure behavior across the full onboarding funnel.</div></div>
<div class="acard"><div class="alabel">Research</div><div class="atit">Failure Taxonomy Document</div><div class="adesc">3 primary + 6 secondary failure clusters with user counts, severity scores, and root causes. Used as shared language between Product, Engineering, and Customer Support.</div></div>
<div class="acard"><div class="alabel">Remarketing</div><div class="atit">Behavioral Campaign Brief</div><div class="adesc">4 message variants mapped to failure clusters: send timing, channel, and success metric per campaign type. Designed to feel helpful, not spammy.</div></div>
<div class="acard"><div class="alabel">Test Report</div><div class="atit">3-Hypothesis Experiment Results</div><div class="adesc">H1 and H2 showed significant improvement. H3 showed no lift, documented as a negative result with analysis. Negative results shared openly with the team.</div></div>
</div></div>`,
  retro:`<div class="msec"><div class="mst">What I'd do differently</div><div class="mquote">"I'd have rebuilt the analytics schema in month one, not month six. We made product decisions for over six months based on session-level data that was fundamentally incapable of answering 'is this the same person failing again?' That's not a tooling problem. It is a question-asking problem. Before I instrument anything now, I ask: what's the unit of analysis? Session? User? Cohort? The answer shapes the entire infrastructure."</div></div>
<div class="msec"><div class="mst">Why the negative result mattered as much as the wins</div><div class="msb">H3, proactively surfacing alternative payment methods for high-failure processors,, showed <strong>no statistically significant lift.</strong> We documented it, shared it, and deprioritized the feature. The lesson: a team that knows what doesn't work is faster than a team that only publishes wins. Negative results are strategy, not failure.</div></div>`
},

lending:{
  tag:'Product Strategy · Lending · Market Research · BRD',bg:'bg3',
  title:'Launching an instant personal loan product: from market research to BRD',
  metrics:[{num:'0→1',label:'New product built'},{num:'3',label:'User segments defined'},{num:'BRD',label:'Full strategy doc'}],
  tabs:['Story','Research','BRD Highlights','Retrospective'],
  story:`<div class="msec"><div class="mst">The Context</div><div class="msb"><strong>A fast-growing digital bank had 25M+ savings account holders, and none of them had been offered a loan yet.</strong> The opportunity: instant personal loans delivered entirely digitally, for customers who already trusted the platform with their money. No branch visit. No paperwork. Approval and disbursement in minutes.<br><br>The product was internally called FirstMoney. My job was to research the market, understand who we were actually building for, and write the business requirements that would shape the entire product roadmap.</div></div>
<div class="msec"><div class="mst">The real question we were trying to answer</div><div class="msb">Most digital lending products ask: "How do we approve loans faster?" I wanted to ask something harder: <strong>"Why do people who need loans decide not to take them?"</strong><br><br>Because if trust, not speed,, was the real barrier, then building the fastest approval engine in the market would completely miss the point. We needed to understand the psychology of the first-time digital borrower before writing a single feature spec.</div></div>
<div class="msec"><div class="mst">What the research uncovered</div><div class="msb">Three distinct user segments emerged, each with completely different jobs to be done, different trust signals, and different reasons to walk away. Building one product for all three would mean a diluted product for none.<br><br>The insight that changed our positioning: <strong>the biggest competitor wasn't another loan app. It was the decision to not take a loan at all.</strong> Our real job was to make the first step feel safe, not fast.</div></div>`,
  research:`<div class="msec"><div class="mst">User Segments, Jobs to Be Done Framework</div>
<table class="jtable">
<thead><tr><th>Segment</th><th>Core Job to Be Done</th><th>Primary Trust Signal</th><th>Biggest Barrier</th></tr></thead>
<tbody>
<tr><td>Michael, 34, Mid-level professional</td><td>"Bridge a 2-week cash gap before paycheck"</td><td>Transparent total cost, no surprises</td><td>Fear of hidden fees discovered after disbursement</td></tr>
<tr><td>Sarah, 26, Young urban professional</td><td>"Fund a purchase now, pay over 3 months"</td><td>Speed + fully app-native experience</td><td>Doesn't want to call anyone or visit a physical location</td></tr>
<tr><td>David, 42, Small business owner</td><td>"Working capital for a 30-day inventory cycle"</td><td>Flexible repayment, no early-payoff penalty</td><td>Past bad experience with informal or high-fee lenders</td></tr>
</tbody>
</table></div>
<div class="msec"><div class="mst">Competitive Benchmarking, Digital Instant Lending</div><div class="msb">Analyzed 5 direct competitors across approval time, interest rate transparency, and completion rates. Key findings:<br><br><strong>Speed:</strong> Approval times ranged from 2 minutes to 48 hours. Speed had become table stakes, differentiation required something else.<br><strong>Transparency:</strong> 4 of 5 competitors buried the effective interest rate until Step 3+. Users consistently cited "hidden charges" as their primary reason for distrust and abandonment.<br><strong>Trust gap:</strong> Products backed by established banks had 2× the completion rates vs. standalone fintech apps in user research, brand trust transferred.<br><br><strong>Positioning gap identified:</strong> No competitor was leading with upfront, transparent pricing + established bank credibility. That was the open lane.</div></div>
<div class="msec"><div class="mst">Market Opportunity Sizing</div><div class="msb">Personal loan market in the target segment: $143B+ with digital-first segment growing 28% YoY. Existing platform's account holder base: 25M+ customers. This was a significant cross-sell opportunity with zero acquisition cost for the first cohort. Even a 2% conversion rate on the existing base represented a meaningful loan portfolio with minimal CAC.</div></div>`,
  brd:`<div class="msec"><div class="mst">Business Requirements, Core Decisions</div><div class="msb">The BRD covered: business objective, user personas, market opportunity, functional requirements, non-functional requirements (latency, fraud, compliance), success metrics, and go to market strategy. Below are the decisions that shaped the product most.</div></div>
<div class="msec"><div class="mst">Success Metrics (defined pre launch)</div>
<table class="jtable">
<thead><tr><th>Metric</th><th>Type</th><th>Target (90-day)</th></tr></thead>
<tbody>
<tr><td>Application completion rate</td><td>Primary</td><td>&gt;55% (start to submission)</td></tr>
<tr><td>Approval-to-disbursement time</td><td>Primary</td><td>&lt;8 min for pre-qualified users</td></tr>
<tr><td>Day-30 repayment rate</td><td>Primary</td><td>&gt;92%</td></tr>
<tr><td>Customer effort score (CES)</td><td>Secondary</td><td>&lt;3 (lower = easier, 1–7 scale)</td></tr>
<tr><td>Fraud rate</td><td>Guard metric</td><td>&lt;0.2% of disbursements</td></tr>
</tbody>
</table></div>
<div class="msec"><div class="mst">3 key product decisions documented in BRD</div><div class="msteps">
<div class="mstep"><div class="msnum">1</div><div class="mstxt"><strong>Show total repayment cost in Step 1, not Step 3:</strong> Against industry convention, we led with the full cost of the loan upfront. User research showed transparency built trust rather than creating hesitation. A/B test: completion rate +11% vs. the hidden-until-late-step approach.</div></div>
<div class="mstep"><div class="msnum">2</div><div class="mstxt"><strong>No physical visit, ever for existing account holders:</strong> Non-negotiable product requirement. Pre-fill all identity information already on file to minimize input friction. Maximum 4 steps from application start to approval decision.</div></div>
<div class="mstep"><div class="msnum">3</div><div class="mstxt"><strong>Early repayment with no penalty, marketed as a feature, not buried in terms:</strong> Specifically highlighted because it was the top trust signal for small business owners (Segment 3). Made it prominent in the product UI and in all acquisition marketing.</div></div>
</div></div>`,
  retro:`<div class="msec"><div class="mst">What I'd do differently</div><div class="mquote">"The research process was thorough but too slow. I spent 6 weeks on competitive analysis that could have been compressed to 2 weeks with a sharper hypothesis. The better question isn't 'what are competitors doing?', it's 'what has every competitor consistently gotten wrong?' Start with the failure modes, not the feature lists."</div></div>
<div class="msec"><div class="mst">The insight that changed my approach to strategy</div><div class="msb">The original product brief assumed speed-of-approval was the primary competitive advantage. The research showed trust was. That's a fundamentally different product, different positioning, different UX priorities, different success metrics.<br><br>The lesson: before writing requirements, validate the problem hypothesis, not just the solution. A requirements document that solves the wrong problem perfectly is worse than no document at all.</div></div>`
},

agile:{
  tag:'Internal Product · PMO · Agile Transformation',bg:'bg5',
  title:'Agile at scale: the delivery system 10 engineering squads actually adopted',
  metrics:[{num:'−20%',label:'Sprint spillovers'},{num:'10+',label:'Squads adopted'},{num:'−90%',label:'Manual reporting'}],
  tabs:['Story','Process','Artifacts','Retrospective'],
  story:`<div class="msec"><div class="mst">The Context</div><div class="msb">At Ahold Delhaize USA, 10+ engineering squads were running Agile, but no two of them meant the same thing by it. Sprint planning looked different across teams. "Done" had different definitions. Dependencies between teams lived in personal spreadsheets. Every Friday, 5 different status decks went to leadership, each in a different format, all assembled manually.<br><br>The result: 1 in 5 sprint commitments didn't ship. Nobody could see why until after the missed deadline.</div></div>
<div class="msec"><div class="mst">My reframe: this is a product problem, not a process problem</div><div class="msb">The instinct from leadership was to mandate a process, standardize, train, enforce compliance. I pushed back. <strong>Engineers resist process tools they didn't choose and don't find useful.</strong> Enforcement would create compliance theater, not real improvement.<br><br>My approach: treat the squads as users. What job were they trying to do? What made their existing workflows painful? Build something they'd actually want to use, and adoption would follow on its own.</div></div>
<div class="msec"><div class="mst">What the "users" actually needed</div><div class="msb">Discovery interviews with squad leads revealed three consistent pain points:<br><br><strong>1. Invisible dependencies:</strong> "I don't know I'm blocked until I'm already blocked."<br><strong>2. Inconsistent release gates:</strong> "Architecture and Security sign off differently every sprint."<br><strong>3. Manual overhead:</strong> "I spend 2 hours every Friday copying data from Jira into a slide deck nobody reads."</div></div>`,
  process:`<div class="msec"><div class="mst">How I built and shipped the Agile Lifecycle Hub</div><div class="msteps">
<div class="mstep"><div class="msnum">1</div><div class="mstxt"><strong>Discovery (2 weeks):</strong> 1:1 interviews with 8 squad leads across Data, Retail, and Security programs. Mapped current workflows, pain points, and what "good" meant to each. The cross-team dependency board concept resonated most consistently. No one had ever seen cross-squad blockers in one place before.</div></div>
<div class="mstep"><div class="msnum">2</div><div class="mstxt"><strong>MVP design:</strong> Started with the single most-requested feature: a cross-team dependency board in Jira. Everything else was secondary. This was the hook that got squads to try the tool at all.</div></div>
<div class="mstep"><div class="msnum">3</div><div class="mstxt"><strong>4-week pilot with 2 squads:</strong> Weekly feedback loops. Key finding: squads didn't want more templates. They wanted fewer decisions. Simplified the sprint planning template from 12 fields to 5 required plus 4 optional.</div></div>
<div class="mstep"><div class="msnum">4</div><div class="mstxt"><strong>Expand to 10+ squads:</strong> Used pilot squads as internal champions. Let them demo to peers. Peer influence was more effective than top-down rollout. Added automated reporting that replaced the Friday manual status decks.</div></div>
<div class="mstep"><div class="msnum">5</div><div class="mstxt"><strong>Results in 90 days:</strong> Sprint spillover down 20%. Manual reporting time down 90%. Release readiness checkpoints completed 15% earlier on average. Cross-team dependency board cited as the single most valuable feature.</div></div>
</div></div>

<div class="msec"><div class="mst">The dependency problem: visualized</div>
<div class="case-visual">
<div class="dep-diagram">
  <div style="font-family:var(--sans);font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink3);margin-bottom:.5rem">Before: invisible cross-team blockers</div>
  <div class="dep-row"><div class="dep-team" style="border-color:#C4501A">Data Squad</div><div class="dep-link" style="background:linear-gradient(90deg,#C4501A,transparent)"></div><div class="dep-team">Retail Squad</div><div style="margin-left:.5rem"><span class="dep-badge db-before">Blocked, unknown</span></div></div>
  <div class="dep-row" style="margin-top:.4rem"><div class="dep-team" style="border-color:#C4501A">Security</div><div class="dep-link" style="background:linear-gradient(90deg,#C4501A,transparent)"></div><div class="dep-team">Data Squad</div><div style="margin-left:.5rem"><span class="dep-badge db-before">Blocked, unknown</span></div></div>
  <div style="font-family:var(--sans);font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink3);margin:1rem 0 .5rem">After: all dependencies in one board</div>
  <div class="dep-row"><div class="dep-team">Data Squad</div><div class="dep-link"></div><div class="dep-team">Retail Squad</div><div style="margin-left:.5rem"><span class="dep-badge db-after">Visible day 1</span></div></div>
  <div class="dep-row" style="margin-top:.4rem"><div class="dep-team">Security</div><div class="dep-link"></div><div class="dep-team">Data Squad</div><div style="margin-left:.5rem"><span class="dep-badge db-after">Resolved sprint 2</span></div></div>
</div>
</div></div>

<div class="msec"><div class="mst">Sprint spillover: before vs after</div>
<div class="case-visual">
<div class="spillover-viz">
  <div class="spill-row"><div class="spill-label" style="font-weight:500">Before</div><div class="spill-bar-wrap"><div class="spill-bar" style="width:25%;background:#C4501A">1 in 5 sprints missed</div></div><div class="spill-pct" style="color:#C4501A">25%</div></div>
  <div class="spill-row"><div class="spill-label" style="font-weight:500;color:#27476A">After</div><div class="spill-bar-wrap"><div class="spill-bar" style="width:20%;background:#27476A">Reduced</div></div><div class="spill-pct" style="color:#27476A">20%</div></div>
  <div style="font-size:.72rem;color:var(--ink3);font-weight:300;margin-top:.5rem;font-style:italic">Sprint spillover rate dropped 20% within the first quarter of full rollout</div>
</div>
<div class="sprint-board">
  <div>
    <div class="sb-col-head">Backlog</div>
    <div class="sb-card"><div class="sb-card-label">API rate limit fix</div><div class="sb-card-tag tag-data">Data</div></div>
    <div class="sb-card"><div class="sb-card-label">Checkout redesign</div><div class="sb-card-tag tag-retail">Retail</div></div>
  </div>
  <div>
    <div class="sb-col-head">In Progress</div>
    <div class="sb-card"><div class="sb-card-label">Auth service upgrade</div><div class="sb-card-tag tag-sec">Security</div></div>
    <div class="sb-card"><div class="sb-card-label">Inventory sync</div><div class="sb-card-tag tag-retail">Retail</div></div>
  </div>
  <div>
    <div class="sb-col-head">Blocked</div>
    <div class="sb-card" style="border-color:#FF7A7A"><div class="sb-card-label">Payment gateway</div><div class="sb-card-tag tag-block">Blocked by Security</div></div>
  </div>
  <div>
    <div class="sb-col-head">Done</div>
    <div class="sb-card" style="opacity:.7"><div class="sb-card-label">SSO integration</div><div class="sb-card-tag tag-sec">Security</div></div>
    <div class="sb-card" style="opacity:.7"><div class="sb-card-label">Dashboard v2</div><div class="sb-card-tag tag-data">Data</div></div>
  </div>
</div>
</div></div>`,
  artifacts:`<div class="msec"><div class="mst">Artifacts & Deliverables</div>
<div class="agrid">
<div class="acard"><div class="alabel">Discovery Research</div><div class="atit">Squad Lead Interview Synthesis</div><div class="adesc">8 interviews synthesized into 3 pain point clusters with frequency and severity scores. Used to prioritize the MVP feature set and sequence the rollout.</div></div>
<div class="acard"><div class="alabel">Product Spec</div><div class="atit">Agile Lifecycle Hub, PRD</div><div class="adesc">Full product requirements: dependency board, standardized sprint templates, automated reporting, and release readiness checklist. Success metrics defined pre launch.</div></div>
<div class="acard"><div class="alabel">Reporting</div><div class="atit">Automated Delivery Metrics Dashboard</div><div class="adesc">Jira-integrated dashboard replacing 5 manual weekly status decks. Showed velocity, spillover rate, and release readiness per squad in real time.</div></div>
<div class="acard"><div class="alabel">Change Management</div><div class="atit">Champion Program & Rollout Playbook</div><div class="adesc">2-squad pilot plan with weekly feedback cadence. Internal champion identification and peer-demo framework used for the broader rollout.</div></div>
</div></div>`,
  retro:`<div class="msec"><div class="mst">What I'd do differently</div><div class="mquote">"I underestimated how much internal politics shaped adoption. Two squads resisted, not because the tool was bad, but because their leads saw standardization as a loss of autonomy. I learned that change management is itself a product: you need to understand your resistant users' fears as deeply as you understand your enthusiastic users' needs. I'd have run 1:1s with skeptical squad leads before the pilot, not after."</div></div>`
},

dormant:{
  tag:'Growth · Lifecycle Marketing · Behavioral Analytics',bg:'bg6',
  title:'Waking the dormant: reactivating 10% of inactive accounts through behavioral signals',
  metrics:[{num:'+10%',label:'Dormant reactivation'},{num:'4',label:'Behavioral signals used'},{num:'22%',label:'Organic channel share'}],
  tabs:['Story','Process','Artifacts','Retrospective'],
  story:`<div class="msec"><div class="mst">The Problem</div><div class="msb"><strong>At any digital bank, dormant accounts are a quiet operational cost.</strong> The user completed sign up. They funded their account. Then, nothing. No transactions, no engagement, no response to re-engagement pushes. Pure overhead: identity verification, compliance, and maintenance costs with zero revenue.<br><br>The platform had a significant cohort of accounts inactive for 90+ days. The standard response was a generic "we miss you" email campaign with a 2% open rate and near-zero reactivation. I was convinced we could do better, not by sending more messages, but by sending smarter ones.</div></div>
<div class="msec"><div class="mst">The key insight: not all dormant accounts are the same</div><div class="msb">Before designing any campaign, I segmented the inactive cohort by behavior. Three categories emerged:<br><br><strong>Lapsed users (42%):</strong> Had funded, made 1–2 transactions, then stopped. Likely found the experience unclear or didn't see immediate value after first use.<br><strong>Never-transacted (35%):</strong> Funded but never made a single transaction. Onboarding friction or absent first-use motivation.<br><strong>Fully churned (23%):</strong> Multiple transactions, then complete stop. Likely have a competing primary account they switched to.</div></div>`,
  process:`<div class="msec"><div class="mst">How we designed the reactivation system</div><div class="msteps">
<div class="mstep"><div class="msnum">1</div><div class="mstxt"><strong>Behavioral win-back scoring model:</strong> Built a 4-signal model to predict reactivation probability: last login recency, lifetime transaction count, account setup completion state, and app version currency. Scored each inactive user 1–10. Users scoring 8–10 had 3× the reactivation rate of 1–4 scorers, confirming the model's predictive value before spending any campaign budget.</div></div>
<div class="mstep"><div class="msnum">2</div><div class="mstxt"><strong>Segment-specific campaigns:</strong> Lapsed users received feature discovery messages ("Did you know you can..."). Never-transacted users received a first-transaction incentive (cashback on first use). Fully churned users received a competitive positioning message based on inferred reasons for switching away.</div></div>
<div class="mstep"><div class="msnum">3</div><div class="mstxt"><strong>SEO + organic reactivation channel:</strong> Built content targeting search queries like "how to reactivate my [bank] account", capturing users who were actively trying to return but couldn't find the path. This channel drove 22% of all reactivations at zero variable cost per user.</div></div>
<div class="mstep"><div class="msnum">4</div><div class="mstxt"><strong>Measurement:</strong> Reactivation defined as: first transaction within 30 days of campaign contact. Overall reactivation +10% vs. control group. Win-back score 8–10 users reactivated at 3× the rate of score 1–4 users.</div></div>
</div></div>`,
  artifacts:`<div class="msec"><div class="mst">Artifacts & Deliverables</div>
<div class="agrid">
<div class="acard"><div class="alabel">Data Model</div><div class="atit">Win-Back Probability Scoring Model</div><div class="adesc">4-signal behavioral model predicting reactivation likelihood. Scored entire dormant cohort and segmented into 3 tiers for campaign targeting and budget allocation.</div></div>
<div class="acard"><div class="alabel">Campaign Design</div><div class="atit">Segment-Specific Re-engagement Brief</div><div class="adesc">3 campaign variants (lapsed / never-transacted / churned) with channel mix, message strategy, send timing, and success metrics per segment.</div></div>
<div class="acard"><div class="alabel">Content Strategy</div><div class="atit">Organic Reactivation Content Plan</div><div class="adesc">Target keyword list, content briefs for organic search, and performance tracking plan. Delivered 22% of total reactivations at zero variable cost.</div></div>
<div class="acard"><div class="alabel">Analysis</div><div class="atit">90-Day Reactivation Results Report</div><div class="adesc">Cohort analysis by segment, channel, and win-back score. Includes model accuracy assessment and recommendations for the next campaign cycle.</div></div>
</div></div>`,
  retro:`<div class="msec"><div class="mst">What I'd do differently</div><div class="mquote">"I'd have invested earlier in understanding why users became dormant, not just who they were once they went dormant. We treated reactivation as a communication problem. It's partially a product problem, the accounts that went dormant fastest had the most friction in their first-week experience. Reactivation is downstream of onboarding. Fix the source, not the symptom."</div></div>`
},

teardown:{
  tag:'Product Thinking · US Market · Competitive Analysis',bg:'bg4',
  title:'Chime vs. what I built: a 5-screen account opening teardown',
  metrics:[{num:'5',label:'Screens analyzed'},{num:'3',label:'Friction points found'},{num:'2',label:'Redesign proposals'}],
  tabs:['Story','Analysis','Proposals','Retrospective'],
  story:`<div class="msec"><div class="mst">Why this teardown</div><div class="msb">After rebuilding a digital account opening flow for 2.5M users, I wanted to stress-test my instincts against how US neobanks solve the same problem. Chime has 22M+ accounts, the largest neobank in the US. If my thinking about onboarding is sound, it should show up in what Chime got right. If my blind spots exist, they should show up in what I'd critique.<br><br>I went through Chime's full account opening 4 times: as a first-timer, as someone who made errors, as someone who abandoned midway and came back, and on a throttled connection simulating a slower network.</div></div>`,
  analysis:`<div class="msec"><div class="mst">What Chime gets right</div><div class="msteps">
<div class="mstep"><div class="msnum">✓</div><div class="mstxt"><strong>Screen 1, Value-first framing:</strong> Chime never says "bank account." It says "Get paid 2 days early." The first screen is entirely about what you gain, not what you're signing up for. This matches exactly what I observed: users who understood the outcome before the process had 2× the completion rate.</div></div>
<div class="mstep"><div class="msnum">✓</div><div class="mstxt"><strong>Progress architecture:</strong> Shows 4 steps, not 12. The actual journey may be longer, but the perceived length is managed deliberately. Users who can see the end of a process are more likely to continue through it.</div></div>
<div class="mstep"><div class="msnum">✓</div><div class="mstxt"><strong>Identity verification framing:</strong> Before asking for a Social Security Number, Chime explains why in plain language: "We're required by federal law to verify your identity." This preemptive transparency prevents the trust-breaking moment I saw repeatedly, users who don't understand why you need sensitive information will abandon rather than comply.</div></div>
</div></div>
<div class="msec"><div class="mst">Where Chime creates unnecessary friction</div><div class="msteps">
<div class="mstep"><div class="msnum">✗</div><div class="mstxt"><strong>Direct deposit setup timing:</strong> This screen appears before the user has received their card or made a single transaction. Asking for a high-commitment action before delivering any value. I watched 3 different test users abandon here. The feature likely optimizes for setup rate (a vanity metric); it should optimize for trust-building first.</div></div>
<div class="mstep"><div class="msnum">✗</div><div class="mstxt"><strong>No graceful exit on high-commitment steps:</strong> Direct deposit enrollment and the credit-building offer have no visible, shame-free "do this later" option. Users who aren't ready feel trapped, not guided, and trapped users abandon.</div></div>
<div class="mstep"><div class="msnum">✗</div><div class="mstxt"><strong>Error states on slow connections:</strong> On a throttled connection, the identity verification step times out with a generic error. No retry explanation, no "your progress is saved" reassurance. This is the exact failure mode I fixed in my own product, users assume their entire submission was lost and restart from the beginning.</div></div>
</div></div>`,
  proposals:`<div class="msec"><div class="mst">What I'd change if I were their PM</div><div class="msteps">
<div class="mstep"><div class="msnum">1</div><div class="mstxt"><strong>Move direct deposit setup to Day 3 post-activation:</strong> Trigger it after the user receives their card and completes their first transaction. Value is delivered; trust is earned. A/B test hypothesis: direct deposit setup completion +25–30% when triggered post-first-transaction vs. during initial onboarding.</div></div>
<div class="mstep"><div class="msnum">2</div><div class="mstxt"><strong>Add explicit progress-saving confirmation for every high-friction step:</strong> "Your application is saved. You can continue anytime from the app." Based on what I saw in our funnel work, most abandons aren't permanent, they're pauses. This message alone could recover 15–20% of apparent abandonments.</div></div>
</div></div>
<div class="msec"><div class="mst">The meta-lesson</div><div class="msb">The best thing about tearing down products you didn't build: you can see the trade-offs clearly. Chime optimized for setup completion rate (a defensible North Star). The cost is friction at high-commitment steps. The deeper question I'd ask their PM: is the user who abandons at direct deposit setup permanently lost, or just waiting for a better moment? If it's the latter, you're leaving significant long-term value on the table.</div></div>`,
  retro:`<div class="msec"><div class="mst">What this exercise taught me</div><div class="mquote">"Doing teardowns of products from a different market is one of the most useful things I do. The core problems are universal, trust, friction, high-commitment asks, unclear value exchange. The solutions look different because regulation and culture differ. But the PM thinking underneath? Identical. A user who doesn't understand why you need sensitive personal information will abandon anywhere in the world."</div></div>`
},

dashboard:{
  tag:'Data Product · Tableau · Real-time Alerting',bg:'bg7',
  title:'Seeing problems before users report them: a real time activation metrics system',
  metrics:[{num:'70%',label:'Faster issue detection'},{num:'5',label:'Manual reports replaced'},{num:'Real-time',label:'Alerting system'}],
  tabs:['Story','Process','Artifacts','Retrospective'],
  story:`<div class="msec"><div class="mst">The Problem</div><div class="msb"><strong>We were learning about critical activation failures from customer support tickets.</strong> A user would hit an error, contact support, and only when ticket volume spiked would the team realize something was broken, sometimes 6+ hours after the issue started. In a product processing thousands of new account applications daily, that detection lag was costing real conversion.<br><br>The existing reporting was fully manual: every Monday morning, an analyst pulled last week's metrics and put them in a slide deck. By the time anyone read it, the data was 4 days old. It was history, not intelligence.</div></div>
<div class="msec"><div class="mst">What "good" looked like</div><div class="msb">Two goals: <strong>reactive</strong> (detect issues within minutes, not hours) and <strong>proactive</strong> (surface trends before they become crises). The system needed to serve both the product team (trend analysis, A/B test monitoring) and engineering (real time error rates, API health) with different views for each.</div></div>`,
  process:`<div class="msec"><div class="mst">How I built the system</div><div class="msteps">
<div class="mstep"><div class="msnum">1</div><div class="mstxt"><strong>Metric taxonomy, 3 tiers:</strong> P0 (real time alert, 5-min response): identity verification completion rate, API error rate, funding failure rate. P1 (hourly review): funnel drop off by step. P2 (daily review): cohort conversion, A/B test results, retention by segment.</div></div>
<div class="mstep"><div class="msnum">2</div><div class="mstxt"><strong>Data pipeline:</strong> Built Adobe Analytics data feeds into Tableau for visualization. Wrote SQL views for user-level funnel joins. Set up automated alerts via email + Slack when P0 metrics crossed defined thresholds.</div></div>
<div class="mstep"><div class="msnum">3</div><div class="mstxt"><strong>Alert calibration, the hardest part:</strong> First version generated 40+ alerts per day. Alert fatigue killed adoption within a week. Spent 2 sprints tuning thresholds, adding 1-hour silence logic, and distinguishing between "unusual but stable" and "actually broken." Final version: 3–5 meaningful alerts per day, each one acted on.</div></div>
<div class="mstep"><div class="msnum">4</div><div class="mstxt"><strong>Results:</strong> Issue detection time fell from 6+ hours to under 2 hours for P0 events. Eliminated 5 manual weekly reports. Dashboard became the team's primary operating tool within 6 weeks of launch. Used in every sprint review and incident debrief.</div></div>
</div></div>`,
  artifacts:`<div class="msec"><div class="mst">Artifacts & Deliverables</div>
<div class="agrid">
<div class="acard"><div class="alabel">Design Doc</div><div class="atit">Metrics Taxonomy & Alerting Framework</div><div class="adesc">P0/P1/P2 metric classification, threshold logic, alert routing (Slack vs. email), and escalation protocol for critical events.</div></div>
<div class="acard"><div class="alabel">Data Engineering</div><div class="atit">SQL User-Level Funnel Schema</div><div class="adesc">Cross-session user join schema enabling cohort and repeat-failure analysis. Foundation for all subsequent analytical work across the team.</div></div>
<div class="acard"><div class="alabel">Dashboard</div><div class="atit">Real-Time Activation Dashboard (Tableau)</div><div class="adesc">3 views: PM operating view (funnels + A/B results), Engineering view (API health + error rates), Leadership view (weekly KPI summary).</div></div>
<div class="acard"><div class="alabel">Process</div><div class="atit">Alert Calibration Log</div><div class="adesc">2-sprint log of threshold adjustments, false-positive rate tracking, and team feedback. Used to establish an ongoing calibration protocol.</div></div>
</div></div>`,
  retro:`<div class="msec"><div class="mst">What I'd do differently</div><div class="mquote">"Alert fatigue is a product failure, not a user failure. I launched the first version with 40+ daily alerts because I optimized for recall: catching every possible issue. The cost was a team that learned to ignore everything. The lesson: design for precision first. Three high-signal alerts that are always acted on are worth more than 40 alerts that train the team to tune out. When in doubt, fewer alerts mean more action."</div></div>`
}
};
