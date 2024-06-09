'use client'
import NavbarPrimary from "@/components/NavbarPrimary";
import ProfileAbout from "@/components/ProfileAbout";
import ProfileDialog from "@/components/ProfileDialog";
import Story from "@/components/Story";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Profile() {

    const stories = [
        {
            id: 1,
            title: 'Hello',
            author: {
                id: 'phu13052002',
                name: 'Genzi',
                dob: '13/05/2002',
                email: 'phu13052002@gmail.com'
            },
            content: 'Hello there, my name is Genzi, i am a FE web developer and try to become a full-stack developer ❤',
            like: 0,
            comments: [
                {

                },
                {

                },
            ],

        }, {
            id: 2,
            title: 'hi',
            author: {
                id: 'phu13052002',
                name: 'Genzi',
                dob: '13/05/2002',
                email: 'phu13052002@gmail.com'
            },
            content: 'Hello there, my name is Genzi, i am a FE web developer and try to become a full-stack developer ❤',
            like: 0,
            comments: [
                {

                },
                {

                },
            ],

        }
    ]


    const [viewState, setViewState] = useState('home')
    return (
        <main className="flex flex-col">
            <NavbarPrimary />
            <div className="w-full flex justify-center gap-5">
                <div className="w-[768px] p-5 overflow-hidden">
                    <div className="flex justify-between items-center mt-10">
                        <label className="text-5xl font-medium">
                            Genzi
                        </label>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
                                        <Link className="h-5 w-5" />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Copy link to profile</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div className=" flex gap-5 justify-start items-center border-b-[1px] border-b-gray-400 pt-5 ">
                        <label onClick={() => { setViewState('home') }} className={`${viewState === 'home' ? "font-semibold border-b-[1px] border-b-black" : ""} pb-5`}>Home</label>
                        <label onClick={() => { setViewState('about') }} className={`${viewState === 'about' ? "font-semibold border-b-[1px] border-b-black" : ""} pb-5`}>About</label>
                    </div>
                    {viewState === 'home' && <div className="flex flex-col gap-5 mt-5">
                        {stories.map((e) => (
                            <Story key={e.id} data={e} />
                        ))}
                    </div>}
                    {viewState === 'about' && <div className="flex flex-col gap-5 mt-5">
                        <ProfileAbout data={'About'} />
                    </div>}
                </div>

                <div className="w-[300px] min-h-[80vh] flex flex-col justify-start border-l-[1px] border-l-gray-400">
                    <div className="flex flex-col justify-start  items-center mt-20">
                        <Image src={'/'} alt="avatr" width={100} height={100} className="bg-gray-300 rounded-full" />
                        <label className="text-2xl font-semibold">Genzi</label>
                        <ProfileDialog />
                    </div>
                </div>
            </div>
        </main>
    )
}