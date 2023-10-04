import Link from "next/link";


const Navbar = () => {
    return(
        <nav className="container mx-5 top-0 grid grid-cols-2 items-center w-full p-8"> 
            <h1 className="">Hello World</h1>
            <ul className="grid grid-cols-4">
                <Link href="">Home</Link>
                <Link href="">About me</Link>
                <Link href="">Projects</Link>
                <Link href="">Contacts</Link>
            </ul>
        </nav>
    )
};

export default Navbar;