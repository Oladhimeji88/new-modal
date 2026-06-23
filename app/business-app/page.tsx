import { ProductLandingPage } from "../../src/app/components/ProductLandingPage";

export const dynamic = "force-dynamic";

export default function BusinessAppPage() {
  return (
    <ProductLandingPage
      label="NativeTalk Business App"
      title="Start receiving business calls without the old setup stress"
      subtitle="A modern hotline app for Nigerian SMEs and growing teams"
      description="NativeTalk helps businesses receive calls faster, manage customer conversations, route work to the right teammate, and keep a clean record of every interaction from one business communication app."
      image={{
        src: "/product/business-app.png",
        alt: "NativeTalk business communication interface",
      }}
      bullets={[
        "Dedicated business hotline and virtual number",
        "Start receiving calls through a simple guided setup flow",
        "Shared team inbox for customer calls and messages",
        "Call routing, masking, recordings, logs, and accountability",
        "WhatsApp, Instagram, Facebook Messenger, website chat, and more channels planned",
        "AI executive summary and analytics add-on",
      ]}
      plans={[
        { name: "Basic", price: "NGN 2,500/user/month", details: "For one user starting with a dedicated business line.", cta: "Download App" },
        { name: "Standard", price: "Per user/month", details: "For 2-20 users that need team calling, routing, and shared workflows.", cta: "Start Free Trial" },
        { name: "Enterprise", price: "Custom Pricing", details: "For 20+ users, custom scope, integrations, and negotiated rollout.", cta: "Contact Sales" },
      ]}
      note="Billing can support Monthly, Quarterly, Biannual, and Annual terms. Biannual and Annual discounts are planned for self-serve plans."
    />
  );
}
