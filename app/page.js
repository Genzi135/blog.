'use client'
import NavbarPrimary from "@/components/NavbarPrimary";
import GettingStarted from "@/components/GettingStarted";
import { useRecoilValue } from "recoil";
import { authState } from "@/store/atoms/useAuth";
import ProfileDialog from "@/components/ProfileDialog";
import Image from "next/image";
import Link from "next/link";
import SideMain from "@/components/SideMain";
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Story from "@/components/Story";

export default function Home() {
  const isLogin = useRecoilValue(authState);

  const tags = [
    {
      title: "For you",
      tag: 'foryou'
    }, {
      title: "Games",
      tag: 'games'
    }, {
      title: "Sport",
      tag: 'sport'
    }, {
      title: "FE",
      tag: 'fe'
    }, {
      title: "BE",
      tag: 'be'
    }, {
      title: "React",
      tag: 'react'
    }, {
      title: "NodeJS",
      tag: 'nodejs'
    },
  ]

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
    },
    {
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
    },
  ]

  const [selected, setSelected] = useState('foryou')
  return (
    <main className="flex flex-col">
      {
        !isLogin.isLoggedIn ? (<GettingStarted />) : (<main className="flex flex-col">
          <NavbarPrimary />
          <div className="w-full flex justify-center gap-5">
            <div className="w-[800px] p-5 overflow-hidden flex flex-col">
              <div className="flex justify-start items-center w-full border-b-[1px] border-b-gray-500 gap-5">
                <Plus />
                {tags.map((e, index) => (
                  <Label onClick={() => setSelected(e.tag)} className={`${selected === e.tag ? "font-semibold border-b-[2px] border-b-black" : " font-normal"} p-2 pb-3`} key={index}>{e.title}</Label>
                ))}
              </div>
              <div className="flex flex-col gap-5 mt-5">
                {stories.map((e) => (
                  <Story key={e.id} data={e} />
                ))}
              </div>
            </div>
            <SideMain />
          </div>
        </main>)
      }


    </main>
  );
}
