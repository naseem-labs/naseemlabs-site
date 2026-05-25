import type { Metadata } from "next";
import LegalPageShell from "@/components/legal-page-shell";

export const metadata: Metadata = {
  title: "Terms & Conditions — NaseemLabs",
  description:
    "Terms governing access to the NaseemLabs website and WhatsApp AI automation for hair transplant clinics.",
};

export default function TermsPage() {
  return (
    <LegalPageShell title="Terms & Conditions" meta="Naseem Labs · Last updated · 2026">
      <p>
        These Terms govern your access to our website and the proposal of our WhatsApp AI
        automation engagement for licensed hair transplant clinics. By using our site or signing
        a separate services agreement, you agree to these Terms.
      </p>

      <h2>Not medical advice</h2>
      <p>
        Our automation handles operational communication, scheduling support, education at a high
        level, and lead qualification language. Clinical decisions, outcomes, diagnoses, and
        informed consent remain solely with your licensed surgeons and medical staff.
      </p>

      <h2>Commercial relationship</h2>
      <p>
        Fees (including any performance-based commissions) are defined only in a written order
        form or Master Services Agreement. Marketing copy on this site is illustrative unless
        expressly incorporated into your contract.
      </p>

      <h2>Compliance</h2>
      <p>
        Clinics are responsible for complying with healthcare advertising rules, WhatsApp commerce
        policies, data protection obligations, patient consent workflows, and any applicable
        telemedicine or clinic regulations.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Our software, prompts, dashboards, branding, and documentation remain our intellectual
        property unless otherwise stated in writing. You receive a limited license to use
        deliverables during the subscription term.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        Automation is provided on an &quot;as is&quot; basis to the maximum extent permitted by
        law. Lead volumes or conversion uplift are influenced by clinic reputation, surgeon
        capacity, geography, pricing, creative assets, and other factors beyond our sole
        control.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, neither party shall be liable for indirect or
        consequential damages. Aggregate liability arising from these Terms is capped at the fees
        paid by you to Naseem Labs in the twelve (12) months preceding the claim, except where
        prohibited by law.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws applicable in India, without regard to conflict-of-law
        principles, unless a superseding agreement specifies otherwise.
      </p>

      <h2>Contact</h2>
      <p>
        For contractual or legal inquiries, reach us via the WhatsApp contact published on our
        main website.
      </p>
    </LegalPageShell>
  );
}
