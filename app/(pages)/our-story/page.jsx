import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
    return (
        <div className="flex flex-col bg-slate-800">
            <div className="flex p-5 justify-between items-center border-b-[1px] border-white shadow-green-700 shadow-md">
                <Link href={'/'}>
                    <div id="Logo" className="text-2xl font-medium text-white">
                        Blog <label className="text-green-500 font-extrabold">.</label>
                    </div>
                </Link>
                <div className="flex gap-8 justify-center items-center">
                    <Link href={'/sign-in'} className="border-[1px] rounded-md text-white">
                        <Button variant='ghost'>Sign in</Button>
                    </Link>
                    <Link href={'sign-up'}>
                        <Button>Sign up</Button>
                    </Link>
                </div>
            </div>
            <div className="text-white flex flex-col gap-5 w-[60%] p-10">
                <label className="text-8xl">
                    Everyone has a story to tell.
                </label>
                <p className="text-xl">
                    Medium is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.
                </p>
                <p className="text-xl">
                    We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.
                </p>
                <p className="text-xl">
                    Over 100 million people connect and share their wisdom on Medium every month. Many are professional writers, but just as many aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur novelists, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.
                </p>
                <Link href={'/home'} className="text-black text-xl">
                    <Button variant='outline'>Start Reading</Button>
                </Link>
            </div>
        </div>
    )
}