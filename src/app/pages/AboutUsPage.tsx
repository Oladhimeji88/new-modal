import AboutUsPageComponent from "../../imports/AboutUsPage";
import { NavigationWrapper } from "../components/NavigationWrapper";
import { ScrollToTop } from "../components/ScrollToTop";

export default function AboutUsPage() {
  return (
    <NavigationWrapper>
      <ScrollToTop />
      <AboutUsPageComponent />
    </NavigationWrapper>
  );
}