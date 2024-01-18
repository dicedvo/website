// Event Images
import diceAcquaintancePartyImage from "../assets/engagements/dice_acquaintance_party.png";
import dsssImage from "../assets/engagements/dsss.png";
import awsCommunityDayImage from "../assets/engagements/aws_community_day.png";
import pwaPilipinasRoadshowImage from "../assets/engagements/pwapilipinas_roadshow.png";
import crackTheCodeImage from "../assets/engagements/crack_the_code.png";
import mlDlCommunityDayImage from "../assets/engagements/ml_dl_community_day.png";
import gdscMmcmReloadedImage from "../assets/engagements/gdsc_mmcm_reloaded.png";
import gdgDevFestDavaoImage from "../assets/engagements/gdg_devfest_davao.png";

// Partners
import { Partner, partnersByName } from "./partners";

export interface Engagement {
    title: string;
    image: string;
    description: string;
    date: string;
    location: string;
    collaboratorLabelText?: string;
    collaborators?: Partner[]
}

const engagements: Engagement[] = [
    {
        title: 'DICE Acquaintance Party',
        date: 'July 22, 2023',
        location: 'The Bloom Startup',
        description: "Our inaugural event this year, an inter-organizational acquaintance party, provided a platform to present our new identity to various student groups citywide. It was a successful endeavor, fostering connections with diverse organizations. Eager to further collaborate, we aim to enhance our community's well-being through continued partnerships.",
        image: diceAcquaintancePartyImage.src
    },
    {
        title: 'Davao Student Startup Summit',
        date: 'September 19, 2023',
        location: 'Mapúa MCM',
        description: "DICE participated in the 1st Student Start-up Summit by hosting the event and providing speakers and volunteers. DICE also coordinated with IDEAS Davao, MMCM, and other sponsors to support the event. The event was a success, with positive feedback from participants.",
        image: dsssImage.src,
        collaborators: partnersByName('IDEAS Davao')
    },
    {
        title: 'AWS Community Day Philippines',
        date: 'September 23, 2023',
        location: 'Rogen Inn',
        description: "Our organization participated in a panel discussion at AWS Community Day on the direction of technology, focusing on the different levels of tech groups across the city. We represented the student sector on the panel and shared our perspectives on the future of technology and how student groups can play a role in shaping its direction.",
        image: awsCommunityDayImage.src,
        collaborators: partnersByName('AWS UG Philippines')
    },
    {
        title: 'PWA Pilipinas: Anniversary Roadshow',
        date: 'September 26, 2023',
        location: 'The Bloom Startup',
        description: "Our organization participated in the PWA Pilipinas event, where we helped to connect the organization to the student organizations in Davao City. We believe that PWAs can be used to create more engaging and informative apps and to create better web experiences.",
        image: pwaPilipinasRoadshowImage.src,
        collaborators: partnersByName('PWA Pilipinas')
    },
    {
        title: 'Crack the Code iOS',
        date: 'October 13, 2023',
        location: 'Fix My Mac',
        description: "This is a free iOS development training program for students and young professionals aged 20-30. The program will teach participants everything they need to know to develop iOS apps, from the ground up. Participants will also have the opportunity to network with other future app moguls and kickstart their journey to a rewarding career in iOS development.",
        image: crackTheCodeImage.src,
        collaboratorLabelText: "This event is organized by:",
        collaborators: partnersByName('Fix My Mac')
    },
    {
        title: 'ML/DL Community Day',
        date: 'October 21, 2023',
        location: 'UIC Bonifacio',
        description: "GDSC UIC planned a Machine Learning and Deep Learning Community Day for students. We helped feature the event on our pages and promote it to the student body. The event was a success, and we are excited to continue supporting student organizations in their efforts to learn about machine learning and deep learning.",
        image: mlDlCommunityDayImage.src,
        collaborators: partnersByName('Google Developer Student Clubs - UIC')
    },
    {
        title: 'GDSC Mapúa-MCM Reloaded: Unleashing The Next Level',
        date: 'October 21, 2023',
        location: 'Mapúa MCM',
        description: "DICE supported GDSC’s Mapua MCM’s online info session. In this event, students got to learn more about the organization and served as an introduction to the team’s ever growing community",
        image: gdscMmcmReloadedImage.src,
        collaborators: partnersByName('Google Developer Student Clubs - Mapúa MCM')
    },
    {
        title: 'GDG DevFest Davao 2023',
        date: 'November 11, 2023',
        location: 'HCDC',
        description: "We helped connect Google Developer Groups Davao to the city wide network of students by promoting their DevFest 2023 event to our followers and encouraging them to attend. The event was a success, and we are excited to continue supporting GDG Davao in their efforts to engage with the student community.",
        image: gdgDevFestDavaoImage.src,
        collaborators: partnersByName('GDG Davao')
    },
];

export default engagements;
