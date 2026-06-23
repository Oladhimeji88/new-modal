import { ProductLandingPage } from "../../src/app/components/ProductLandingPage";

export const dynamic = "force-dynamic";

export default function VoipPage() {
  return (
    <ProductLandingPage
      label="NativeTalk VoIP"
      title="Cloud phone systems for serious call operations"
      subtitle="Cloud PBX, Cloud Call Center, and SIP services"
      description="NativeTalk VoIP is the sales-routed service line for businesses that need cloud PBX, cloud call center infrastructure, SIP connectivity, virtual numbers, and controlled calling costs."
      bullets={[
        "Cloud PBX for modern business calling",
        "Cloud call center setup for teams and branches",
        "SIP services for custom telephony needs",
        "Virtual numbers, routing, and call control",
        "Sales-led configuration for negotiated requirements",
      ]}
      plans={[
        { name: "Personal App", price: "₦10,000 MRC", details: "Personal NativeTalk app line item from the VoIP rate card.", cta: "Get Started" },
        { name: "Cloud PBX", price: "Contact Sales", details: "Configured for business telephony, extensions, and routing.", cta: "Talk to Sales" },
        { name: "Cloud Call Center", price: "Contact Sales", details: "Sales-routed call center deployment for support and sales teams.", cta: "Talk to Sales" },
      ]}
      note="VoIP pricing is sales-routed and non-discounted in the PRD, distinct from self-serve Business App and CRM billing."
    />
  );
}
