import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])  

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'gmail',
            'template_ifwxjmq',
            refForm.current,
            '27u0340p-xQ5QNM7W'
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message , please try again')
            }
        )
    }

    return (
        <>
            <div className='container contact-page'>
            <div>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['C','o','n','t','a','c','t',' ','M','e']}
                idx={15}
                />
            </h1>
            <p>
            The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates, such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat to support its requirements for prey and rearing of its offspring. Tiger cubs stay with their mother for about two years and then become independent, leaving their mother's home range to establish their own.
            </p>
            <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className="half">
                        <input type="text" name="name" placeholder="Name" required />
                    </li>
                    <li className="half">
                        <input type="email" name="email" placeholder="Email" required />
                    </li>
                    <li>
                        <input placeholder="Subject" type="text" name="subject" required />
                    </li>
                    <li>
                        <textarea placeholder="Message" name="message" reaquired></textarea>
                    </li>
                    <li>
                        <input type="submit" className="flat-button" value="SEND" />
                    </li>
                </ul>
            </form>
            </div>
            </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact