import { MotionConfig } from 'framer-motion'
import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }} 
    
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src="https://media-exp1.licdn.com/dms/image/C4D03AQF98Xt53jf7jw/profile-displayphoto-shrink_200_200/0/1624576388295?e=1671667200&v=beta&t=aY5diS57UHJo9EOJZLSuYKySVYHVsmUdAWCfv8sBQHU"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
                    background
                </h4>
                <p className="text-base">
                I am a full stack software engineer who excels at solving software and machine learning problems. I am a creative problem-solver, having acquired my skills from working at startups all the way up to larger corporations including SpaceX. I excel in articulating technical challenges, identifying technical needs, and solving ambiguous or undefined problems.
                </p>
            </div>
        </motion.div>
    )
}