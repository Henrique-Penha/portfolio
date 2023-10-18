'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathname = usePathname();
    return(
        <nav className="fixed z-10 backdrop-filter backdrop-blur-md top-0 bg-white bg-opacity-25 grid grid-cols-2 items-center w-screen p-8"> 
            <h1 className="px-5 font-bold"><Link href="/#home">console.log("Hello World")</Link></h1>
            <ul className="grid grid-cols-4">
                <Link href="#home" className="hover:text-orange-500 text-brand-darkblue active:text-orange-500">Home</Link>
                <Link href="#about" className="hover:text-orange-500 text-brand-darkblue active:text-orange-500">About me</Link>
                <Link href="#projects" className="hover:text-orange-500 text-brand-darkblue active:text-orange-500">Projects</Link>
                <Link href="#contacts" className="hover:text-orange-500 text-brand-darkblue active:text-orange-500">Contacts</Link>
            </ul>
        </nav>
    )
};

export default Navbar;