import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import CodingVid from '../assets/my-coding-vid.mp4'
import { useRef } from 'react';


const Home = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    
    useGSAP( () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                pin: true
            }
        })
        tl.to(videoRef.current, {
            filter: "brightness(50%) contrast(130%) saturate(5%)",
            duration: 0,
        })
        tl.to(videoRef.current, {
            scale: 10,
            duration: 3,
            x: 200,
            borderRadius: 0,
        }, 0)
    })

    return (
        <div ref={containerRef} className="h-screen font-jaro flex flex-col justify-center items-center text-[150px] overflow-hidden">
            <p>NEED SOMEONE WHO CAN CODE ?</p>
            <p className='flex items-center justify-between'>
                <span>I&apos;M</span>
                <video ref={videoRef}  className="h-28.75 w-50 rounded-br-[65px] rounded-tl-[65px]" src={CodingVid} autoPlay loop muted/>
                <span className='pl-5'>YOUR GUY.</span>
            </p>
        </div>
    )
}

export default Home;