import ideasDavaoLogo from '../assets/partners/ideasdavao.png';
import awsugLogo from '../assets/partners/awsugph.png';
import pwaPilipinasLogo from '../assets/partners/pwapilipinas.png';
import gdscUicLogo from '../assets/partners/gdscuic.png';
import gdscMmcmLogo from '../assets/partners/gdscmmcm.png';
import fixMyMacLogo from '../assets/partners/fixmymac.png';
import devconDavaoLogo from '../assets/partners/devcondavao.png';
import gdgDavaoLogo from '../assets/partners/gdgdavao.png';

export interface Partner {
    name: string
    logo: string
}

const partners: Partner[] = [
    {
        name: 'IDEAS Davao',
        logo: ideasDavaoLogo.src
    },
    {
        name: 'AWS UG Philippines',
        logo: awsugLogo.src
    },
    {
        name: 'PWA Pilipinas',
        logo: pwaPilipinasLogo.src
    },
    {
        name: 'Google Developer Student Clubs - UIC',
        logo: gdscUicLogo.src
    },
    {
        name: 'Google Developer Student Clubs - Mapúa MCM',
        logo: gdscMmcmLogo.src
    },
    {
        name: 'Fix My Mac',
        logo: fixMyMacLogo.src
    },
    {
        name: 'DEVCON Davao',
        logo: devconDavaoLogo.src
    },
    {
        name: 'GDG Davao',
        logo: gdgDavaoLogo.src
    }
] as const;

export function partnersByName(...names: string[]): Partner[] {
    return partners.filter(partner => names.includes(partner.name)).filter(Boolean);
}

export default partners;