import Link from "next/link";


const Navbar = () => {
    return(
        <nav className="fixed z-10 backdrop-filter backdrop-blur-md container top-0 bg-white bg-opacity-25 grid grid-cols-2 items-center w-screen p-8"> 
            <h1 className="px-5">Hello World</h1>
            <ul className="grid grid-cols-4">
                <Link href="#home">Home</Link>
                <Link href="#about">Sobre mim</Link>
                <Link href="#projects">Projetos</Link>
                <Link href="#contacts">Contatos</Link>
            </ul>
        </nav>
    )
};

export default Navbar;