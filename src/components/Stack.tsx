import {stackData, type StackCategory} from "../data/stack"
import SectionContainer from "../UI/SectionContainer";
import type {MouseEvent} from 'react';
import gsap from 'gsap'

const Stack = () => {
    const mouseMoveHandler = (e: MouseEvent, category: string) => {
        const {movementY} = e;
        // console.log(`${category} : ${movementY} `)

        if(movementY > 0){
            gsap.from( `.${category} li` , {
                // rotationX: 90,
                // stagger: 0.3,
                duration:5,
                // y: 50
            })
        }
        else if(movementY < 0){
            gsap.from( `.${category} li` , {
                // rotationX: 45,
                // stagger: 0.3,
                duration:5,
                // y: -50
            })
        }


        
    }
    
    return (
        <SectionContainer tag={"Stack"}>
            <div className="flex justify-between">
                {(Object.keys(stackData) as StackCategory[]).map((category) => <div key={category}>
                        <p className="text-[48px] font-jaro">{category}</p>
                        <ul onMouseMove={(e) => mouseMoveHandler(e, category)} className={` text-[32px] font-caveat text-center ${category}`}>
                            {stackData[category].map( (skill, idx) => <li className={`py-4 ${idx != 2 ? 'text-[#615C5C]' : 'text-white'}`} key={skill}>{skill}</li>)}
                        </ul>
                    </div>
                )}
            </div>
        </SectionContainer>
    )
}

export default Stack;