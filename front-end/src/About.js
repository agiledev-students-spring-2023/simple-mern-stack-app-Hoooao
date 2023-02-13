import { Link } from 'react-router-dom'
import './Message.css'
import profile from './profile.jpg'
/**
 * A React component that represents one Message in the list of messages.
 * @param {*} param0 an object holding any props and a few function definitions passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = ({ }) => {

    return (
        <>
            <article>
                Hi!
                My name is Xiyu Hao. I am an undergraduate student majoring in CS at NYU and I am looking for internship opportunities. I have development experience in Distributed Systems, Operating Systems, DBMS, Compiler Construction, and many other infrastructures. I also enjoy full-stack dev and teamworks.
            </article>
            <article className="photo">
                <figure>
                    <img src={profile} alt="" style={{ width: "40%" }} />
                </figure>
            </article>
        </>
    )
}

// make this component available to be imported into any other file
export default About
