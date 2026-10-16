import Frame1440WDefault from "../../imports/1440WDefault";
import { NavigationWrapper } from "../components/NavigationWrapper";
import { ScrollToTop } from "../components/ScrollToTop";
import { HeroAnimator } from "../components/HeroAnimator";
import { PageAnimator } from "../components/PageAnimator";

export default function HomePage() {
  return (
    <NavigationWrapper>
      <ScrollToTop />
      <HeroAnimator />
      <PageAnimator />
      <Frame1440WDefault />
    </NavigationWrapper>
  );
}