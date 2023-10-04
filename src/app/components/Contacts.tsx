import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';


const Contacts = () => {
    return(
        <section className="container mx-5 my-8">
                <h2 className="mb-5">Contatos:</h2>
            <div className="flex gap-10 justify-center py-5">
                <Link href="https://github.com/Henrique-Penha">
                    <FontAwesomeIcon icon={faGithub} width={100} height={100}/>
                </Link>
                <Link href="https://www.linkedin.com/in/henrique-penha">
                    <FontAwesomeIcon icon={faLinkedin} width={100} height={100}/>
                </Link>
                <Link href=" ">
                    <FontAwesomeIcon icon={faEnvelope} width={100} height={100}/>
                </Link>
            </div>
        </section>
    )
}

export default Contacts;