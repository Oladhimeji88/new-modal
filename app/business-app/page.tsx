import { ProductLandingPage } from "../../src/app/components/ProductLandingPage";

export const dynamic = "force-dynamic";

export default function BusinessAppPage() {
  return (
    <ProductLandingPage
      label="NativeTalk Business App"
      title="One App for Every Customer Conversation"
      subtitle="The smarter way to run your business communication"
      description="NativeTalk helps businesses manage calls, WhatsApp, Instagram, Facebook, email, team routing, shared inboxes, and AI-powered conversation summaries from one place."
      bullets={[
        "Dedicated business hotline and virtual number",
        "Shared team inbox for customer conversations",
        "Call routing, masking, recordings, and logs",
        "WhatsApp, Instagram, Facebook Messenger, website chat, and more channels coming",
        "AI executive summary and analytics add-on",
      ]}
      plans={[
        { name: "Basic", price: "₦2,500/user/month", details: "For one user starting with a dedicated business line.", cta: "Download App" },
        { name: "Standard", price: "Per user/month", details: "For 2-20 users that need team calling, routing, and shared workflows.", cta: "Start Free Trial" },
        { name: "Enterprise", price: "Custom Pricing", details: "For 20+ users, custom scope, integrations, and negotiated rollout.", cta: "Contact Sales" },
      ]}
      note="Billing can support Monthly, Quarterly, Biannual, and Annual terms. Biannual and Annual discounts are planned for self-serve plans."
    />
  );
}
