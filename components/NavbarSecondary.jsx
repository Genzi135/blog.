import Link from "next/link"
import { Button } from "./ui/button"


function NavbarSecondary() {

    const menuList = [
        {
            id: 1,
            title: 'Our story',
            path: '/our-story',
        }, {
            id: 2,
            title: 'Sign in',
            path: '/sign-in',
        },
    ]

    return (
        <div className="flex p-5 justify-between items-center border-b-[1px] border-black shadow-green-200 shadow-md">
            <div id="Logo" className="text-2xl font-medium cursor-pointer">
                Blog <label className="text-green-500 font-extrabold">.</label>
            </div>
            <div className="flex gap-8 justify-center items-center">
                {menuList.map((item) => (
                    <Link key={item.id} href={item.path}>
                        {item.title}
                    </Link>
                ))}
                <Link href={'/sign-up'}>
                    <Button>Sign up</Button>
                </Link>
            </div>
        </div>
    )
}

export default NavbarSecondary