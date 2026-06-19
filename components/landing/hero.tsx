"use client"

import Image from "next/image"
import { BookDemoButton } from "../book-demo-button"

const Hero = () => {
    return (
        <section className="relative  py-20 mt-18 h-[80dvh] md:h-[calc(100dvh-6rem)]  lg:py-28 ">
            <Image src={"/image.png"} loading="eager" className="object-right md:object-top object-cover" style={{ objectFit: "cover", zIndex: 0 }} alt="" fill />
            <div className="dark absolute bottom-0 inset-x-0 flex md:hidden h-full w-full bg-linear-to-t from-dark via-dark/80  to-transparent z-1 pointer-events-none" />
            <div className="mx-auto max-w-7xl px-6 md:px-10 z-10 relative h-full">
                {/* <div className="size-[400px] bg-black/70 rounded-full blur-[100px] absolute " /> */}
                <div className='flex flex-col  items-start justify-center  h-full relative'>
                    <div className="text-[15px] font-medium flex items-center justify-start gap-3 text-brand">
                        <span className="w-0.5 rounded-full h-4 bg-brand" /> For industrial field sales teams
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl dark font-bold text-heading mt-5">
                        Don’t Open Your CRM.<br /> Just Call Otto.
                    </h1>

                    <p className='max-w-md text-base md:text-lg lg:text-xl dark text-foreground/70 mt-6 leading-relaxed font-medium'>
                        Otto is an AI sales coordinator for industrial field reps.
                    </p>

                    <p className='max-w-lg text-base md:text-lg lg:text-xl dark text-foreground/70 mt-4 leading-relaxed'>
                        {/* Otto is an AI sales coordinator for industrial field reps. */}
                        It calls before customer visits with the account context reps need, then captures what happened after the visit and keeps follow-ups, quotes, and opportunities moving.
                    </p>

                    {/* <p className='max-w-2xl text-base md:text-lg lg:text-xl text-foreground/80 mt-3 leading-relaxed'>
                        No app. <span className="text-foreground/30">·</span> No dashboard. <span className="text-foreground/30">·</span> No end-of-day CRM cleanup.
                    </p> */}

                    <p className='max-w-lg text-base md:text-lg lg:text-xl dark text-foreground/70 mt-3 leading-relaxed'>
                        A phone call that helps every rep sell better from the field.
                    </p>

                    <div className="flex flex-col sm:flex-row w-full justify-start items- items-start  gap-5  mt-8">
                        <BookDemoButton
                            className="btn-primary inline-flex h-12 md:h-14  items-center rounded-full px-8 md:px-6 md:text-base font-semibold ">
                            Book a demo
                        </BookDemoButton>

                        {/* <button
                            type="button"
                            className="inline-flex h-12 md:h-14 items-center rounded-full bg-border border-light-px-8 md:px-6 md:text-base font-medium text-foreground/80 hover:bg-light-transition ">
                            How it works
                        </button> */}

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero
