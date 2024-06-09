'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Bell, Bookmark, LogOut, NotebookText, User } from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from 'react';

export default function Write() {
    const userData = {
        id: 'phu13052002',
        name: 'Genzi',
        dob: '13/05/2002',
        email: 'phu13052002@gmail.com'
    };

    const [content, setContent] = useState('');
    const textareaRef = useRef(null);

    const onTextareaChange = (e) => {
        setContent(e.target.value);
        adjustTextareaHeight();
    };

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    };

    useEffect(() => {
        adjustTextareaHeight();
    }, [content]);

    useEffect(() => {
        const handleTabPress = (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const { selectionStart, selectionEnd, value } = textareaRef.current;
                const newValue = value.substring(0, selectionStart) + '\t' + value.substring(selectionEnd);
                setContent(newValue);
                setTimeout(() => {
                    textareaRef.current.selectionStart = textareaRef.current.selectionEnd = selectionStart + 1;
                }, 0);
            }
        };

        const textarea = textareaRef.current;
        textarea.addEventListener('keydown', handleTabPress);

        return () => {
            textarea.removeEventListener('keydown', handleTabPress);
        };
    }, []);

    return (
        <main>
            <div className="flex p-5 justify-around items-center border-b-[1px] border-black shadow-green-200 shadow-md">
                <Link href={'/'}>
                    <div id="Logo" className="text-2xl font-medium text-black">
                        Blog <label className="text-green-500 font-extrabold">.</label>
                    </div>
                </Link>
                <div className="flex gap-8 justify-center items-center">
                    <button className="p-2 text-white text-xs rounded-full bg-green-500 hover:bg-green-700">Publish</button>
                    <Link href={'/notification'} className="flex justify-center items-center hover:font-semibold">
                        <Bell className="mr-2 h-5 w-5" />
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className='cursor-pointer'>
                                <AvatarImage src={'/'} />
                                <AvatarFallback>{userData.id}</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-56'>
                            <DropdownMenuLabel>Profile</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <Link href={`/${userData.id}`}>
                                    <DropdownMenuItem>
                                        <User className="mr-2 h-5 w-5" />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                </Link>
                                <Link href={`/${userData.id}/library`}>
                                    <DropdownMenuItem>
                                        <Bookmark className="mr-2 h-5 w-5" />
                                        <span>Library</span>
                                    </DropdownMenuItem>
                                </Link>
                                <Link href={`/${userData.id}/stories`}>
                                    <DropdownMenuItem>
                                        <NotebookText className="mr-2 h-5 w-5" />
                                        <span>Stories</span>
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <Link href={`/settings`}>
                                    <DropdownMenuItem>
                                        <span>Settings</span>
                                    </DropdownMenuItem>
                                </Link>
                                <Link href={`help`}>
                                    <DropdownMenuItem>
                                        <span>Help</span>
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <LogOut className="mr-2 h-5 w-5" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                                <span className="text-xs font-light">{userData.email}</span>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="h-auto flex flex-col items-center ">
                <input type='text'
                    className="outline-none focus:outline-none w-[800px] h-20 mt-2 text-4xl font-semibold"
                    placeholder="Title"
                />
                <textarea
                    className="w-[800px] p-2 h-auto resize-none focus:outline-none"
                    placeholder="Tell your story..."
                    value={content}
                    onChange={onTextareaChange}
                    ref={textareaRef}
                    style={{ overflow: 'hidden' }}
                />
            </div>
        </main>
    );
}
