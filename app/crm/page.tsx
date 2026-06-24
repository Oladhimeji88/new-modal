import { ProductLandingPage } from "../../src/app/components/ProductLandingPage";

export const dynamic = "force-dynamic";

export default function CrmPage() {
  return (
    <ProductLandingPage
      label="NativeTalk CRM"
      title="Centralize every customer relationship"
      subtitle="A communication CRM for growing African businesses"
      description="NativeTalk CRM gives larger teams visibility into customer conversations, sales follow-up, support performance, and team accountability across calls and messaging channels."
      image={{
        src: "/ZenBook Duo 16.png",
        alt: "NativeTalk CRM customer conversation workspace",
      }}
      bullets={[
        "Customer conversation history in one workspace",
        "Lead and support pipeline visibility",
        "Team performance reporting",
        "AI executive summaries and analytics add-on",
        "Designed for managers who need control without scattered tools",
      ]}
      plans={[
        { name: "Basic", price: "Visible on load", details: "Starter CRM capability for teams organizing customer conversations.", cta: "Get Started" },
        { name: "Standard", price: "Visible on load", details: "Expanded collaboration, reporting, and team management.", cta: "Subscribe" },
        { name: "Enterprise", price: "Custom Pricing", details: "Negotiated CRM scope, integration support, and rollout assistance.", cta: "Contact Sales" },
      ]}
      note="The PRD requires all CRM plans to be visible and comparable immediately, with no hidden pricing cards or inactive toggles."
    />
  );
}
