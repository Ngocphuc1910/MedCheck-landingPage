# Phario — Product Context

## What it is
Phario is a clinical mobile app that checks drug-drug interactions and prescription safety in seconds. Built exclusively for healthcare professionals — physicians, nurses, and clinical pharmacists — who need fast, trustworthy answers at the point of care, not a Google search or a thick reference book.

---

## The Core Problem
Polypharmacy is one of the most dangerous and overlooked problems in modern medicine. The average hospitalized patient receives 5–10 drugs simultaneously. Checking every possible combination manually is slow, error-prone, and often skipped under time pressure. A single missed interaction can cause serious patient harm — bleeding, cardiac events, organ failure.

**Current alternatives are inadequate:**
- **Sandford Guide** — comprehensive but expensive (~500k VND/month), slow to navigate, antibiotic-focused
- **Google / UpToDate** — not structured for quick multi-drug checking
- **Drug package inserts** — incomplete, buried in technical language
- **Memory alone** — the most common approach, and the most dangerous

---

## How Phario Works
1. **Scan or type** — photograph a handwritten prescription or manually search drug names
2. **AI extracts** — OpenAI Vision reads the prescription and pulls out every medication automatically
3. **Add patient context** — optionally input age, sex, weight, height, kidney function, liver function, INR level, and existing conditions
4. **Instant check** — Phario cross-references all drug pairs against its curated clinical database, enriched with OpenFDA data
5. **Clear results** — severity-graded alerts with explanations and action steps, personalized to the patient's profile

---

## Data Sources & Clinical Credibility
- **OpenFDA** — official FDA drug labeling, pharmacology data, drug interaction signals, adverse reactions, contraindications
- **DailyMed** — US National Library of Medicine's official drug label repository
- **RxNorm** — standardized drug naming system from the NIH
- **Curated clinical records** — hand-reviewed interaction records built and validated by clinical pharmacists and physicians
- **Coverage** — 3,000+ drugs indexed; Major / Moderate / Minor classifications; action tiers from contraindicated → avoid → modify dose → monitor

---

## Two Clinical Use Cases

### 1. Drug Interaction Checker (live)
Are these drugs safe to prescribe together?
- Checks every pair combination across the drug list
- Returns severity: Major (avoid), Moderate (monitor closely), Minor (routine monitoring)
- Shows mechanism of interaction, clinical risk, and recommended action
- Personalizes alerts based on patient profile (e.g. warfarin + patient with prior bleed = escalated warning)

### 2. Prescription Appropriateness Checker (coming soon)
Is this drug right for this specific patient?
- Flags drugs inappropriate given patient context
- Example: iron (Fe) prescribed to patient over 65 → flagged as potentially inappropriate
- Example: glucosamine for back pain → wrong clinical indication
- Based on FDA guidance and evidence-based prescribing guidelines
- Catches errors before they reach the patient

---

## Who It's Built For

**Primary users:**
- Physicians — specialists and GPs prescribing complex multi-drug regimens
- Nurses — ward nurses who administer medications and need to flag safety issues before dispensing
- Clinical pharmacists — first line of medication safety review

**Secondary users:**
- Department heads and chief pharmacists overseeing prescribing quality
- Medical residents and interns learning safe prescribing habits

**Geography:** Vietnam-first. High patient volumes, limited consultation time. Phario fits the fast-paced, high-volume clinical environment.

---

## Why Physicians Will Pay
- Sandford Guide costs 500k VND/month and only covers antibiotics — Phario covers all drug classes
- One prevented adverse drug event saves far more than the subscription cost
- Faster than any existing alternative — scan a prescription and get results in under 10 seconds
- The only tool that personalizes interaction checks to a specific patient's profile
- Designed for daily clinical habit — fast enough to use on every prescription, every time

---

## Brand & Tone
- **Clinical but human** — voice of a trusted colleague, not cold/technical, not consumer-casual
- **Confidence without arrogance** — doesn't replace clinical judgment, it empowers it
- **Speed and clarity** — every design decision prioritizes getting the doctor to the answer fast
- **Safety as the hero** — exists to protect patients; that's the emotional core
- **Mascot** — a friendly plush capsule pill character (azure blue + sky blue). Warm, approachable, reduces anxiety around medication risk. Memorable visual identity in a sea of clinical tools.

---

## Key Copy Messages
- "Check interactions before you prescribe, not after something goes wrong"
- "Your prescription, reviewed in seconds"
- "Built on FDA data. Trusted by doctors."
- "5 drugs, 10 pairs, zero missed interactions"
- "The safety check that fits in your pocket"
- "Scan the prescription. Know it's safe."
- "From polypharmacy to peace of mind"
- "Trusted clinical data. Human-first design."

---

## Pricing
**200,000 VND/month (~$8 USD)**
- Accessible for individual physicians
- Scalable to hospital B2B licensing

---

## App Internals (from Phario codebase)

**Tech:** React Native + Expo 54, TypeScript, Zustand, NativeWind, Reanimated 4.x, GPT-4o vision

**5 core screens:**
1. Home/Lookup — search drugs (local DB + RxNorm online), select up to 10
2. Prescription Intake — scan/upload up to 3 images → GPT-4o extracts drugs + patient demographics (handles Vietnamese + English)
3. Results — HIGH ALERT / CAUTION / LOW RISK / ALL CLEAR banner, severity cards, monitoring plan with specific timeframes
4. Drug Detail — full monograph (indications, dosing, contraindications, mechanism, pharmacokinetics, clearance)
5. Interaction Detail — action tier (DO NOT USE / AVOID / MODIFY / MONITOR), mechanism, management steps, alternatives

**Severity system:**
- Major → red (#FF3B30), action: DO NOT USE / AVOID
- Moderate → orange (#FF9500), action: MODIFY THERAPY
- Minor → green (#34C759), action: MONITOR CLOSELY

**Patient context fields:** age, sex, weight, height, renal function (normal/reduced/severe), hepatic status, current INR level, conditions (prior_bleed, heart_failure, qt_prolongation, diabetes, pregnancy, copd, electrolyte_concern, immunosuppression)

**APIs used:**
- RxNorm (NIH) — drug name search → RxCUI
- OpenFDA — drug label enrichment (indications, warnings, interactions)
- GPT-4o vision — prescription image parsing
- Local curated DDI records — ~30 check-ready drug profiles, ~8 full clinical records (reviewed 2026-06-06)

**Key differentiators in code:**
- Route intelligence: topical-local vs systemic (fluoride rinse ≠ oral drug)
- Monitoring plans with specific timeframes ("INR within 3-5 days", "CK if symptomatic")
- Personalized escalation (warfarin + patient with prior_bleed = escalated warning)
- Actionable specifics ("Hold simvastatin; switch to pravastatin")
- Vietnamese prescription parsing (INN variant mapping: esomeprazol → esomeprazole, paracetamol → acetaminophen)

## Current Landing Page Stack
- React 19 + TypeScript + Vite 8
- Tailwind CSS 3
- Framer Motion 12 (animations)
- Radix UI (Tabs)
- Lucide React (icons)
- Vercel Analytics
- Font: Fraunces (display/headings) + Inter (body)
- All sections built, layout inspired by Mindoo design

## Layout Reference
- `/Users/lap14154/myproject/make10000hours-landingPage` — additional layout patterns to borrow
- Current layout mirrors Mindoo's 11-section structure; needs to be replaced with Phario content
