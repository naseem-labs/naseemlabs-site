import Image from "next/image";
import { HOME_IMAGES } from "@/components/home/home-images";

const WA_GREEN = "#dcf8c6";
const CHAT_BG = "#efeae2";

function WaTicks() {
  return (
    <span className="inline-flex ml-0.5 shrink-0" aria-hidden>
      <svg width="14" height="10" viewBox="0 0 16 11" className="text-[#53bdeb]">
        <path
          fill="currentColor"
          d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-5.19 6.76-2.226-2.226a.463.463 0 0 0-.336-.14.47.47 0 0 0-.347.147.457.457 0 0 0 .102.659l2.75 2.75a.46.46 0 0 0 .347.14.47.47 0 0 0 .336-.178l5.483-7.15a.457.457 0 0 0-.094-.617zm3.23 0a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-7.34 9.57-1.12-1.12a.463.463 0 0 0-.336-.14.47.47 0 0 0-.347.147.457.457 0 0 0 .102.659l1.644 1.644a.46.46 0 0 0 .347.14.47.47 0 0 0 .336-.178l7.633-9.97a.457.457 0 0 0-.094-.617z"
        />
      </svg>
    </span>
  );
}

function Bubble({
  side,
  time,
  ticks,
  children,
}: {
  side: "left" | "right";
  time: string;
  ticks?: boolean;
  children: React.ReactNode;
}) {
  const isRight = side === "right";
  return (
    <div className={`flex ${isRight ? "justify-end" : "justify-start"} mb-[4px] w-full`}>
      <div
        className={`relative max-w-[min(92%,230px)] px-[9px] py-[6px] text-[11px] sm:text-[11.5px] leading-[15px] shadow-[0_1px_0.5px_rgba(0,0,0,0.06)] break-words ${
          isRight
            ? "rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-sm"
            : "rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-sm bg-white"
        }`}
        style={{ backgroundColor: isRight ? WA_GREEN : "#fff", color: "#111b21" }}
      >
        <div className="whitespace-pre-wrap pr-10">{children}</div>
        <span className="absolute bottom-[3px] right-[6px] flex items-center gap-[2px] text-[9px] text-[#667781] leading-none">
          {time}
          {ticks && <WaTicks />}
        </span>
      </div>
    </div>
  );
}

function PhotoRow() {
  const photos = [
    { src: HOME_IMAGES.scalpFront, alt: "Front scalp photo" },
    { src: HOME_IMAGES.scalpTop, alt: "Top scalp photo" },
    { src: HOME_IMAGES.scalpSide, alt: "Side scalp photo" },
  ];
  return (
    <div className="flex justify-start mb-[4px] w-full">
      <div className="max-w-[min(92%,230px)] rounded-lg overflow-hidden bg-white p-[4px] shadow-[0_1px_0.5px_rgba(0,0,0,0.06)]">
        <div className="grid grid-cols-3 gap-[3px]">
          {photos.map((p) => (
            <div key={p.src} className="relative aspect-square overflow-hidden rounded-[4px] bg-[#ddd]">
              <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="80px" />
            </div>
          ))}
        </div>
        <div className="flex justify-end pt-[2px] pr-[2px] text-[9px] text-[#667781]">9:42 PM</div>
      </div>
    </div>
  );
}

export default function PreetChat({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-col w-full min-w-0 ${compact ? "" : "h-full"}`}>
      <div className="flex items-center gap-2 bg-[#075e54] px-3 py-2 shrink-0">
        <div className="w-8 h-8 rounded-full bg-[#1a3c34] flex items-center justify-center text-[9px] font-semibold text-white shrink-0">
          P
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[12.5px] font-medium text-white leading-tight">FolliCore</div>
          <div className="text-[10px] text-white/75 leading-tight">online</div>
        </div>
      </div>
      <div
        className={`px-2 py-2 w-full min-w-0 ${compact ? "overflow-hidden" : "flex-1 overflow-hidden"}`}
        style={{
          backgroundColor: CHAT_BG,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d9d0c3' fill-opacity='0.18'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      >
        <Bubble side="left" time="9:41 PM">
          I&apos;m thinking about a hair transplant. Can you tell me more?
        </Bubble>
        <Bubble side="right" time="9:41 PM" ticks>
          Of course. To give you accurate information, could you share photos of your hair from the front, top and sides?
        </Bubble>
        <PhotoRow />
        <Bubble side="left" time="9:43 PM">
          Yes, can you help me understand?
        </Bubble>
        {!compact && (
          <Bubble side="right" time="9:43 PM" ticks>
            Thank you — I can now review these and explain what they typically indicate, including next steps towards consultation.
          </Bubble>
        )}
      </div>
      <div className="flex items-center gap-1.5 px-2 py-1.5 bg-[#f0f2f5] shrink-0">
        <div className="flex-1 bg-white rounded-full px-3 py-[7px] text-[11px] text-[#667781]">Type a message</div>
        <div className="w-8 h-8 rounded-full bg-[#075e54] shrink-0" />
      </div>
    </div>
  );
}

export function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative w-full ${className}`}>
      <div
        className="relative rounded-[36px] p-[7px] shadow-[0_22px_50px_-18px_rgba(0,0,0,0.45)]"
        style={{ background: "linear-gradient(160deg, #2a2a2a 0%, #0d0d0d 100%)" }}
      >
        <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[78px] h-[18px] bg-black rounded-full z-10" />
        <div className="relative overflow-hidden rounded-[29px] bg-black pt-6">
          <div className="bg-white flex flex-col w-full min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
