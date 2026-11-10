import { useGSAP } from "@gsap/react";
import SectionContainer from "../UI/SectionContainer";
import gsap from 'gsap'
import { useRef } from "react";

const MarqueeText = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useGSAP( () => {
        gsap.from(textRef.current, {
            x:"-87%",
            duration: 10,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "-20% top",
                end: "120% top",
                scrub: 2,
                pin: true
            }
        })
    })

    return (
        <SectionContainer tag={""} isOmitTag={true} isOverflow={true}>
                <div ref={containerRef} className="font-jaro text-[750px] whitespace-nowrap leading-none border-t-2 border-b-2 overflow-hidden">
                    <span ref={textRef} className="inline-block">BUILT WITH CODE. SHAPED BY CURIOSITY</span>
                </div>
        </SectionContainer>
    )
}

export default MarqueeText;