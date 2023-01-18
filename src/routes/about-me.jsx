import TypeWriterEffect from 'react-typewriter-effect';

export default function AboutMe() {

    return (
        <>
        <div className="w-80% p-2">
            <div className="mockup-code">
            <pre data-prefix=""><code>
                <TypeWriterEffect 
                    startDelay={100}
                    cursorColor="black"
                    // eslint-disable-next-line no-useless-concat
                    text={"> Hello I'm Daron Adams" + "\n" + "> A senior at the University of Memphis studying Computer Science"
                     + "\n" + "> I have 3 years experience programming and over a year programming professionally" }
                    typeSpeed={10}
                    eraseSpeed={100}
                /></code></pre>
            </div>
        </div>
        </>
    )
}