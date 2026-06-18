"use client"

import Image from "next/image"
import { BookDemoButton } from "../book-demo-button"

const Hero = () => {
    return (
        <section className="relative py-20 mt-18 h-[80dvh] md:h-[calc(100dvh-6rem)]  lg:py-28 ">
            <Image src={"/hero.png"} loading="eager" className="object-center md:object-top object-cover" style={{ objectFit: "cover", zIndex: 0 }} alt="" fill />
            <div className="absolute bottom-0 inset-x-0 h-full w-full bg-gradient-to-t from-dark via-dark/70 to-transparent z-[1] pointer-events-none" />
            <div className="mx-auto max-w-7xl px-6 md:px-10 z-10 relative h-full">

                <div className='flex flex-col  items-start justify-end  h-full relative'>
                    <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-50">
                        Your reps call <br /> Otto
                        after every visit.
                    </h1>

                    <p className='max-w-xl text-base md:text-lg lg:text-xl text-neutral-200 mt-6 leading-relaxed'>
                        Otto is an AI sales coordinator reps talk to on the phone. Your CRM stays current, quotes keep moving, and nothing slips after a visit.
                    </p>

                    <div className="flex flex-col sm:flex-row w-full justify-start items- items-start  gap-5  mt-8">
                        <BookDemoButton
                            className="inline-flex h-12 md:h-14  items-center rounded-full bg-brand  px-8 md:px-6 md:text-base font-semibold text-lime-900 hover:bg-lime-400 transition ">
                            Book a demo
                        </BookDemoButton>

                        <button
                            type="button"
                            className="inline-flex h-12 md:h-14 items-center rounded-full bg-dark border border-light-dark px-8 md:px-6 md:text-base font-medium text-neutral-200 hover:bg-light-dark transition ">
                            How it works
                        </button>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero
