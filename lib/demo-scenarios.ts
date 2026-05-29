export type ChatMessage = {
  id: string;
  type: "incoming" | "outgoing";
  text?: string;
  imageUrl?: string;
  time: string;
};

export type DemoScenario = {
  id: string;
  title: string;
  description: string;
  initialMessages: ChatMessage[];
  panel: {
    whatsHappening: string;
    goal: string;
    systemBehavior: string[];
    outcome: string;
  };
};

const ts = () =>
  new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });

function incoming(text: string): ChatMessage {
  return { id: crypto.randomUUID(), type: "incoming", text, time: ts() };
}

export const N8N_DEMO_URL = "https://vps.naseemlabs.com/webhook/preet-web-demo";

export const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: "cost",
    title: "Cost Inquiry",
    description: "Procedure cost questions",
    initialMessages: [
      incoming(
        "Sat Sri Akal! Main Preet haan. Patient di scalp photo bhej ke case analyze karwa sakde haan — graft estimate te cost idea mil jauga."
      ),
    ],
    panel: {
      whatsHappening:
        "A new patient is asking about hair transplant cost. They may be comparing clinics and want clarity before sharing photos.",
      goal: "Provide accurate cost information and move towards consultation.",
      systemBehavior: [
        "Understands intent without sounding scripted",
        "Asks relevant follow-up questions",
        "Keeps conversation natural",
        "Moves patient towards next step",
      ],
      outcome: "Patient shows interest and is ready for the next step.",
    },
  },
  {
    id: "graft",
    title: "Graft Estimate",
    description: "Grafts needed & density",
    initialMessages: [
      incoming(
        "Hi — graft count depends on the area and density you want. Share front/top photos and I can give a realistic range."
      ),
    ],
    panel: {
      whatsHappening: "Patient wants to know how many grafts they need for crown or hairline.",
      goal: "Qualify the case with photos and set realistic graft expectations.",
      systemBehavior: [
        "Explains graft ranges clearly",
        "Requests photos when needed",
        "Avoids overpromising density",
        "Builds trust with specifics",
      ],
      outcome: "Patient understands graft range and sends photos.",
    },
  },
  {
    id: "recovery",
    title: "Recovery Questions",
    description: "Healing & aftercare",
    initialMessages: [
      incoming(
        "Recovery is usually 3–5 days for desk work. Shedding phase is normal — full results take 9–12 months. What would you like to know?"
      ),
    ],
    panel: {
      whatsHappening: "Patient is anxious about downtime, pain, and when results appear.",
      goal: "Reduce fear with clear, calm recovery guidance.",
      systemBehavior: [
        "Answers in plain language",
        "Sets realistic timelines",
        "Does not dismiss concerns",
        "Keeps tone clinical but warm",
      ],
      outcome: "Patient feels informed and less hesitant.",
    },
  },
  {
    id: "booking",
    title: "Booking Inquiry",
    description: "Consultation scheduling",
    initialMessages: [
      incoming(
        "We have consultation slots through the week. Tell me your preferred day — morning or afternoon works better?"
      ),
    ],
    panel: {
      whatsHappening: "Patient is ready to book or checking availability.",
      goal: "Secure a consultation slot with minimal back-and-forth.",
      systemBehavior: [
        "Offers concrete times",
        "Confirms details clearly",
        "Handles rescheduling politely",
        "Sends gentle reminders if needed",
      ],
      outcome: "Consultation slot confirmed or strong intent captured.",
    },
  },
  {
    id: "international",
    title: "International Patient",
    description: "Travel & stay planning",
    initialMessages: [
      incoming(
        "For international patients we typically suggest 2–3 days in city for the procedure. Flights, hotel, and pickup can be coordinated."
      ),
    ],
    panel: {
      whatsHappening: "Patient is abroad and asking about travel, stay length, and logistics.",
      goal: "Explain process clearly and keep them moving toward booking.",
      systemBehavior: [
        "Covers stay duration and visits",
        "Answers travel questions patiently",
        "Multilingual when needed",
        "Links logistics to consultation",
      ],
      outcome: "Patient has a clear plan and asks for dates.",
    },
  },
  {
    id: "objections",
    title: "Fear & Objections",
    description: "Trust & hesitation",
    initialMessages: [
      incoming(
        "Totally fair to ask — pain is managed with local anesthesia. Scars with FUE are tiny dots, not a strip. What worries you most?"
      ),
    ],
    panel: {
      whatsHappening: "Patient has doubts about pain, scars, or results.",
      goal: "Address objections calmly and restore confidence.",
      systemBehavior: [
        "Acknowledges concern first",
        "Gives specific medical reassurance",
        "Never argues with the patient",
        "Invites photos or call when ready",
      ],
      outcome: "Patient trust increases; conversation stays open.",
    },
  },
];

export function getScenario(id: string) {
  return DEMO_SCENARIOS.find((s) => s.id === id) ?? DEMO_SCENARIOS[0];
}

export function cloneInitialMessages(scenario: DemoScenario): ChatMessage[] {
  return scenario.initialMessages.map((m) => ({ ...m, id: crypto.randomUUID(), time: ts() }));
}
