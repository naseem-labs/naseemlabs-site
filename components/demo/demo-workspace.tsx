"use client";

import { useCallback, useState } from "react";
import {
  DollarSign,
  Globe,
  HeartPulse,
  Calendar,
  HelpCircle,
  Layers,
  Users,
  type LucideIcon,
} from "lucide-react";
import ChatSimulator from "@/components/demo/chat-simulator";
import {
  DEMO_SCENARIOS,
  cloneInitialMessages,
  getScenario,
  type ChatMessage,
  type DemoScenario,
} from "@/lib/demo-scenarios";

const GREEN = "#16a34a";
const BORDER = "rgba(0,0,0,0.06)";

const ICONS: Record<string, LucideIcon> = {
  cost: DollarSign,
  graft: Layers,
  recovery: HeartPulse,
  booking: Calendar,
  international: Globe,
  objections: HelpCircle,
};

function ScenarioIcon({ id }: { id: string }) {
  const Icon = ICONS[id] ?? HelpCircle;
  return <Icon className="w-4 h-4" strokeWidth={1.5} />;
}

export default function DemoWorkspace() {
  const [activeId, setActiveId] = useState(DEMO_SCENARIOS[0].id);
  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    cloneInitialMessages(DEMO_SCENARIOS[0])
  );

  const scenario = getScenario(activeId);

  const selectScenario = useCallback((s: DemoScenario) => {
    setActiveId(s.id);
    setMessages(cloneInitialMessages(s));
  }, []);

  const resetChat = useCallback(() => {
    setMessages(cloneInitialMessages(getScenario(activeId)));
  }, [activeId]);

  return (
    <section id="demo-workspace" className="px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 scroll-mt-24 overflow-x-hidden">
      <div
        className="mx-auto max-w-[1280px] rounded-2xl border p-3 sm:p-4 lg:p-5 min-w-0 overflow-hidden"
        style={{ borderColor: BORDER, backgroundColor: "rgba(255,255,255,0.6)" }}
      >
        {/* Mobile scenario tabs */}
        <div className="lg:hidden mb-3 -mx-1 overflow-x-auto flex gap-2 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {DEMO_SCENARIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => selectScenario(s)}
              className={`shrink-0 px-3 py-2 rounded-full text-[11px] font-medium border transition-colors ${
                activeId === s.id ? "text-white border-transparent" : "bg-white text-[#555]"
              }`}
              style={
                activeId === s.id
                  ? { backgroundColor: GREEN, borderColor: GREEN }
                  : { borderColor: BORDER }
              }
            >
              {s.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_240px] xl:grid-cols-[240px_1fr_260px] gap-3 lg:gap-4 items-stretch">
          {/* Left — scenarios */}
          <aside className="hidden lg:flex flex-col gap-2 min-h-0">
            <p className="text-[11px] font-semibold tracking-[0.08em] text-[#888] uppercase px-1">
              Explore Scenarios
            </p>
            {DEMO_SCENARIOS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => selectScenario(s)}
                className={`text-left rounded-xl border px-3 py-2.5 transition-all ${
                  activeId === s.id
                    ? "shadow-[0_2px_8px_rgba(22,163,74,0.12)]"
                    : "bg-white hover:border-[#ddd]"
                }`}
                style={{
                  borderColor: activeId === s.id ? `${GREEN}50` : BORDER,
                  backgroundColor: activeId === s.id ? `${GREEN}0a` : "#fff",
                }}
              >
                <div className="flex items-start gap-2">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: activeId === s.id ? `${GREEN}18` : "#f5f5f4",
                      color: activeId === s.id ? GREEN : "#666",
                    }}
                  >
                    <ScenarioIcon id={s.id} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12px] font-semibold text-[#111]">{s.title}</p>
                    <p className="text-[10px] text-[#888] mt-0.5 leading-snug">{s.description}</p>
                  </div>
                </div>
              </button>
            ))}
            <div
              className="mt-auto rounded-xl border px-3 py-2.5 text-[10px] leading-relaxed text-[#666]"
              style={{ borderColor: `${GREEN}30`, backgroundColor: `${GREEN}08` }}
            >
              <div className="flex gap-2">
                <Users className="w-4 h-4 shrink-0" style={{ color: GREEN }} strokeWidth={1.5} />
                <p>
                  These are real examples from actual clinics. Names and details changed for
                  privacy.
                </p>
              </div>
            </div>
          </aside>

          {/* Center — chat */}
          <div className="min-h-[420px] lg:min-h-[560px] flex flex-col">
            <ChatSimulator
              messages={messages}
              setMessages={setMessages}
              scenarioId={activeId}
              onReset={resetChat}
            />
          </div>

          {/* Right — details */}
          <aside className="flex flex-col gap-3 min-h-0">
            <p className="text-[11px] font-semibold tracking-[0.08em] text-[#888] uppercase px-1 lg:block hidden">
              Scenario Details
            </p>
            <div
              className="rounded-xl border bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex-1 space-y-4"
              style={{ borderColor: BORDER }}
            >
              <div>
                <p className="text-[10px] font-semibold text-[#888] uppercase tracking-wide">
                  What&apos;s happening
                </p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-[#555]">{scenario.panel.whatsHappening}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-[#888] uppercase tracking-wide">Goal</p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-[#555]">{scenario.panel.goal}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-[#888] uppercase tracking-wide">
                  System Behavior
                </p>
                <ul className="mt-2 space-y-1.5">
                  {scenario.panel.systemBehavior.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] text-[#555]">
                      <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: GREEN }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-lg px-3 py-2.5 text-[11px] leading-relaxed"
                style={{ backgroundColor: `${GREEN}10`, color: "#333" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-wide mb-1" style={{ color: GREEN }}>
                  Outcome
                </p>
                {scenario.panel.outcome}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
