import Image from "next/image"


export default function Hero() {
  return (
    <div className="relative">
      <div
        className="absolute top-[165px] left-52 rotate-6 z-10"
      >
        <h1 className="font-roboto font-bold text-[42px] animate-once animate-fade-right">Arjun Appukuttan</h1>
      </div>
      <Image
        className="animate-once animate-fade-down"
        src="/heroIcon.svg"
        alt="Hero_Image"
        width={900}
        height={900}
      />
      <div
        className="absolute bottom-[70px] left-16 z-10"
      >
        <h2 className="animate-once animate-fade-right font-light text-xs">FULL STACK WEB DEVELOPER</h2>
      </div>
    </div>
  )
}
