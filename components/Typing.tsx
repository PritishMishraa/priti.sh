import { TypeAnimation } from 'react-type-animation';

export default function Typing() {
    return (
        <TypeAnimation
            sequence={['Student at Manipal University Jaipur', 1000,
                'Intern at Optym India', 1000,
                'Reads a lot of books and manga', 1000]}
            style={{ fontSize: '1em' }}
            wrapper="h2"
            repeat={Infinity}
        />
    );
};