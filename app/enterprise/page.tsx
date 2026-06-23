import { ProductLandingPage } from "../../src/app/components/ProductLandingPage";

export const dynamic = "force-dynamic";

export default function EnterprisePage() {
  return (
    <ProductLandingPage
      label="NativeTalk Enterprise"
      title="Team of 1 or 50+, we have a solution for you"
      subtitle="CRM, VoIP, APIs, and call centre infrastructure"
      description="Set up a professional call centre, connect sales and support teams, integrate with CRM workflows, and manage customer communication with routing, reporting, white-label options, and dedicated support."
      bullets={[
        "Cloud call centre setup in as little as 24 hours",
        "CRM visibility for customer conversations",
        "White-label options and API integrations",
        "Dedicated account support and custom rollout",
        "Built for multi-location teams and high-volume operations",
      ]}
      plans={[
        { name: "CRM", price: "Custom or tiered", details: "Customer conversation visibility, reporting, and relationship management.", cta: "View CRM" },
        { name: "Cloud Call Center", price: "Contact Sales", details: "Sales-routed call centre configuration for teams and branches.", cta: "Talk to Sales" },
        { name: "VoIP / SIP", price: "Contact Sales", details: "Cloud PBX, SIP, routing, and custom telephony needs.", cta: "Talk to Sales" },
      ]}
      note="Enterprise spans CRM and VoIP in the PRD, so this page acts as the guided route for larger teams and negotiated deployments."
    />
  );
}
