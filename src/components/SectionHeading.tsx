

export default function SectionHeading({ headT, headB, caption }: { headT: string, headB: string, caption: string }) {
    return (
        <div className="flex flex-col items-center justify-center w-full relative">
            <div className="h-2"></div>
            <h2
                // className="absolute top-0 left-[39rem] font-zuume font-black text-[9rem] text-stroke"
                className="font-zuume font-black text-[5rem] md:text-[8rem] lg:text-[9rem] text-stroke animate-fade-down animate-once animate-duration-500 animate-delay-150 animate-ease-linear"
            >
                {headT}
            </h2>
            <h2
                // className="absolute top-28 left-[38rem] font-zuume font-black text-[9rem] text-white"
                className="font-zuume font-black text-[5rem] md:text-[8rem] lg:text-[9rem] text-white mt-[-3rem] md:mt-[-6rem] animate-fade-up animate-once animate-duration-500 animate-delay-500 animate-ease-linear"
            >
                {headB}
            </h2>
            <div
                // className="rounded-lg w-96 h-14 bg-[#7B4BD3] flex justify-center items-center absolute rotate-6 z-10 left-[35rem] top-32"
                className="rounded-lg p-0 rotate-6 z-10 absolute"
            >
                <div
                    className="flex justify-center items-center w-full h-auto rounded-lg px-6 py-1 md:px-8 md:py-2 lg:px-10 lg:py-3 bg-[#7B4BD3] animate-fade-right animate-once animate-duration-500 animate-delay-1000"
                >
                    <h3 className="font-roboto font-bold  text-md md:text-xl lg:text-2xl animate-fade animate-once animate-duration-500 animate-delay-[1500ms]">
                        {caption}
                    </h3>
                </div>
            </div>
        </div>
    )
}
