import { LegalDocumentPage } from "../../src/app/components/LegalDocumentPage";

export const dynamic = "force-dynamic";

const sections = [
  {
    title: "About the service",
    body: [
      "NativeTalk is a Software-as-a-Service platform that provides virtual business phone numbers, hotline solutions, call routing, IVR, call logs, call recordings where enabled, and related communication tools for businesses.",
      "Features and availability may vary by subscription plan and may be updated from time to time.",
    ],
  },
  {
    title: "Subscriptions, payments, and refunds",
    body: [
      "Certain features require subscription fees and usage-based charges such as airtime or call credits. By making a purchase, you authorize NativeTalk and its payment processors to charge your selected payment method.",
      "All payments are non-refundable unless required by applicable law or explicitly stated in writing. Failure to make timely payments may result in suspension or termination of access to the service.",
    ],
  },
  {
    title: "Activation and availability",
    body: [
      "Hotline activation timelines may vary depending on regulatory requirements, KYC verification, and technical readiness. Estimated activation timelines are indicative and are not guarantees.",
      "NativeTalk does not warrant uninterrupted or error-free operation of the service.",
    ],
  },
  {
    title: "Acceptable use",
    body: [
      "You agree to use the service only for lawful business purposes. You must not use NativeTalk for fraud, impersonation, spam, malicious content, harassment, unauthorized access, malware, or misuse of call recording features without proper notice or consent.",
      "NativeTalk may suspend or terminate accounts that violate these terms or applicable laws.",
    ],
  },
  {
    title: "Data protection and privacy",
    body: [
      "NativeTalk processes personal data in accordance with its Privacy Policy and applicable data protection laws, including NDPR and GDPR where applicable.",
      "Customers remain responsible for compliance with data protection laws in relation to their own end users and callers.",
    ],
  },
  {
    title: "Liability and termination",
    body: [
      "NativeTalk is provided on an as-is and as-available basis. To the maximum extent permitted by law, NativeTalk is not liable for indirect, incidental, special, or consequential damages arising from use of the service.",
      "NativeTalk may suspend or terminate access for violation of these terms or applicable law. Upon termination, your right to use the service ceases immediately.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For questions, feedback, or support, contact support@nativetalk.io.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalDocumentPage
      eyebrow="NativeTalk Hotline Solution"
      title="Terms and Conditions"
      updated="January 2026"
      intro="These Terms govern access to and use of the NativeTalk platform, applications, websites, and services. By accessing or using NativeTalk, you agree to these Terms and the Privacy Policy."
      sections={sections}
    />
  );
}
