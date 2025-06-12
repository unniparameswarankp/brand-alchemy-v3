
import Banner from "../../components/Banner";
import MenuToggle from "../../components/MenuToggle";
import ScrollRevealSection from "../../components/ScrollRevealSection";
import StackSections from "../../components/StackSections";
import ScrollingText from "../../components/ScrollingText";
import FeatureRevealSection from "../../components/FeatureRevealSection";
import Footer from "../../components/Footer";


export default function Home() {
  return (
   <>
   <MenuToggle />
    <Banner />
    <ScrollRevealSection/>
    <ScrollingText />
    <StackSections />
    <FeatureRevealSection />
    <Footer/>
   </>
  );
}
