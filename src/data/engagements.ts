// Event Images
import diceAcquaintancePartyImage from "../assets/engagements/dice_acquaintance_party.png";
import dsssImage from "../assets/engagements/dsss.png";

// Partners
import { Partner, partnersByName } from "./partners";

interface Engagement {
    title: string;
    image: string;
    description: string;
    date: string;
    location: string;
    collaborators?: Partner[]
}

const engagements: Engagement[] = [
    {
        title: 'DICE Acquaintance Party',
        date: 'July 22, 2023',
        location: 'The Bloom Startup',
        description: "Our organization's first event of the year was an acquaintance party for all student organizations across the city. This event was a great opportunity for us to introduce ourselves to other student groups and establish our identity as a new organization. The party was a success, and we were able to connect with many other student groups. We are excited to continue building relationships with other student organizations and working together to make our community a better place.",
        image: diceAcquaintancePartyImage
    },
    {
        title: 'Davao Student Startup Summit',
        date: 'September 19, 2023',
        location: 'Mapúa MCM',
        description: "DICE participated in the 1st Student Start-up Summit by hosting the event and providing speakers and volunteers. DICE also coordinated with IDEAS Davao, MMCM, and other sponsors to support the event. The event was a success, with positive feedback from participants.",
        image: dsssImage,
        collaborators: partnersByName('IDEAS Davao')
    }
];

export default engagements;
