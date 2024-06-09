import Image from "next/image";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { Input } from "./ui/input";

export default function ProfileDialog() {
    const [date, setDate] = useState()
    return (
        <Dialog>
            <DialogTrigger asChild>
                <label className="text-xs text-green-500 cursor-pointer">edit profile</label>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[450px]">
                <DialogHeader>
                    <DialogTitle>Profile information</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col text-sm">
                    <div className="">
                        Photo
                    </div>
                    <div className="flex gap-2 items-center">
                        <div>
                            <Image src={'/'} alt="avatr" width={120} height={120} className="bg-gray-200 rounded-full" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 ">
                                <div className="text-green-500 cursor-pointer">
                                    Update
                                </div>
                                <div className="text-red-500 cursor-pointer">
                                    Delete
                                </div>
                            </div>
                            <div className="text-sm text-gray-500">
                                Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per side.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        Name*
                    </div>
                    <Input />
                </div>
                <div>
                    <div>
                        Bio
                    </div>
                    <Input />
                </div>
                <div>
                    <div>
                        Day of birth
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={`w-[280px] justify-start text-left font-normal",
                                    !${date} && "text-muted-foreground`}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant='outline' className='text-green-500 border-green-500 border-[1px] hover:bg-green-200 hover:text-green-700'>
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button className='bg-green-500 hover:bg-green-700'>
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>

        </Dialog>
    )
}