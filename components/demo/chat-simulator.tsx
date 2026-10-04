"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import {
  Camera,
  ChevronLeft,
  Mic,
  MoreVertical,
  RefreshCw,
  Send,
  Smile,
} from "lucide-react";
import type { ChatMessage } from "@/lib/demo-scenarios";
import { N8N_DEMO_URL } from "@/lib/demo-scenarios";

const WA_HEADER = "#008069";
const WA_BG = "#efeae2";
const WA_OUT = "#dcf8c6";
const GREEN = "#16a34a";

const CHAT_BG_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d9d0c3' fill-opacity='0.18'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/svg%3E\")";

const CONNECTION_ERROR = "Sorry, connection issue. Please try again.";

function getOrCreateSessionId(): string {
  let id = localStorage.getItem("naseem_preet_id");
  if (!id) {
    id = "nsm_" + Math.random().toString(36).slice(2, 11);
    localStorage.setItem("naseem_preet_id", id);
  }
  return id;
}

function formatTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function BlueTicks() {
  return (
    <svg width="14" height="10" viewBox="0 0 16 11" className="text-[#53bdeb] shrink-0" aria-hidden>
      <path
        fill="currentColor"
        d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-5.19 6.76-2.226-2.226a.463.463 0 0 0-.336-.14.47.47 0 0 0-.347.147.457.457 0 0 0 .102.659l2.75 2.75a.46.46 0 0 0 .347.14.47.47 0 0 0 .336-.178l5.483-7.15a.457.457 0 0 0-.094-.617zm3.23 0a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-7.34 9.57-1.12-1.12a.463.463 0 0 0-.336-.14.47.47 0 0 0-.347.147.457.457 0 0 0 .102.659l1.644 1.644a.46.46 0 0 0 .347.14.47.47 0 0 0 .336-.178l7.633-9.97a.457.457 0 0 0-.094-.617z"
      />
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" className="shrink-0" aria-hidden>
      <circle cx="12" cy="12" r="10" fill={GREEN} />
      <path fill="#fff" d="M10.5 14.2 7.8 11.5l-1.1 1.1 3.8 3.8 7.5-7.5-1.1-1.1-6.4 6.4z" />
    </svg>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex gap-[3px] items-center" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-[5px] h-[5px] rounded-full bg-[#667781] animate-pulse"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </span>
  );
}

type Props = {
  messages: ChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  scenarioId: string;
  onReset: () => void;
};

