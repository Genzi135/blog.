import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import NavbarSecondary from "./NavbarSecondary";
import EarthIconSVG from '../components/material/earth-svgrepo-com.svg'

export default function GettingStarted() {
    return (
        <main>
            <NavbarSecondary />
            <div style={{ width: '100vw', minHeight: '100%' }} className="flex justify-between items-center p-10 mt-10">
                <div className="flex flex-col gap-5 w-full h-full">
                    <label className="text-6xl">Welcome to Blog <label className="text-green-500 font-extrabold">.</label></label>
                    <p className="text-xl mb-10">
                        Discover story, thinking and expertise from writers on any topic
                    </p>
                    <div>
                        <Link href="/">
                            <Button>Start reading</Button>
                        </Link>
                    </div>
                </div>
                <div className="rounded-full w-full h-full flex justify-center items-center animate-spin duration-10000">
                    {/* <EarthIconSVG /> */}
                    <Image src={EarthIconSVG} alt="ava" width={300} height={300} />
                </div>
            </div>
        </main>
    )
}