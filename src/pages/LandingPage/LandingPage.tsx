import VideoSection from "./components/VideoSection";
import { ImageTextSection } from "./components/ImageText";
import { InfoTabs } from "./components/InfoTabs";
import { Carousel } from "./components/Carousel";
import { ImageTextInfo } from "./components/ImageTextInfo";
/* import { Links } from "./components/Links"; */



function LandingPage() {
  return (
    <div className="">
  
  <VideoSection />
  <ImageTextSection />
  <Carousel /> 
  <ImageTextInfo />
  <InfoTabs />
  {/* <Links /> */}
</div>
  );
}

export default LandingPage;