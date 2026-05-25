import { WHATSAPP_URL } from "@/lib/site-config";

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
};

export default function WhatsAppLink({ className, children, onClick, style }: Props) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
      style={style}
    >
      {children}
    </a>
  );
}
