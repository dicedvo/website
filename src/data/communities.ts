// Community Logos
import gdscMapuaMcmLogo from '../assets/communities/gdsc_mmcm.png';
import gdscUicLogo from '../assets/communities/gdsc_uic.png';
import adduAccessLogo from '../assets/communities/addu_access.png';
import upSparcsLogo from '../assets/communities/up_sparcs.png';
import usepCssLogo from '../assets/communities/usep_css.png';
import gdscUsepLogo from '../assets/communities/gdsc_usep.png';
import usepSitsLogo from '../assets/communities/usep_sits.jpg';
import umsdcLogo from '../assets/communities/umsdc.png';
import umEnigmaLogo from '../assets/communities/um_enigma.png';
import mmcmApiLogo from '../assets/communities/mmcm_api.png';
import bitsLogo from '../assets/communities/bits.png';

export interface Community {
    logo: string;
    name: string;
    description: string;
    url: string;
}

const communities: Community[] = [
    {
        name: 'Google Developer Student Clubs Mapúa-MCM',
        description: 'GDSC Mapúa-MCM is a Google-powered community of students across various programs at Mapúa Malayan Colleges Mindanao, who share a common passion for advancing their careers and expanding their networks within the technology industry.',
        logo: gdscMapuaMcmLogo.src,
        url: 'https://facebook.com/gdsc.mapuamcm',
    },
    {
        name: 'Google Developer Student Clubs - UIC',
        description: 'The premier student developer community of the University of the Immaculate Conception powered by Google.',
        logo: gdscUicLogo.src,
        url: 'https://facebook.com/dscuic',
    },
    {
        name: 'Ateneo Circle of Computer Enthusiasts for Study and Success (ACCESS)',
        description: 'The ACCESS club stands as a beacon of tech innovation at Ateneo de Davao University. They champion inclusivity, nurture growth, and prioritize visionary thinking. With a blend of networking events, hands-on tutorials, and forward-thinking discussions, The ACCESS club offers a unique platform where technology meets passion and purpose.',
        logo: adduAccessLogo.src,
        url: 'https://accss.addu.edu.ph/',
    },
    {
        name: 'UP Mindanao Society of Programmers and Refined Computer Scientists',
        description: 'SPARCS is a program-based organization for the BS Computer Science course at the University of the Philippines Mindanao that spearheads the expansion of knowledge, sharpening of skills, and revitalization of the passion of aspiring programmers and computer scientists of the university.',
        logo: upSparcsLogo.src,
        url: 'https://www.sparcsup.com/',
    },
    {
        name: 'Computer Science Society',
        description: 'CSS is an academic organization of Bachelor of Science in Computer Science of the University of Southeastern Philippines',
        logo: usepCssLogo.src,
        url: 'https://www.facebook.com/USePCSSOfficial'
    },
    {
        name: 'Google Developer Student Clubs - USeP',
        description: 'Google Developer Student Clubs USeP Obrero is a student-run organization whose members are driven to learn Google developer technologies and fostering a community of like-minded individuals who are passionate in technology, innovation and growth.',
        logo: gdscUsepLogo.src,
        url: 'https://www.facebook.com/GDSCUSePObrero'
    },
    {
        name: 'Society of Information and Technology Students',
        description: 'SITS is an academic organization for Bachelor of Science in Information Technology in the University of Southeastern Philippines.',
        logo: usepSitsLogo.src,
        url: 'https://www.facebook.com/USEPSITSOfficial'
    },
    {
        name: 'University of Mindanao Student Developer Community',
        description: 'UMSDC is your gateway to an exciting world of tech, innovation, and collaboration. Ignite your Passion, Build your Future.',
        logo: umsdcLogo.src,
        url: 'https://www.facebook.com/UMSDCommunity'
    },
    {
        name: 'University of Mindanao Enigma',
        description: "ENIGMA is a dynamic student organization dedicated to nurturing the potential of aspiring programmers within the vibrant community of the University of Mindanao.",
        logo: umEnigmaLogo.src,
        url: 'https://www.facebook.com/um.enigma'
    },
    {
        name: 'Association of Proactive Innovators (API) - MMCM',
        description: "Pursuing knowledge, competing to advance one's skill, and to contribute society in research.",
        logo: mmcmApiLogo.src,
        url: 'https://www.facebook.com/api.mapuamcm'
    },
    {
        name: 'Body of Information Technology Students',
        description: "BITS is the student society of Diploma in Information Technology of  the RTC-Korea Phiippines Vocational Training Center, dedicated to uniting and representing the interests of IT students through learning, networking, and skill development.",
        logo: bitsLogo.src,
        url: 'https://www.facebook.com/rtc.bits'
    },
]

export default communities;
