import Image from "next/image";
import Perfil from "../../../public/perfil.jpg";

const Hero = () => {
    return(
        <header id="home" className="bg-gradient-to-b from-white to-indigo-100">
            <div className="py-56 grid grid-cols-2">
                <div className="grid justify-items-center items-center">
                    <Image className="transform scale-150 rounded-full" src={Perfil} width={200} height={200} alt="Perfil" />
                </div>
                <div className="my-10 py-10 px-5">
                    <p className="text-base">Hello, I'm</p>
                    <h2 className="text-2xl font-bold">Henrique Penha</h2>
                    <p className="text-xl">Frontend Developer</p>
                </div>
            </div>
        </header>
    )
};

export default Hero;