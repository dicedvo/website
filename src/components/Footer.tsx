import meta from "../data/meta";
import LinkedInIcon from "~icons/dice/linkedin";
import InstagramIcon from "~icons/dice/instagram";
import FacebookIcon from "~icons/dice/facebook";
import DiceLogo2 from "../assets/dice-logo-stroke.svg";

export default function Footer() {
    return (
        <footer className="relative bg-black text-white py-12">
            <div style={{
                backgroundImage: `url(${DiceLogo2.src})`,
                backgroundSize: 'contain'
            }}
                className="absolute top-0 inset-x-0 h-full w-full bg-no-repeat bg-[120%_center] lg:bg-[80%_center]"></div>

            <div className="relative content-wrapper flex flex-col items-center text-center space-y-8">
                <div className="flex flex-col items-center space-y-4">
                    <p>Stay in touch with us</p>
                    <div className="flex space-x-4">
                        <a href={meta.social_links.linkedin} className="text-white hover:text-white/75"><LinkedInIcon /></a>
                        <a href={meta.social_links.instagram} className="text-white hover:text-white/75"><InstagramIcon /></a>
                        <a href={meta.social_links.facebook} className="text-white hover:text-white/75"><FacebookIcon /></a>
                    </div>
                </div>
                <p className="text-xl uppercase font-medium pt-2">Innovate. Create. Collaborate.</p>
                <p>&copy; 2024 Davao Interschool Computer Enthusiasts</p>
            </div>
        </footer>
    );
}
