import React from 'react'
import { motion } from "framer-motion"; 

type Props = {}

function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5}}
        className="h-screen relative flex overflow-hidden flex-col text-left md:flew-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
                {projects.map((project, i) => (
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0 
                            }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2}}
                            viewport={{ once: true }}
                            src="https://camo.githubusercontent.com/5b7dc636845c58a3007d220c2ff200815fdd35bbdda8e6acc9b47d22633a4110/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6e6b59494a6c6a7a6b75716c556c78306a492f67697068792e676966"
                            alt=""
                        />

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                 Spotify 2.0
                            </h4>

                            <p className="text-lg text-center md:text-left">
                            This is a lean spotify clone which connects to a local spotify device once logged in. Using NextAuth allows for the Spotify Web API to authenticate the user and determine whether or not the user has a valid account. Tailwind allows for stunning hover effects when selecting playlists and gradient backgrounds. Recoil allows for the creation of playlist atoms to be able to use playlist information retrieved from the Spotify Web API globally throughout the code.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12">

            </div>
        </motion.div>
    )
}

export default Projects