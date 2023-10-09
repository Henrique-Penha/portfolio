import Image from 'next/image';
import Pensativo from '../../../public/pensativo.jpeg';

const AboutMe = () => {
    return (
        <section id="about" className="py-24 grid grid-cols-2 bg-indigo-100">
            <div className="grid justify-items-center items-center">
                <Image src={Pensativo} width={400} height={200} alt="Pensativo" className="rounded-lg border-2 transform motion-safe:hover:scale-110 duration-700 shadow-2xl"/>
            </div>
            <div className="justify-items-center items-center">
                <h2 className="mt-10 mb-10">Sobre Mim:</h2>
                <p className="mr-10 text-justify">
                Sou estudante de análise e desenvolvimento de sistema pela Estácio e também estudante Full Stack pela Imagine School, 
                pretendo seguir na área Front-End, porém também possuo conhecimento para ser empregado na área Back-End, 
                ou em ambas como desenvolvedor Full Stack.<br />
                Tenho habilidades com linguagem de programação como Javascript e Typescript, além de conhecimentos em frameworks, 
                linguagem de estilo e bibliotecas como React, Node, Express, Next, Bootstrap, Tailwind CSS, CSS, 
                Sass e linguagem de marcação HTML, também possuo conhecimento em banco de dados NoSQL como MongoDb.<br />
                Possuo experiência acadêmica, adquirida em sala de aula com projetos reais e experiência do dia a dia na criação de projetos 
                para o desenvolvimento das habilidades.<br />
                </p>
            </div>
        </section>
    )
}

export default AboutMe;