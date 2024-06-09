import SideMainCard from "./SideMainCard";
import { Label } from "./ui/label";

export default function SideMain() {
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
    return (
        <div className="w-[300px] min-h-[80vh] flex flex-col justify-start border-l-[1px] border-l-gray-400 p-5">
            <Label>Staff picks</Label>
            <SideMainCard />
            <SideMainCard />
            <SideMainCard />
            <Label className="mt-5">Tags</Label>
            <div className="flex gap-2 flex-wrap pt-5 pb-5">{tags.map((e, index) => (
                <div className="border-2 p-2 rounded-full bg-gray-100 cursor-pointer" key={index}>{e.title}</div>
            ))}</div>
        </div>
    )
}