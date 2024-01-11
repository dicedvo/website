// Community Logos
import gdscMapuaMcmLogo from '../assets/communities/gdsc_mmcm.png';
import gdscUicLogo from '../assets/communities/gdsc_uic.png';
import adduAccessLogo from '../assets/communities/addu_access.png';
import upSparcsLogo from '../assets/communities/up_sparcs.png';
import usepCssLogo from '../assets/communities/usep_css.png';
import gdscUsepLogo from '../assets/communities/gdsc_usep.png';

interface Community {
    logo: string;
    name: string;
    description: string;
    url: string;
}

const communities: Community[] = [
    {
        name: 'Google Developer Student Clubs Mapúa-MCM',
        description: 'GDSC Mapúa-MCM is a Google-powered community of students across various programs at Mapúa Malayan Colleges Mindanao, who share a common passion for advancing their careers and expanding their networks within the technology industry.',
        logo: gdscMapuaMcmLogo,
        url: '#',
    },
    {
        name: 'Google Developer Student Clubs - UIC',
        description: 'The premier student developer community of the University of the Immaculate Conception powered by Google.',
        logo: gdscUicLogo,
        url: '#',
    },
    {
        name: 'Ateneo Circle of Computer Enthusiasts for Study and Success (ACCESS)',
        description: 'The ACCESS club stands as a beacon of tech innovation at Ateneo de Davao University. They champion inclusivity, nurture growth, and prioritize visionary thinking. With a blend of networking events, hands-on tutorials, and forward-thinking discussions, The ACCESS club offers a unique platform where technology meets passion and purpose.',
        logo: adduAccessLogo,
        url: '#',
    },
    {
        name: 'UP Mindanao Society of Programmers and Refined Computer Scientists',
        description: 'SPARCS is a program-based organization for the BS Computer Science course at the University of the Philippines Mindanao that spearheads the expansion of knowledge, sharpening of skills, and revitalization of the passion of aspiring programmers and computer scientists of the university.',
        logo: upSparcsLogo,
        url: '#',
    },
    {
        name: 'Computer Science Society',
        description: 'CSS is an academic organization of Bachelor of Science in Computer Science of the University of Southeastern Philippines',
        logo: usepCssLogo,
        url: '#'
    },
    {
        name: 'Google Developer Student Clubs - USeP',
        description: 'Google Developer Student Clubs USeP Obrero is a student-run organization whose members are driven to learn Google developer technologies and fostering a community of like-minded individuals who are passionate in technology, innovation and growth.',
        logo: gdscUsepLogo,
        url: '#'
    }
]

export default communities;
