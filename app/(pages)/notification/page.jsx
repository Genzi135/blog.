'use client'
import NavbarPrimary from "@/components/NavbarPrimary"
import SideMain from "@/components/SideMain"
import { useState } from "react"

export default function Notification() {

    const [viewState, setViewState] = useState('all')
    return (
        <main className="flex flex-col">
            <NavbarPrimary />
            <div className="w-full flex justify-center gap-5">
                <div className="w-[768px] p-5 overflow-hidden">
                    <div className="flex justify-between items-center mt-10">
                        <label className="text-5xl font-medium">
                            Notification
                        </label>
                    </div>
                    <div className=" flex gap-5 justify-start items-center border-b-[1px] border-b-gray-400 pt-5 ">
                        <label onClick={() => { setViewState('all') }} className={`${viewState === 'all' ? "font-semibold border-b-[1px] border-b-black" : ""} pb-5`}>All</label>
                        <label onClick={() => { setViewState('response') }} className={`${viewState === 'response' ? "font-semibold border-b-[1px] border-b-black" : ""} pb-5`}>Response</label>
                    </div>
                    {viewState === 'all' && <div className="flex flex-col gap-5 mt-5">
                        You are all catch up
                    </div>}
                    {viewState === 'response' && <div className="flex flex-col gap-5 mt-5">
                        You are all catch up
                    </div>}
                </div>

                <SideMain />
            </div>
        </main>
    )
}