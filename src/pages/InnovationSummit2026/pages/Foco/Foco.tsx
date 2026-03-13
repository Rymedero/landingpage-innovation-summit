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

        const scrollToHashTarget = () => {
            const target = document.getElementById(targetId);

            if (target) {
                target.scrollIntoView({ block: "start" });
                return;
            }

            if (attempts < maxAttempts) {
                attempts += 1;
                requestAnimationFrame(scrollToHashTarget);
            }
        };

        scrollToHashTarget();
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