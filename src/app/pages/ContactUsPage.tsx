import ContactUsPageComponent from "../../imports/ContactUsPage";
import { NavigationWrapper } from "../components/NavigationWrapper";
import { ScrollToTop } from "../components/ScrollToTop";

export default function ContactUsPage() {
  return (
    <NavigationWrapper>
      <ScrollToTop />
      <ContactUsPageComponent />
    </NavigationWrapper>
  );
}