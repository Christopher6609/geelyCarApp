export default function ImageCard({text, img, width, height}){
    return(
        <>
            <div className="">
                <div className="w-[77.5rem] h-[38.0625rem]" style={{width, height}}>
                    <img className="w-full h-full object-contain" src={img} alt="image"/>
                </div>
                <div className="text-center pt-[2.25rem]">
                    <p className="text-[#444] text-[2.25rem] font-[euclid] leading-normal font-[700]">{text}</p>
                </div>
             </div>
        </>
    )
}