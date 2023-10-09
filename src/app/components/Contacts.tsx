import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';


const Contacts = () => {
    return(
        <section id="contacts" className="px-5 py-8 bg-gradient-to-b from-black to-indigo-100">
                <h2 className="mb-5 text-white text-lg">Contatos:</h2>
            <div className="flex gap-10 justify-center py-5">
                <Link href="https://github.com/Henrique-Penha">
                    <FontAwesomeIcon icon={faGithub} className="h-24"/>
                </Link>
                <Link href="https://www.linkedin.com/in/henrique-penha">
                    <FontAwesomeIcon icon={faLinkedin} className="h-24"/>
                </Link>
                <Link href="mailto:henriquedsp34@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} className="h-24"/>
                </Link>
            </div>
        </section>
    )
}

export default Contacts;