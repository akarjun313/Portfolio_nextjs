import Image from "next/image";


export default function TechStack({ imgSrc, imgAlt, skillName }: { imgSrc: string, imgAlt: string, skillName: string }) {
    return (
        <div
            className="flex items-center justify-center w-16 h-16 rounded-full p-3 group relative transition-transform duration-300 hover:scale-105 hover:shadow-[3px_5px_25px_0.5px_#7B4BD3] hover:bg-slate-900 cursor-pointer z-0"
        >
            <Image
                src={imgSrc}
                alt={imgAlt}
                width={100}
                height={100}
                className="z-0 drop-shadow-lg decoration-purple-50"
            />

            

            <div className="absolute top-full mt-2 px-3 py-1 text-sm text-white bg-[#7B4BD3] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:z-10">
                {skillName}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#7B4BD3] z-10"></div>
            </div>

        </div >
    )
}
