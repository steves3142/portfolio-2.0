import React, { useEffect, useState } from 'react';
import { SocialIcon } from "react-social-icons";
import Link from 'next/link';
import { Social } from "../typings";

type Props = {
    socials: Social[]
}

export default function Header({ socials }: Props) {
    const [isClient, setIsClient] = useState(false);

    //Client side rendering only to correct issue with SocialIcon
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <div className="flex flex-row items-center">
                {/* Render Social Icons only on the client */}
                {isClient && socials.map((social) => (
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor="gray"
                        bgColor="transparent"
                    />
                ))}
            </div>

            <Link href="#contact">
                <div className="flex flex-row items-center text-gray-300 cursor-pointer">
                    {isClient && (
                        <SocialIcon
                            className="cursor-pointer"
                            network="email"
                            fgColor="gray"
                            bgColor="transparent"
                        />
                    )}
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
                </div>
            </Link>
        </header>
    );
}