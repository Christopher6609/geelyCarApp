import ImageCard from "./components/molecules/ImageCard";

export default function Landing(){
    return (
        <>
            <main className="max-w-[1440px] mx-auto">
               <div className="w-full">
                    <img className="object-contain w-full h-full" src="/img/Hero page.png" alt="home-image"/>
               </div>
               <div className="px-[6.25rem]">
                    <div className="text-center pt-[2.25rem]"> 
                        <h1 className="font-[euclid] text-[4rem] font-[700] leading-normal">Progressive by Design</h1>
                    </div>
                    <div>
                    <div className="text-center space-x-[3.87rem] py-[6.19rem]">
                        <button className="uppercase text-[2.25rem] font-[700] font-[euclid] text-[#303437] underline">interior</button>
                        <button className="uppercase text-[2.25rem] font-[700] font-[euclid] text-[#8A8A8A]">exterior</button>
                    </div>
                    <div>
                        <p className="text-[#555] text-center text-[1.5rem] font-normal leading-[2.875rem] font-[nunito]">
                        This car interior exudes luxury and refinement. The supple leather seats and alluring wood trim provide a warm, inviting ambience. The tactile steering wheel is designed to fit comfortably in your hands and features a host of convenient controls. The dashboard features an intuitively designed interface with a full-color LCD display, providing you with a wealth of information about your driving experience. The audio system includes a premium audio system with CD player and Bluetooth connectivity, allowing you to enjoy your favorite music with crystal-clear sound. The spacious interior is brightly lit, with plenty of storage space for your belongings. For those long drives, this car interior provides the perfect balance of comfort and convenience.
                        </p>
                    </div>
                    <div className="pt-[6.19rem]">
                        <ImageCard img="/img/Rectangle 671.png" width={`77.5rem`} height={`38.0625rem`} text={`Sleek Dashboard`}/>
                    </div>
                    <div className="flex gap-[1.5rem] pt-[5.12rem]">
                        <ImageCard img={`/img/Rectangle 673.png`} width={`38rem`} height={`32.5625rem`} text={`Remote Start`}/>
                        <ImageCard img={`/img/Rectangle 672.png`} width={`38rem`} height={`32.5625rem`} text={`Speedometer`}/>
                    </div>
                    <div>
                        <ImageCard img={`/img/Rectangle 674.png`} width={`77.5rem`} height={`38.0625rem`} text={`Wider Vision`} />
                    </div>
                    <div className="flex gap-[1.5rem] pt-[5.12rem]">
                        <ImageCard img={`/img/Rectangle 676.png`} width={`38rem`} height={`32.5625rem`} text={`Well crafted gear system`}/>
                        <ImageCard img={`/img/Rectangle 675.png`} width={`38rem`} height={`32.5625rem`} text={`Android Automotive OS`}/>
                    </div>
                    <div>
                        <ImageCard img={`/img/Rectangle 677.png`} width={`77.5rem`} height={`38.0625rem`} text={`Sophisticated simplicity`} />
                    </div>
               </div>
               <div className="flex pt-[11.81rem]">
                <div className="">
                    <div className="w-[39.5rem] h-[33.5rem]">
                        <img className="w-full h-full object-contain" src={`/img/Rectangle 678.png`} alt="image" />
                    </div>
                </div>
                <div className="px-[1.44rem]">
                    <h2 className="text-[#000] font-[euclid] text-[3rem] font-[700] leading-normal">
                        Geely Emgrand ec7
                    </h2>
                    <p className="text-[1.25rem] font-[nunito] text-[#555] leading-[2.875rem]">
                        This car is perfect for those looking for a reliable and stylish ride. It offers a sporty design, with a sleek exterior and luxurious interior. It has a powerful engine, top-of-the-line safety features, and advanced technology to keep you connected. The spacious cabin is perfect for long road trips and everyday commutes alike. With its comfortable seating, intuitive touchscreen controls, and plenty of cargo space, this car has it all. Take it out for a spin and experience the thrill of driving a truly remarkable vehicle.
                    </p>
                    <div>
                        <button className="border-[1px] border-[#28100E] w-[13.4375rem] h-[3.6875rem] flex items-center justify-center text-[1.25rem] font-[euclid] leading-normal">Watch Video</button>
                    </div>
                </div>
               </div>
               </div>
               
               
            </main>
        </>
    )
}