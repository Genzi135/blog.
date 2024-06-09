'use client'
import NavbarPrimary from "@/components/NavbarPrimary"
import ProfileAbout from "@/components/ProfileAbout"
import ProfileDialog from "@/components/ProfileDialog"
import SideMain from "@/components/SideMain"
import Story from "@/components/Story"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Stories() {


    const [viewState, setViewState] = useState('draft')

    return (
        <main className="flex flex-col">
            <NavbarPrimary />
            <div className="w-full flex justify-center gap-5">
                <div className="w-[768px] p-5 overflow-hidden">
                    <div className="flex justify-between items-center mt-10">
                        <label className="text-5xl font-medium">
                            Your stories
                        </label>
                        <Link href="/write">
                            <button className="p-2 bg-green-500 text-white rounded-full text-sm hover:bg-green-700">
                                Write a story
                            </button>
                        </Link>
                    </div>
                    <div className=" flex gap-5 justify-start items-center border-b-[1px] border-b-gray-400 pt-5 ">
                        <label onClick={() => { setViewState('draft') }} className={`${viewState === 'draft' ? "font-semibold border-b-[1px] border-b-black" : ""} pb-5`}>Draft</label>
                        <label onClick={() => { setViewState('publish') }} className={`${viewState === 'publish' ? "font-semibold border-b-[1px] border-b-black" : ""} pb-5`}>Publish</label>
                        <label onClick={() => { setViewState('response') }} className={`${viewState === 'response' ? "font-semibold border-b-[1px] border-b-black" : ""} pb-5`}>Response</label>
                    </div>

                </div>

                {/* <div className="w-[300px] min-h-[80vh] flex flex-col justify-start border-l-[1px] border-l-gray-400">
                    <div className="flex flex-col justify-start  items-center mt-20">
                        <Image src={'/'} alt="avatr" width={100} height={100} className="bg-gray-300 rounded-full" />
                        <label className="text-2xl font-semibold">Genzi</label>
                        <ProfileDialog />
                    </div>
                </div> */}
                <SideMain />
            </div>
        </main>
    )
}