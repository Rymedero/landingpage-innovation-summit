import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ImageTextInfoDemoDay } from "./components/ImageTextInfoDemoDay";
import { CarouselLogos } from "./components/CarouselLogos";
import { SubMenuSummit } from "../../components/SubMenuSummit";
import { ImageTextInfoEYHouse } from "./components/ImageTextInfoEYHouse";
import { FooterSummit } from "../../components/Footer";
import { Register } from "./components/Register";




function Foco(){
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const targetId = hash.replace("#", "");
        let attempts = 0;
        const maxAttempts = 30;
        let frameId: number | null = null;
        const timeoutIds: number[] = [];

        const getNavbarOffset = () => {
            const navbar = document.getElementById("site-navbar");
            return navbar ? navbar.getBoundingClientRect().height + 12 : 92;
        };

        const scrollToHashTarget = () => {
            const target = document.getElementById(targetId);

            if (target) {
                const targetTop = window.scrollY + target.getBoundingClientRect().top;
                const scrollTop = Math.max(targetTop - getNavbarOffset(), 0);

                window.scrollTo({ top: scrollTop, behavior: "auto" });
                return;
            }

            if (attempts < maxAttempts) {
                attempts += 1;
                frameId = requestAnimationFrame(scrollToHashTarget);
            }
        };

        const handleLoad = () => {
            scrollToHashTarget();
        };

        scrollToHashTarget();

        timeoutIds.push(window.setTimeout(scrollToHashTarget, 200));
        timeoutIds.push(window.setTimeout(scrollToHashTarget, 600));
        window.addEventListener("load", handleLoad);

        return () => {
            if (frameId !== null) {
                cancelAnimationFrame(frameId);
            }

            timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
            window.removeEventListener("load", handleLoad);
        };
    }, [hash]);

    return(
        <div className="w-full overflow-x-hidden flex flex-col items-center justify-center pt-24 pb-0 bg-gray-900/50 rounded-2xl backdrop-blur-sm " >
            <SubMenuSummit />
            <ImageTextInfoDemoDay />
            <CarouselLogos />
            <ImageTextInfoEYHouse />
            <Register />
            <FooterSummit />
        </div>
    )
}

export default Foco;