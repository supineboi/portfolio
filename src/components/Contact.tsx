import { useGSAP } from "@gsap/react";
import { icons } from "../assets/icons";
import SectionContainer from "../UI/SectionContainer"
import gsap from 'gsap'
import { useRef } from "react";

const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const paraRef = useRef<HTMLParagraphElement>(null);
    const iconsRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.from(paraRef.current, {
            rotationX: 90,
            scrollTrigger:{
                trigger: containerRef.current,
                // start: "-100% top",
                scrub: true

            }
        })
        gsap.from(iconsRef.current, {
            opacity: 0,
            stagger: 0.3,
            y: -50,
            scrollTrigger:{
                trigger: containerRef.current,
                start: "-130% top",
                scrub: true

            }
        })
    })
    return (
        <SectionContainer tag={"Contact"}>
            <>
                <div ref={containerRef} className="flex flex-col items-center pb-22">
                    <p ref={paraRef} className="text-[200px] font-jaro">Let's Connect</p>
                    <div ref={iconsRef} className="flex gap-x-10 gap-y-4">
                        <span>{icons.phone}</span>
                        <span>{icons.mail}</span>
                        <span>{icons.linkedIn}</span>
                        <span>{icons.github}</span>
                    </div>
                </div>
                <hr className="mt-28"/>
                <div className="flex justify-between font-jaro text-[16px] pt-8 pb-2">
                    <span>@ 2026 RAHIL</span>
                    <span>DESIGNED & BUILT BY RAHIL</span>
                    <span className="flex gap-x-2">BACK TO TOP {icons.upArrow}</span>
                </div>
            </>

        </SectionContainer>
    )
}

export default Contact;