import Image from "next/image";
import Perfil from "../../../public/perfil.jpg";

const Hero = () => {
    return(
        <header className="container mx-5 my-20 py-20 grid grid-cols-2">
            <div className="grid justify-items-center items-center">
                <Image className="transform scale-150 rounded-full" src={Perfil} width={200} height={200} alt="Perfil" />
            </div>
            <div className="my-10 py-10 px-5">
                <p className="">Hello, I'm</p>
                <h2 className="">Henrique Penha</h2>
                <p className="">Frontend Developer</p>
            </div>
        </header>
    )
};

export default Hero;