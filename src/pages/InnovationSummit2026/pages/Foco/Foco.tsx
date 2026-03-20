import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { ImageTextInfoDemoDay } from "./components/ImageTextInfoDemoDay";
import { CarouselLogos } from "./components/CarouselLogos";
import { SubMenuSummit } from "../../components/SubMenuSummit";
import { ImageTextInfoEYHouse } from "./components/ImageTextInfoEYHouse";
import { GiftIdeaVenezuela } from "./components/GiftIdeaVenezuela";
import { FooterSummit } from "../../components/Footer";
import { Register } from "./components/Register";
import { EyFourSection } from "./components/EyFourSection";




function Foco(){
    const { hash } = useLocation();

    useLayoutEffect(() => {
        if (!hash) return;

        const targetId = hash.replace("#", "");
        let attempts = 0;
        const maxAttempts = 20;
        let frameId: number | null = null;

        const getNavbarOffset = () => {
            const navbar = document.getElementById("site-navbar");
            return navbar ? navbar.getBoundingClientRect().height + 12 : 92;
        };

        const scrollToHashTarget = () => {
            const target = document.getElementById(targetId);

            if (target) {
                const targetTop = window.scrollY + target.getBoundingClientRect().top;
                const scrollTop = Math.max(targetTop - getNavbarOffset(), 0);
                const isAlreadyAligned = Math.abs(window.scrollY - scrollTop) < 2;

                if (!isAlreadyAligned) {
                    window.scrollTo({ top: scrollTop, behavior: "auto" });
                }
                return;
            }

            if (attempts < maxAttempts) {
                attempts += 1;
                frameId = requestAnimationFrame(scrollToHashTarget);
            }
        };

        scrollToHashTarget();

        return () => {
            if (frameId !== null) {
                cancelAnimationFrame(frameId);
            }
        };
    }, [hash]);

    return(
        <div className="w-full overflow-x-hidden flex flex-col items-center justify-center pt-24 pb-0 bg-gray-900/50 rounded-2xl backdrop-blur-sm " >
            <SubMenuSummit />
            <ImageTextInfoDemoDay />
            <CarouselLogos />
            <ImageTextInfoEYHouse />
            <EyFourSection />
            <GiftIdeaVenezuela />
            <Register />
            <FooterSummit />
        </div>
    )
}

export default Foco;