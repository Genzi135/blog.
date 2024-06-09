'use client'
import NavbarPrimary from "@/components/NavbarPrimary"
import ProfileAbout from "@/components/ProfileAbout"
import ProfileDialog from "@/components/ProfileDialog"
import Story from "@/components/Story"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Library() {


    const [viewState, setViewState] = useState('list')

    return (
        <main className="flex flex-col">
            <NavbarPrimary />
            <div className="w-full flex justify-center gap-5">
                <div className="w-[768px] p-5 overflow-hidden">
                    <div className="flex justify-between items-center mt-10">
                        <label className="text-5xl font-medium">
                            Your library
                        </label>
                        {/* <Link href="/write">
                            <button className="p-2 bg-green-500 text-white rounded-full text-sm hover:bg-green-700">
                                Write a story
                            </button>
                        </Link> */}
                    </div>
                    <div className=" flex gap-5 justify-start items-center border-b-[1px] border-b-gray-400 pt-5 ">
                        <label onClick={() => { setViewState('list') }} className={`${viewState === 'list' ? "font-semibold border-b-[1px] border-b-black" : ""} pb-5`}>Your lists</label>
                        <label onClick={() => { setViewState('save') }} className={`${viewState === 'save' ? "font-semibold border-b-[1px] border-b-black" : ""} pb-5`}>Save lists</label>
                        <label onClick={() => { setViewState('hightlight') }} className={`${viewState === 'hightlight' ? "font-semibold border-b-[1px] border-b-black" : ""} pb-5`}>Hight light</label>
                        <label onClick={() => { setViewState('reading') }} className={`${viewState === 'reading' ? "font-semibold border-b-[1px] border-b-black" : ""} pb-5`}>Reading history</label>
                    </div>

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