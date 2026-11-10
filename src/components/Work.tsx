import { useGSAP } from "@gsap/react";
import { icons } from "../assets/icons";
import { experiences } from "../data/experience";
import SectionContainer from "../UI/SectionContainer";
import {useState, useRef, type WheelEvent} from 'react';

import gsap from 'gsap'

const Work = () => {
    const scrollerData: {
        boxes: number[],
        bars: number[]
    } = {
        boxes: [30, -15, -60],
        bars: [10, -23, -58]
    };
    const boxContainerRef = useRef<HTMLDivElement>(null);
    const barContainerRef = useRef<HTMLDivElement>(null);

    const [selectedIndex, setSelectedIndex]  = useState<number>(1);


    const onWheelHandler = (e: WheelEvent) => {
        console.log(e.deltaX)

        // Right Side
        if(e.deltaX < 0 && selectedIndex !== 2){
            const idx = selectedIndex == 1 ? 2 : 1;

            console.log("setting righ side :: ", scrollerData.boxes[idx], idx)
            
            setSelectedIndex(idx)
            gsap.to(boxContainerRef.current, {
                x: `${scrollerData.boxes[idx]}%`
            })
            gsap.to(barContainerRef.current, {
                x: `${scrollerData.bars[idx]}%`
            })
            // Left Side
        } else if(e.deltaX > 0 && selectedIndex !== 0){
            const idx = selectedIndex == 1 ? 0 : 1;
            console.log("setting left side :: ", scrollerData.boxes[idx], idx)
            setSelectedIndex(idx)
            
            gsap.to(boxContainerRef.current, {
                x: `${scrollerData.boxes[idx]}%`
            })
            gsap.to(barContainerRef.current, {
                x: `${scrollerData.bars[idx]}%`
            })
        }
    }
    return (
        <SectionContainer tag={"Work"} isOverflow={true}>
            <>
                <div ref={boxContainerRef} onWheel={onWheelHandler} className="flex gap-x-20  translate-x-[-15%] overscroll-x-none">
                    {experiences.map( exp => (
                        <div key={exp.companyName} className="bg-white w-160 h-115 rounded-[50px] flex flex-col justify-end py-1  shrink-0">
                            <div className="text-black font-jaro flex items-end justify-between px-4">
                                <div>
                                    <p className="text-[32px]">{exp.companyName}</p>
                                    <p className="text-[20px] text-[#615C5C]">{exp.designation}</p>
                                </div>
                                <div>
                                    <p className="text-[24px] text-[#615C5C]">{exp.startDate} - {exp.endDate}</p>
                                </div>
                            </div>
                            <div className="text-white bg-[#615C5C] rounded-br-[50px] rounded-bl-[50px] w-[99%] self-center flex flex-col">
                                <ul className="py-6 leading-10 font-imFell text-[20px] list-disc pl-10">
                                    {exp.responsibilities.map( (res,idx) => <li key={idx}>{res}</li>)}
                                </ul>
                                <button className="flex justify-around rounded-tl-[70px] rounded-br-[70px] border-white border-2 px-6 py-2 w-55 self-center my-4"> 
                                    <span className="font-jaro">THE FULL STORY</span>
                                    {icons.rightArrow}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div ref={barContainerRef} className="flex py-10 gap-x-20 w-[3000px] translate-x-[-23%]">
                    {experiences.map( exp => (
                        <div key={exp.companyName} className="font-jaro text-[24px] w-337 gap-x-20">
                            <p className="text-center">{exp.startDate}</p>
                            <div className="rounded-[25px] bg-[#615C5C] px-8 my-2">{exp.companyName}</div>
                        </div>
                    ))}
                </div>
            </>
        </SectionContainer>
    )
}

export default Work;