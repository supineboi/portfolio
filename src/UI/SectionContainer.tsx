import type {ReactElement} from "react";
import SectionTag from "./SectionTag";

interface SectionContainerProps {
    tag: string,
    children: ReactElement,
    isOverflow?: boolean,
    isOmitTag?: boolean
}

const SectionContainer = ({
    tag, 
    children, 
    isOverflow = false,
    isOmitTag = false
} : SectionContainerProps) => {
    return (
        <section className={`h-[90%] mx-40 ${isOverflow ? "overflow-x-hidden" : ""}`}>
                { !isOmitTag && <SectionTag tag={tag}/>}
                {children}
        </section>
    )
}

export default SectionContainer;