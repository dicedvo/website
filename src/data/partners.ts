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
        logo: ideasDavaoLogo
    },
    {
        name: 'AWS UG Philippines',
        logo: awsugLogo
    },
    {
        name: 'PWA Pilipinas',
        logo: pwaPilipinasLogo
    },
    {
        name: 'Google Developer Student Clubs - UIC',
        logo: gdscUicLogo
    },
    {
        name: 'Google Developer Student Clubs - Mapúa MCM',
        logo: gdscMmcmLogo
    },
    {
        name: 'Fix My Mac',
        logo: fixMyMacLogo
    },
    {
        name: 'DEVCON Davao',
        logo: devconDavaoLogo
    },
    {
        name: 'GDG Davao',
        logo: gdgDavaoLogo
    }
] as const;

export function partnersByName(...names: string[]): Partner[] {
    return partners.filter(partner => names.includes(partner.name)).filter(Boolean);
}

export default partners;