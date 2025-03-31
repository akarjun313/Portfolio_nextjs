

export default function FooterComponent() {
    return (
        // container 
        <div
            className="flex flex-row w-full border-2 border-slate-600"
        >

            {/* inner container 1 */}
            <div
                className="flex flex-col w-3/12 border-r-2 border-slate-600 justify-center items-center py-6"
            >
                <div>
                    <h2
                        className="font-zuume text-white font-bold text-6xl"
                    >
                        ARJUN
                    </h2>

                </div>
                <h2
                    className="font-zuume text-white font-bold text-6xl"
                >
                    APPUKUTTAN
                </h2>
            </div>

            {/* inner container 2  */}
            <div
                className="flex flex-col w-9/12"
            >
                {/* top container  */}
                <div
                    className="flex border-b-2 border-slate-600 h-1/2"
                >
                    <div
                        className="flex w-1/2 border-r-2 border-slate-600 justify-center items-center py-3"
                    >
                        <h2
                        className="font-zuume text-white font-bold text-6xl"
                        >
                            THANK YOU
                        </h2>
                    </div>
                    <div
                        className="flex flex-col w-1/2 justify-center items-center"
                    >
                        <h2
                        className="font-bold"
                        >
                            akarjun313@gmail.com
                        </h2>
                        <h2 className="font-bold">
                            +91 9061774026
                        </h2>
                    </div>
                </div>

                {/* bottom container  */}
                <div
                    className="flex h-1/2"
                >
                    <div
                        className="flex border-r-2 border-slate-600 h-full w-1/4"
                    ></div>
                    <div className="flex border-r-2 border-slate-600 h-full w-2/4 justify-center items-center">
                        <ul className="flex gap-3">
                            <li>Email</li>
                            <li>LinkedIn</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>GitHub</li>
                        </ul>
                    </div>
                    <div className="flex h-full w-1/4 justify-center items-center">
                        <h2>© Copyright 2025</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
