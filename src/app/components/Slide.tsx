'use client'

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider, { Settings } from 'react-slick';
import Html from "../../../public/Html.png";
import Css from "../../../public/CSS3.png";
import Javascript from "../../../public/Javascript.png";
import Typescript from "../../../public/Typescript.png";
import Node from "../../../public/NOde.png";
import Express from "../../../public/Express.png";
import Bootstrap from "../../../public/Bootstrap.png";
import Tailwind from "../../../public/Tailwind.png";
import Mongo from "../../../public/Mongo.png";
import Next from "../../../public/next.png";
import React from "../../../public/React.png";
import Sass from "../../../public/Sass.png";
import Image from 'next/image';

 
const Slide = () => {
    
    enum Direction {
        left,
        rigth,
    }

    const StickArrow = ({ direction, onClick }: {direction: Direction; onClick?: () => void}) => (
        <button type='button' className={`absolute w-16 h-full z-10 top-0 ${direction ? 'right-0' : 'left-0'}`} onClick={onClick}>
            <FontAwesomeIcon icon={direction ? faChevronRight : faChevronLeft} size='3x' color='#FFF'/>
        </button>
    )

    const settings: Settings = {
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <StickArrow direction={Direction.left}/>,
        nextArrow: <StickArrow direction={Direction.rigth}/>
    }


    return (
        <section className="px-4 py-10 bg-blue-950">
            <h2 className="mt-5 text-white">Conhecimento em tecnologias:</h2>
            <Slider className="relative my-6 px-6" {...settings}>
                <Image src={Html} width={70} height={70} alt='Html' className="p-5"/>
                <Image src={Css} width={70} height={70} alt='Css' className="p-5"/>
                <Image src={Javascript} width={70} height={70} alt='Javascript' className="p-5"/>
                <Image src={Typescript} width={70} height={70} alt='Typescript' className="p-5"/>
                <Image src={Node} width={70} height={70} alt='Node' className="p-5"/>
                <Image src={Express} width={70} height={70} alt='Express' className="p-5"/>
                <Image src={React} width={70} height={70} alt='React' className="p-5"/>
                <Image src={Next} width={70} height={70} alt='Next' className="p-5"/>
                <Image src={Bootstrap} width={70} height={70} alt='Bootstrap' className="p-5 pt-6"/>
                <Image src={Tailwind} width={70} height={70} alt='Tailwind' className="p-5 pt-9"/>
                <Image src={Mongo} width={70} height={70} alt='Mongo' className="p-5"/>
                <Image src={Sass} width={70} height={70} alt='Sass' className="p-5 pt-6"/>
            </Slider>

        </section>
    )
}

export default Slide;