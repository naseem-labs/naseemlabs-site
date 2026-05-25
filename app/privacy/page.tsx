import type { Metadata } from "next";
import LegalPageShell from "@/components/legal-page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy — NaseemLabs",
  description:
    "How NaseemLabs handles information when you use our website and WhatsApp automation services.",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell title="Privacy Policy" meta="Naseem Labs · Last updated · 2026">
      <p>
        This Privacy Policy describes how Naseem Labs (“we”, “us”) handles information when you
        use our website, contact us, or engage our WhatsApp automation services for hair
        transplant clinics.
      </p>

      <h2>Information we collect</h2>
      <p>
        We may collect information you voluntarily provide (for example, name, phone number,
        clinic details, and messages sent through forms or WhatsApp). Technical data such as
        approximate location, device type, and standard server logs may be collected when you
        browse our site.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to demo requests and operate our services.</li>
        <li>To improve our products, security, and support.</li>
        <li>To comply with legal obligations where applicable.</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We do not sell your personal information. We may share data with vetted infrastructure or
        messaging providers strictly as needed to deliver the service, or when required by law.
      </p>

      <h2>Retention</h2>
      <p>
        We retain information only as long as needed for the purposes above, unless a longer period
        is required by law or legitimate business needs.
      </p>

      <h2>Your choices</h2>
      <p>
        You may request access, correction, or deletion of certain personal data subject to
        applicable law. Contact us via the WhatsApp number shown on our contact page.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy from time to time. The revised version will be posted on this
        page with an updated date.
      </p>
    </LegalPageShell>
  );
}
