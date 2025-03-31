import Image from "next/image";




export default function Hobbies() {
    return (
        <div className="flex justify-end pt-10">
            <Image
                src="/svg/hobbies.svg"
                alt="Hobbies"
                width={1000}
                height={1000}
                data-aos="slide-left"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
                data-aos-anchor-placement="top-bottom"
            />
        </div>
    )
}
