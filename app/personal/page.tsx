import { ProductLandingPage } from "../../src/app/components/ProductLandingPage";

export const dynamic = "force-dynamic";

export default function PersonalPage() {
  return (
    <ProductLandingPage
      label="NativeTalk Personal"
      title="Stay connected on your terms"
      subtitle="A smart phone number without SIM-card limits"
      description="Make and receive calls from the NativeTalk mobile app, keep your personal number private, and create flexible numbers for family, work, side projects, and temporary use cases."
      bullets={[
        "Virtual phone numbers for everyday calling",
        "Disposable numbers for temporary use",
        "Customized incoming call rates",
        "Unique extensions for family, colleagues, and friends",
        "No physical SIM card required",
      ]}
      plans={[
        { name: "Personal App", price: "₦10,000 MRC", details: "NativeTalk personal line item from the VoIP rate card.", cta: "Get Started" },
        { name: "Business Starter", price: "₦2,500/user/month", details: "Move from personal calling into a dedicated business line.", cta: "View Pricing" },
        { name: "Need help?", price: "Talk to Sales", details: "Get guided into the right NativeTalk setup for your use case.", cta: "Contact Sales" },
      ]}
      note="The PRD maps Personal to the NativeTalk Personal App while a dedicated full landing page is still being finalized."
    />
  );
}
