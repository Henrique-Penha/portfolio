import Image from "next/image";
import Link from "next/link";
import Astro from "../../../public/Astro.jpg";
import Imag from "../../../public/Imag.jpg";
import Mag from "../../../public/Mag.jpg";
import Shop from "../../../public/shop.jpg";
import Lancamento from "../../../public/lancamento.png";
import Studion from "../../../public/Studion.jpg";

const Projects = () => {
    return (
        <section id="projects" className="px-7 py-24 bg-black">
                <h2 className="text-white text-lg font-bold">Conheça um pouco mais dos meus projetos e conhecimentos no uso das tecnologias: </h2>
                
                <div className="grid grid-cols-3 gap-7 my-10"> 
                    <div className="rounded-lg border-2 border-orange-600 bg-white transform motion-safe:hover:scale-110 duration-700 shadow-lg shadow-white">
                        <Image src={Mag} width={2000} height={900} alt="Test" className="rounded-t-lg"/>
                        <p className="m-5 text-justify">
                        Aplicação web, site bancário, com página principal e modal de cadatramento de cliente, 
                        página de login e página de logado, com informações sobre a conta e cliente, com opcão de transferência, 
                        pagamentos e consultar extrato. Projeto apenas Front-End, criado na linguagem de programação Javascript, 
                        com as tecnologias React, Sass, Bootstrap.
                        </p>

                        <div className="grid grid-cols-2 mb-8 justify-items-center">
                            <button className="bg-blue-900 text-white active:bg-green-700 w-20 h-10 rounded-lg transform motion-safe:hover:scale-110 duration-300">
                                <Link href="https://github.com/Henrique-Penha/magbank">Github</Link>
                            </button>

                            <button className="bg-blue-900 text-white active:bg-green-700 w-20 h-10 rounded-lg transform motion-safe:hover:scale-110 duration-300">
                                <Link href="https://magbank-gamma.vercel.app">Projeto</Link>
                            </button>
                        </div>
                    </div>

                    <div className="rounded-lg border-2 border-orange-600 bg-white transform motion-safe:hover:scale-110 duration-700 shadow-lg shadow-white">
                        <Image src={Imag} width={2000} height={900} alt="Test" className="rounded-t-lg"/>
                        <p className="m-5 text-justify">
                            Aplicação web, serviço de streaming, 
                        com consumo de API do TMDb e uso do slick-carousel para mostrar os fimes e series mais populares do momento. 
                        Projeto criado na linguagem de programação Typescript, com as tecnologias React, Tailwind, Vite.js e API.
                        </p>

                        <div className="grid grid-cols-2 pt-20 justify-items-center">
                            <button className="bg-blue-900 text-white active:bg-green-700 w-20 h-10 rounded-lg transform motion-safe:hover:scale-110 duration-300">
                                <Link href="https://github.com/Henrique-Penha/imagiflix">Github</Link>
                            </button>

                            <button className="bg-blue-900 text-white active:bg-green-700 w-20 h-10 rounded-lg transform motion-safe:hover:scale-110 duration-300">
                                <Link href="https://henrique-penha.github.io/imagiflix">Projeto</Link>
                            </button>
                        </div>
                    </div>

                    <div className="rounded-lg border-2 border-orange-600 bg-white transform motion-safe:hover:scale-110 duration-700 shadow-lg shadow-white">
                        <Image src={Astro} width={2000} height={900} alt="Test" className="rounded-t-lg"/>
                        <p className="m-5 text-justify">
                            Landing page simples com Html e Css.
                        </p>

                        <div className="grid grid-cols-2 pt-48 justify-items-center">
                            <button className="bg-blue-900 text-white active:bg-green-700 w-20 h-10 rounded-lg transform motion-safe:hover:scale-110 duration-300">
                                <Link href="https://github.com/Henrique-Penha/page-astronaut">Github</Link>
                            </button>

                            <button className="bg-blue-900 text-white active:bg-green-700 w-20 h-10 rounded-lg transform motion-safe:hover:scale-110 duration-300">
                                <Link href="https://henrique-penha.github.io/page-astronaut/">Projeto</Link>
                            </button>
                        </div>
                    </div>

                    <div className="rounded-lg border-2 mt-10 border-orange-600 bg-white transform motion-safe:hover:scale-110 duration-700 shadow-lg shadow-white">
                        <Image src={Shop} width={2000} height={900} alt="Test" className="rounded-t-lg"/>
                        <p className="m-5 text-justify">
                        Aplicação web, e-commerce consumo de API, com produtos e informações relacionadas a descrição dos produtos e valores, 
                        além de adicionar o produto no carrinho e a realização da compra. A parte do Back-End, 
                        foi feita a criação da propria API em Javascript com integração com o banco de dados NoSQL MongoDb. 
                        Projeto criado na linguagem de programação Typescript, com as tecnologias Next.js, Node e Styled-components.
                        </p>

                        <div className="grid grid-cols-2 mb-4 justify-items-center">
                            <button className="bg-blue-900 text-white active:bg-green-700 w-20 h-10 rounded-lg transform motion-safe:hover:scale-110 duration-300">
                                <Link href="https://github.com/Henrique-Penha/imagineshop">Github</Link>
                            </button>

                            <button className="bg-blue-900 text-white active:bg-green-700 w-20 h-10 rounded-lg transform motion-safe:hover:scale-110 duration-300">
                                <Link href="https://imagishop.vercel.app">Projeto</Link>
                            </button>
                        </div>
                    </div>

                    <div className="rounded-lg border-2 mt-10 border-orange-600 bg-white transform motion-safe:hover:scale-110 duration-700 shadow-lg shadow-white">
                        <Image src={Studion} width={2000} height={900} alt="Test" className="rounded-t-lg"/>
                        <p className="m-5 text-justify">
                            Projeto de aplicação web, site feito com HTML, CSS e Javascript puro sem framework.
                        </p>

                        <div className="grid grid-cols-2 pt-40 justify-items-center">
                            <button className="bg-blue-900 text-white active:bg-green-700 w-20 h-10 rounded-lg transform motion-safe:hover:scale-110 duration-300">
                                <Link href="https://github.com/Henrique-Penha/studion">Github</Link>
                            </button>

                            <button className="cursor-not-allowed bg-blue-900 text-white active:bg-green-700 w-20 h-10 rounded-lg transform motion-safe:hover:scale-110 duration-300">
                                Projeto
                            </button>
                        </div>
                    </div>

                    <div className="rounded-lg border-2 mt-10 border-orange-600 bg-white transform motion-safe:hover:scale-110 duration-700 shadow-lg shadow-white">
                        <Image src={Lancamento} width={2000} height={900} alt="Test" className="rounded-t-lg"/>
                        <p className="m-5 text-justify">
                            Aplicativo em desenvolvimento, rede social desenvolvida em React Native, com Firebase, Typescript e Redux.
                        </p>

                        <div className="grid grid-cols-2 pt-44 justify-items-center">
                            <button className="cursor-not-allowed bg-blue-900 text-white active:bg-green-700 w-20 h-10 rounded-lg transform motion-safe:hover:scale-110 duration-300">
                                Github
                            </button>

                            <button className="cursor-not-allowed bg-blue-900 text-white active:bg-green-700 w-20 h-10 rounded-lg transform motion-safe:hover:scale-110 duration-300">
                                Projeto
                            </button>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Projects;