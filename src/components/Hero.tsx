import Image from "next/image"


export default function Hero() {
  return (
    <div className="relative">
      <div
        className="absolute top-[4.5rem] md:top-[11.5rem] left-24 md:left-52 rotate-6 z-10"
      >
        <h1 className="font-roboto font-bold text-lg md:text-[42px] animate-once animate-fade-right">Arjun Appukuttan</h1>
      </div>
      <Image
        className="animate-once animate-fade-down"
        src="/heroIcon.svg"
        alt="Hero_Image"
        width={900}
        height={900}
      />
      <div
        className="absolute bottom-[24.5em] md:bottom-[70px] left-6 md:left-16 z-10"
      >
        <h2 className="animate-once animate-fade-right font-light text-[.6rem] md:text-xs">FULL STACK WEB DEVELOPER</h2>
      </div>
    </div>
  )
}
