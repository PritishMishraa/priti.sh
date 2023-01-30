import { TypeAnimation } from 'react-type-animation';

export default function Typing() {
    return (
        <TypeAnimation
            sequence={['Student at Manipal University Jaipur', 1000,
                'Reads a lot of books', 1000,
                'Budding Developer', 1000,
                'Writes on Hashnode', 1000]}
            style={{ fontSize: '1em' }}
            wrapper="h2"
            repeat={Infinity}
        />
    );
};