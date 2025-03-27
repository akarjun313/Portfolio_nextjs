"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"


export default function AOSInitializer() {

    useEffect(() => {
        AOS.init({
          duration: 800,
          once: false,
          mirror: false,
          anchorPlacement: "center-center",
          easing: "ease-in-out"
        });
      }, []);

  return null
}
