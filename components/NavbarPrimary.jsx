import Link from "next/link"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Bell, BookMarked, Bookmark, CloudCog, LogOut, NotebookText, SquarePen, User } from "lucide-react"
import { useRouter } from "next/navigation"


function NavbarPrimary() {

    const router = useRouter()

    const userData = {
        id: 'phu13052002',
        name: 'Genzi',
        dob: '13/05/2002',
        email: 'phu13052002@gmail.com'
    }


    return (
        <div className="flex p-5 justify-between items-center border-b-[1px] border-black shadow-green-200 shadow-md">
            <Link href={'/'}>
                <div id="Logo" className="text-2xl font-medium text-black">
                    Blog <label className="text-green-500 font-extrabold">.</label>
                </div>
            </Link>
            <div className="flex gap-8 justify-center items-center">

                <Link href={'/write'} className="flex justify-center items-center hover:font-semibold">
                    <SquarePen className="mr-2 h-5 w-5" />
                    <span>Write</span>
                </Link>

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
                            <div onClick={() => { router.push("/settings") }}>
                                <DropdownMenuItem>
                                    <span>Settings</span>
                                </DropdownMenuItem>
                            </div>
                            <div onClick={() => { router.push("/help") }}>
                                <DropdownMenuItem>
                                    <span>Help</span>
                                </DropdownMenuItem>
                            </div>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={() => { router.push('/sign-in') }}>
                                <LogOut className="mr-2 h-5 w-5" />
                                <span>Log out</span>

                            </DropdownMenuItem>
                            <span className="text-xs font-light">{userData.email}</span>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default NavbarPrimary