import Image from "next/image"


export default function Hero() {
  return (
    <div className="relative">
      <div
        className="absolute top-[4.5rem] md:top-[11.5rem] left-24 md:left-52 rotate-6 z-10"
      >
        <h1
          className="font-roboto font-bold text-lg md:text-[42px]"
          data-aos="fade-right"
          data-aos-delay="800"
          data-aos-easing="linear"
        >
          Arjun Appukuttan
        </h1>
      </div>
      <Image
        src="/heroIcon.svg"
        alt="Hero_Image"
        width={900}
        height={900}
        data-aos="fade-down"
      />
      <div
        className="absolute bottom-[24.5em] md:bottom-[70px] left-6 md:left-16 z-10"
        data-aos="fade-right"
      >
        <h2 className="font-light text-[.6rem] md:text-xs">FULL STACK WEB DEVELOPER</h2>
      </div>
    </div>
  )
}
