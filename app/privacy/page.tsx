import { LegalDocumentPage } from "../../src/app/components/LegalDocumentPage";

export const dynamic = "force-dynamic";

const sections = [
  {
    title: "Who operates NativeTalk",
    body: [
      "Tech4mation Limited operates NativeTalk. This policy explains how we collect, safeguard, use, and disclose information that results from your use of the service.",
      "We use your data to provide and improve NativeTalk. By using the service, you agree to the collection and use of information under this policy.",
    ],
  },
  {
    title: "Information we collect",
    body: [
      "We may collect personal data such as your email address, name, phone number, address, city, state, country, postal code, cookies, and usage data.",
      "We may also collect usage data such as IP address, browser type, pages visited, visit time, device identifiers, diagnostic data, and location data when you permit location services.",
    ],
  },
  {
    title: "Cookies and tracking",
    body: [
      "NativeTalk uses cookies and similar technologies to operate the service, remember preferences, support security, analyze usage, and improve the product experience.",
      "You can instruct your browser to refuse cookies, but some portions of the service may not work properly without them.",
    ],
  },
  {
    title: "How we use data",
    body: [
      "We use collected data to provide and maintain the service, notify users about changes, provide customer support, monitor usage, detect and address technical issues, fulfill contracts, manage billing, and send account or subscription notices.",
      "Where permitted, we may also send product updates, offers, and related information unless you opt out.",
    ],
  },
  {
    title: "Retention, transfer, and disclosure",
    body: [
      "We retain data only as long as necessary for the purposes in the policy, to comply with legal obligations, resolve disputes, and enforce agreements.",
      "If you are outside Nigeria, your data may be transferred to and processed in Nigeria. We may disclose information to service providers, affiliates, public authorities where required by law, or in business transactions such as mergers or acquisitions.",
    ],
  },
  {
    title: "Security and rights",
    body: [
      "We use commercially acceptable means to protect personal data, but no method of internet transmission or electronic storage is 100% secure.",
      "Where applicable, you may request access, correction, deletion, restriction, portability, objection to processing, or withdrawal of consent by contacting support@nativetalk.io. We do not sell or rent personal information for monetary consideration.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For privacy requests or questions, contact support@nativetalk.io.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocumentPage
      eyebrow="NativeTalk"
      title="Privacy Policy"
      updated="01 January 2024"
      intro="This Privacy Policy explains how NativeTalk collects, uses, stores, transfers, protects, and discloses information when you use the service."
      sections={sections}
    />
  );
}
