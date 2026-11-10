import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

import { aboutInfo } from "../data/about";
import SectionContainer from "../UI/SectionContainer";
import { useRef } from "react";

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP( () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "-80% top",
                end: "-30% top",
                scrub: true
            }
        })
        tl.from( ".animateConatiners-1", {
            opacity: 0,
            x: -200,
            stagger: 0.3,
        }).from( ".animateConatiner-2", {
            opacity: 0,
            x: 400,
        }, 0)
    })

    return (
        <SectionContainer tag={"About"}>
            <div ref={containerRef} className="flex justify-between overflow-hidden">
                <div className="w-175 font-kreon flex flex-col justify-around">
                    <div className="animateConatiners-1">
                        <p className="text-[64px]">{aboutInfo.name}</p>
                        <p className="text-[26px] text-[#615C5C]">{aboutInfo.designation}</p>
                    </div>
                    <div className="text-[24px] animateConatiners-1">
                        {aboutInfo.about}
                    </div>
                </div>
                <div className="flex justify-end animateConatiner-2">
                    <img className="w-106.5 h-129 rounded-tl-[250px] rounded-br-[250px]" src={aboutInfo.profile} alt="profile-image" />
                </div>
            </div>
        </SectionContainer>
    )
}

export default About;