export default function ChatSimulator({ messages, setMessages, scenarioId, onReset }: Props) {
  const [status, setStatus] = useState<"online" | "typing">("online");
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const sessionRef = useRef<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    sessionRef.current = getOrCreateSessionId();
  }, []);

  const scrollToBottom = useCallback((smooth = true) => {
    const el = chatRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: smooth ? "smooth" : "auto" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, status, scrollToBottom]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.visualViewport) return;
    const vv = window.visualViewport;
    const onResize = () => {
      const shell = shellRef.current;
      if (!shell) return;
      if (window.innerWidth >= 1024) {
        shell.style.height = "";
        return;
      }
      shell.style.height = `${vv.height}px`;
      scrollToBottom(false);
    };
    vv.addEventListener("resize", onResize);
    return () => vv.removeEventListener("resize", onResize);
  }, [scrollToBottom]);

  const appendMessage = useCallback(
    (msg: Omit<ChatMessage, "id" | "time"> & { time?: string }) => {
      const entry: ChatMessage = {
        id: crypto.randomUUID(),
        time: msg.time ?? formatTime(),
        type: msg.type,
        text: msg.text,
        imageUrl: msg.imageUrl,
      };
      setMessages((prev) => [...prev, entry]);
    },
    [setMessages]
  );

  const typingDelay = (text: string) => Math.min(Math.max(text.length * 45, 1000), 3000);

  const playIncomingReplies = useCallback(
    async (reply: string) => {
      const parts = reply.split("|||").map((r) => r.trim()).filter(Boolean);
      for (const part of parts) {
        setStatus("typing");
        await new Promise((r) => setTimeout(r, typingDelay(part)));
        appendMessage({ type: "incoming", text: part });
      }
      setStatus("online");
    },
    [appendMessage]
  );

  const showConnectionError = useCallback(async () => {
    setStatus("typing");
    await new Promise((r) => setTimeout(r, typingDelay(CONNECTION_ERROR)));
    appendMessage({ type: "incoming", text: CONNECTION_ERROR });
    setStatus("online");
  }, [appendMessage]);

  const sendMessage = useCallback(
    async (manualText?: string, file?: File) => {
      let msg = (manualText ?? input).trim();
      if (!msg && !file) return;
      if (sending) return;

      setSending(true);

      if (file) {
        const url = URL.createObjectURL(file);
        appendMessage({ type: "outgoing", imageUrl: url });
        msg = "Scalp Photo Uploaded";
      } else {
        appendMessage({ type: "outgoing", text: msg });
        setInput("");
      }

      inputRef.current?.focus();
      setStatus("typing");

      if (!sessionRef.current && typeof window !== "undefined") {
        sessionRef.current = getOrCreateSessionId();
      }

      try {
        const res = await fetch(N8N_DEMO_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: msg,
            sessionId: sessionRef.current,
            isImage: !!file,
            scenario: scenarioId,
          }),
        });

        if (!res.ok) {
          await showConnectionError();
          return;
        }

        let reply = "";
        const raw = await res.text();
        if (raw) {
          try {
            const data = JSON.parse(raw) as { reply?: string };
            if (data?.reply != null) reply = String(data.reply);
          } catch {
            reply = raw.trim();
          }
        }

        if (!reply.trim()) {
          await showConnectionError();
          return;
        }

        await playIncomingReplies(reply);
      } catch {
        await showConnectionError();
      } finally {
        setSending(false);
        inputRef.current?.focus();
      }
    },
    [appendMessage, input, playIncomingReplies, scenarioId, sending, showConnectionError]
  );

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) sendMessage(undefined, file);
    e.target.value = "";
  };

  return (
    <div
      ref={shellRef}
      className="flex flex-col rounded-2xl border overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] min-h-[480px] lg:min-h-[560px] max-h-[85dvh] lg:max-h-none h-full"
      style={{ borderColor: "rgba(0,0,0,0.08)" }}
    >
      {/* Header — fixed */}
      <div
        className="flex items-center gap-2 px-3 py-2.5 shrink-0 text-white"
        style={{ backgroundColor: WA_HEADER }}
      >
        <ChevronLeft className="w-5 h-5 opacity-80 shrink-0 hidden sm:block" strokeWidth={2} />
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-[11px] font-bold shrink-0">
          P
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <span className="text-[13px] font-semibold truncate">Preet (AI Assistant)</span>
            <VerifiedBadge />
          </div>
          <p className="text-[10px] opacity-90">
            {status === "typing" ? (
              <span className="flex items-center gap-1.5">
                Preet is typing... <TypingDots />
              </span>
            ) : (
              "Online"
            )}
          </p>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] bg-white/15 hover:bg-white/25 transition-colors"
        >
          <RefreshCw className="w-3 h-3" />
          Reset Chat
        </button>
        <MoreVertical className="w-5 h-5 opacity-70 shrink-0 sm:hidden" strokeWidth={1.5} />
      </div>

      {/* Messages — scrollable only */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-3 flex flex-col gap-1 min-h-0"
        style={{
          backgroundColor: WA_BG,
          backgroundImage: CHAT_BG_PATTERN,
        }}
      >
        {messages.map((m, idx) => (
          <div
            key={m.id}
            className={`flex opacity-0 animate-[msgIn_0.35s_ease_forwards] ${
              m.type === "outgoing" ? "justify-end" : "justify-start"
            }`}
            style={{ animationDelay: `${Math.min(idx * 40, 200)}ms` }}
          >
            {m.imageUrl ? (
              <div
                className="rounded-lg rounded-tr-sm overflow-hidden shadow-[0_1px_0.5px_rgba(0,0,0,0.1)] max-w-[75%]"
                style={{ backgroundColor: WA_OUT }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.imageUrl} alt="Uploaded" className="block max-w-[200px] rounded-lg border border-black/[0.04]" />
                <div className="flex items-center justify-end gap-1 px-2 py-1 text-[10px] text-[#667781]">
                  {m.time}
                  <BlueTicks />
                </div>
              </div>
            ) : (
              <div
                className={`inline-block max-w-[min(85%,320px)] px-2.5 py-1.5 text-[13px] leading-[1.35] text-[#111] shadow-[0_1px_0.5px_rgba(0,0,0,0.1)] break-words ${
                  m.type === "outgoing"
                    ? "rounded-lg rounded-tr-sm"
                    : "rounded-lg rounded-tl-sm bg-white"
                }`}
                style={{ backgroundColor: m.type === "outgoing" ? WA_OUT : "#fff" }}
              >
                <div className="flex flex-wrap items-end gap-x-1.5 gap-y-0.5 justify-end">
                  <span className="whitespace-pre-wrap flex-1 min-w-0">{m.text}</span>
                  <span className="inline-flex items-center gap-0.5 text-[10px] text-[#667781] shrink-0 ml-auto">
                    {m.time}
                    {m.type === "outgoing" && <BlueTicks />}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}

        {status === "typing" && (
          <div className="flex justify-start">
            <div className="bg-white rounded-lg rounded-tl-sm px-3 py-2 shadow-[0_1px_0.5px_rgba(0,0,0,0.08)]">
              <TypingDots />
            </div>
          </div>
        )}
      </div>

      {/* Footer — fixed */}
      <div className="shrink-0 flex items-center gap-2 px-3 py-2.5 bg-[#f0f2f5] border-t border-black/[0.06]">
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="p-1 text-[#54656f] shrink-0"
          aria-label="Upload image"
        >
          <Camera className="w-5 h-5" strokeWidth={1.75} />
        </button>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onFileChange} />

        <div className="flex-1 flex items-center gap-2 min-w-0 bg-white rounded-full px-3 py-2 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
          <Smile className="w-5 h-5 text-[#54656f] shrink-0 hidden xs:block" strokeWidth={1.75} />
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type a message..."
            className="flex-1 min-w-0 border-0 outline-none text-[14px] text-[#111] bg-transparent placeholder:text-[#667781]"
            autoComplete="off"
          />
        </div>

        <button type="button" className="p-1 text-[#54656f] shrink-0 hidden sm:block" aria-label="Voice">
          <Mic className="w-5 h-5" strokeWidth={1.75} />
        </button>

        <button
          type="button"
          onClick={() => sendMessage()}
          disabled={sending}
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-opacity disabled:opacity-60"
          style={{ backgroundColor: GREEN }}
          aria-label="Send"
        >
          <Send className="w-4 h-4 text-white" strokeWidth={2} />
        </button>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="sm:hidden shrink-0 py-2 text-center text-[11px] text-[#667781] border-t border-black/[0.06] bg-[#f0f2f5]"
      >
        Reset Chat
      </button>
    </div>
  );
}
