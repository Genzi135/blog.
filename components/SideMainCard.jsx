import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Label } from "./ui/label";

export default function SideMainCard() {
    return (
        <div className="flex flex-col gap-2 mt-5">
            <div className="flex items-center gap-2">
                <Avatar>
                    <AvatarImage src={''} />
                    <AvatarFallback>avatar staff</AvatarFallback>
                </Avatar>
                <label className="text-sm font-light">Torsten Walbaum in Towards Data Science</label>
            </div>
            <Label className="text-md">What 10 Years at Uber, Meta and Startups Taught Me About Data Analytics</Label>
        </div>
    )
}