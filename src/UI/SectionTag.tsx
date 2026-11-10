const SectionTag = (props: { tag: string}) => {
    const fontClasses = "font-jaro text-5xl text-center";
    const borderClasses = "border-2 rounded-tl-[70px] rounded-br-[70px] border-white"
    const hwmp = "p-5 w-72 mx-auto mb-25";

    return (
        <p 
            className={`${fontClasses} ${borderClasses} ${hwmp}`}
        >{props.tag}
        </p>
    )
}

export default SectionTag;