import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Heart, MessageCircle } from "lucide-react";
import { Label } from "./ui/label";

export default function Story({ data }) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src={data.avatar} />
                        <AvatarFallback>{data.id}</AvatarFallback>
                    </Avatar>
                    <label>{data.author.name}</label>
                </div>
            </CardHeader>
            <div className="flex justify-between items-center">
                <CardContent>
                    <CardTitle>
                        {data.title}
                    </CardTitle>
                    <br></br>
                    <CardDescription>
                        {data.content}
                    </CardDescription>
                    <CardDescription className="text-xs mt-2">
                        2 days ago
                    </CardDescription>
                </CardContent>
                {data.image && <Image src={data.image} alt="image" width={120} height={120} className="bg-gray-300 mr-10" />}
            </div>
            <CardFooter>
                <CardDescription>
                    <span className="flex gap-5 justify-start items-center">
                        <span className="flex justify-center items-center">
                            <Heart className="hover:bg-gray-200 p-1 rounded-full w-8 h-8" />
                            <Label>12</Label>
                        </span>
                        <span className="flex justify-center items-center">
                            <MessageCircle className="hover:bg-gray-200 p-1 rounded-full w-8 h-8" />
                            <Label>102</Label>
                        </span>
                    </span>
                </CardDescription>
            </CardFooter>
        </Card>
    )
}