import PricingPageComponent from "../../imports/PricingPage";
import { NavigationWrapper } from "../components/NavigationWrapper";
import { ScrollToTop } from "../components/ScrollToTop";

export default function PricingPage() {
  return (
    <NavigationWrapper>
      <ScrollToTop />
      <PricingPageComponent />
    </NavigationWrapper>
  );
}