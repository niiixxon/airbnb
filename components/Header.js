import Image from "next/image";
import { 
    SearchIcon,
    MenuIcon,
    UserCircleIcon,
    GlobeAltIcon,
    UsersIcon,
    } from '@heroicons/react/solid'

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* Left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image 
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* Middle - Search */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm  ">
                <input className=" flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 " type="text" placeholder="Start your Search"
                 />
                 <SearchIcon className=" hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50 md:mx-2 " />
            </div>

            {/* Right */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="cursor-pointer hidden md:inline hover:text-red-400">Become a Host</p>
                <GlobeAltIcon className="h-6  " />

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer group">
                    <MenuIcon className="h-6 cursor-pointer group-hover:text-red-400 " />
                    <UserCircleIcon className="h-6 cursor-pointer group-hover:text-red-400 " />
                </div>
            </div>
        </header>
    )
}

export default Header