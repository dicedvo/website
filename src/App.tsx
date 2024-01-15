
import useScrollRelPosition from "./hooks/scroll";
import meta from "./data/meta"

// Hero
import heroGridBg from "./assets/hero_grid_bg.png";
import heroBg from "./assets/hero_bg.png";

// Icons
import ComputerIcon from "~icons/dice/computer";
import PeopleIcon from "~icons/dice/people";
import ConnectIcon from "~icons/dice/connect";
import BoxIcon from "~icons/dice/box";
import TrendIcon from "~icons/dice/trend";

// Mission Images
import missionGridBg from "./assets/mission_grid_bg.png";
import missionImageRight from "./assets/mission_1.png";
import missionImageLeft from "./assets/mission_2.png";
import missionTriangleRight from "./assets/mission_triangle_right.png";
import missionTriangleLeft from "./assets/mission_triangle_left.png";

// Engagement Data
import partners from "./data/partners";
import engagements from "./data/engagements";

// Community Data
import communities from "./data/communities";

// FAQs
import questions from "./data/faqs";
import Header from "./components/Header";
import FaqsAccordion from "./components/FaqsAccordion";

// Contact Us
import contactBg from "./assets/contact_bg.png";
import ContactTriangle from "./components/ContactTriangle";

// Footer
import LinkedInIcon from "~icons/dice/linkedin";
import InstagramIcon from "~icons/dice/instagram";
import FacebookIcon from "~icons/dice/facebook";
import DiceLogo2 from "./assets/dice-logo-stroke.svg";
import EngagementsCarousel from "./components/EngagementsCarousel";
import CommunitiesCarousel from "./components/CommunitiesCarousel";

export default function App() {
  const scrollRelPosition = useScrollRelPosition();

  return (
    <main>
      <Header variant={scrollRelPosition >= 0.12 ? 'light' : 'dark'} />

      {/* Hero */}
      <section style={{backgroundImage: `url(${heroBg})`}} className="pt-[calc(1.25rem+77px)] md:pt-[calc(1.25rem+88px)] bg-cover bg-no-repeat bg-center text-white relative">
        <div className="relative z-[2] max-w-5xl mx-auto px-10 py-20 md:py-44 flex flex-col items-center space-y-20">
          <div className="space-y-8 md:space-y-12 flex flex-col items-center">
            <div className="flex space-x-3 md:space-x-6 items-center">
              <div className="p-3 bg-red-light-500 rounded-full">
                <ComputerIcon className="h-8 w-8 md:h-12 md:w-12" />
              </div>

              <div className="p-3 bg-yellow-500 rounded-full">
                <PeopleIcon className="h-8 w-8 md:h-12 md:w-12" />
              </div>

              <div className="p-3 bg-green-light-500 rounded-full">
                <ConnectIcon className="h-8 w-8 md:h-12 md:w-12" />
              </div>

              <div className="p-3 bg-blue-light-500 rounded-full">
                <BoxIcon className="h-8 w-8 md:h-12 md:w-12" />
              </div>

              <div className="p-3 bg-pink-light-500 rounded-full">
                <TrendIcon className="h-8 w-8 md:h-12 md:w-12" />
              </div>
            </div>

            <div className="space-y-6 text-center">
              <h1 className="text-5xl md:text-7xl font-black text-center">Davao's Pioneering Student Tech Collective</h1>
              <p className="w-[90%] mx-auto md:text-2xl font-normal">DICE is a pioneering initiative in Davao City aimed at revolutionizing computer education and development. We are dedicated to building a collaborative network that empowers student organizations and propels the technology landscape forward.</p>
            </div>
          </div>

          <a href="#" className="button md:text-2xl py-4 px-16 rounded-base">Get Started</a>
        </div>

        <div style={{backgroundImage: `url(${heroGridBg})`}} className="z-[1] h-[330px] md:h-[660px] absolute bottom-0 inset-x-0 bg-[center_bottom] bg-no-repeat"></div>
        <div className="z-0 h-full w-full bg-[#161616]/80 absolute inset-0"></div>
      </section>

      {/* Our Mission */}
      <section className="section relative p-0">
        <div className="relative z-[1] content-wrapper">
          <div className="section-header pt-10 md:pt-28 !pb-16">
            <h2>Our Mission</h2>
          </div>

          <div style={{backgroundImage: `url(${missionTriangleRight})`}} className="hidden md:block z-0 absolute top-0 right-[-13%] h-[957px] w-[457px] bg-no-repeat bg-[top_center]"></div>
          <div style={{backgroundImage: `url(${missionTriangleLeft})`}} className="hidden md:block z-0 absolute bottom-0 left-[-13%] h-[957px] w-[457px] bg-no-repeat bg-[bottom_center]"></div>

          <div className="relative z-[1] flex flex-col pb-28">
            <div className="flex flex-col-reverse text-center md:text-left md:flex-row items-center md:pb-10">
              <div className="md:w-[62%] space-y-4 md:space-y-8">
                <h3 className="bg-red-light-500 text-white p-1 md:p-4 text-2xl md:text-5xl font-extrabold">We believe in the power of collective action.</h3>
                <p className="font-medium md:text-2xl">We provide a platform for student organizations to come together, exchange ideas, and share resources. Through our support and guidance, we enable our members to unleash their full potential and make a lasting impact in their respective fields.</p>
              </div>

              <div className="w-1/2 md:w-[40%] pb-8 md:pb-0 md:pl-8">
                <img src={missionImageRight} alt="Mission Right" />
              </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row-reverse text-center md:text-left items-center pt-10">
              <div className="md:w-[62%] space-y-4 md:space-y-8">
                <h3 className="bg-pink-light-500 text-white p-4 text-2xl md:text-5xl font-extrabold">Our purpose is to empower student communities through collaboration.</h3>
                <p className="font-medium md:text-2xl">We understand the challenges faced by student organizations and the need for a strong support system that fosters growth and innovation. That's why we have created a dynamic community that brings together like-minded individuals from various schools, backgrounds, and interests.</p>
              </div>

              <div className="w-1/2 md:w-[40%] pb-8 md:pb-0 md:pr-8">
                <img src={missionImageLeft} alt="Mission Left" />
              </div>
            </div>
          </div>
        </div>

        <div style={{backgroundImage: `url(${missionGridBg})`}} className="z-0 h-[677px] absolute top-0 inset-x-0 bg-[center_top] bg-no-repeat"></div>
      </section>

      {/* Our Vision */}
      <section className="section bg-[#F9F9F9] py-10 md:py-36">
        <div className="content-wrapper">
          <div className="section-header">
            <h2>Our Vision</h2>
          </div>

          <div className="flex flex-col md:flex-row px-3 md:px-0">
            <div className="md:w-1/3 space-y-3 pb-8 md:pb-0 md:pr-3">
            <div className="inline-block p-4 bg-blue-light-500 rounded-full mb-2">
                <BoxIcon className="h-12 w-12" />
              </div>
              <h2 className="text-blue-light-500 text-3xl md:text-4xl uppercase font-bold">Create</h2>
              <p className="md:text-2xl">Create a <b>collaborative of student-run tech organizations</b> that empower the youth of Davao City to pursue their passions in technology.</p>
            </div>
            <div className="md:w-1/3 space-y-3 py-8 md:py-0 md:px-3 border-y md:border-y-0 md:border-x">
              <div className="inline-block p-4 bg-green-light-500 rounded-full mb-2">
                <ConnectIcon className="h-12 w-12" />
              </div>
              <h2 className="text-green-light-500 text-4xl uppercase font-bold">Collaborate</h2>
              <p className="md:text-2xl">We envision a future where <b>our member organizations collaborate seamlessly,</b> sharing resources and best practices to enhance their reach and impact. </p>
            </div>
            <div className="md:w-1/3 space-y-3 pt-8 md:pt-0 md:pl-3">
              <div className="inline-block p-4 bg-yellow-500 rounded-full mb-2">
                <PeopleIcon className="h-12 w-12" />
              </div>
              <h2 className="text-yellow-500 text-4xl uppercase font-bold">Lead</h2>
              <p className="md:text-2xl">We envision ourselves as a collective leading force in the promotion of computer education and <b>enabling our members to make an impact on our communities.</b></p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="section relative">
        <div style={{backgroundImage: `url(${missionGridBg})`}} className="z-0 h-[677px] absolute top-0 inset-x-0 bg-[center_top] bg-no-repeat"></div>

        <div className="relative">
          <div className="section-header">
            <h2 className="text-green-light">Engagements</h2>
            <p>DICE has participated in events from various tech companies and organizations and in and out of the city.</p>

            {/* Partner logos */}
            <div className="lg:-mx-48 flex flex-wrap items-center justify-center pt-2">
              {partners.map(p => (
                <div key={`partner_${p.name}`} className="p-2 md:p-4">
                  <img src={p.logo} alt={p.name} />
                </div>
              ))}
            </div>
          </div>

          <EngagementsCarousel data={engagements} />
        </div>
      </section>

      {/* The Communities */}
      <section className="section">
        <div className="section-header">
          <h2>The <span className="text-pink-light-500">Communities</span></h2>
          <p>These student organizations encompass a network of tech enthusiast groups with whom we have established valuable connections through our previous collaborative events, fostering a strong and supportive community.</p>
        </div>

        <CommunitiesCarousel data={communities} />
      </section>

      {/* Frequently Asked Questions */}
      <section className="section bg-gray-100">
        <div className="content-wrapper">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl text-left mx-auto">
            <FaqsAccordion questions={questions} />
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-yellow-light-500">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:w-1/2 flex flex-col space-y-4 lg:pl-16 xl:pl-24 2xl:pl-60 p-8 lg:pr-8 lg:py-16">
            <div className="text-center md:text-left space-y-2 md:space-y-4 md:pb-16">
              <h2 className="text-4xl md:text-6xl font-black">Contact Us</h2>
              <p className="md:text-lg">For any questions or concerns, or to learn more about our organization and initiatives, you may reach out to us through this contact form.</p>
            </div>
            <form method="POST" action="." className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" className="border rounded-sm shadow px-8 py-4" placeholder="example@example.com" />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" id="subject" className="border rounded-sm shadow px-8 py-4" placeholder="Subject Name" />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="message">Message</label>
                <textarea name="message" className="border rounded-sm shadow px-8 py-4" id="message" rows={10}></textarea>
              </div>
              <button type="submit" className="button px-24 py-4 bg-gray-600 hover:bg-gray-700 text-lg w-full md:w-auto md:self-end">Send</button>
            </form>
          </div>
          <div 
            className="flex h-96 md:h-auto flex-row w-full md:flex-col md:w-1/2 bg-gray-200 bg-center bg-cover"
            style={{backgroundImage: `url(${contactBg})`}}>
            <ContactTriangle className="text-yellow-light-500 md:h-full" />
          </div>
        </div>
      </section>

      <footer className="relative bg-black text-white py-12">
        <div style={{
          backgroundImage: `url(${DiceLogo2})`, 
          backgroundSize: 'contain',
          backgroundPosition: '80% center'}}
          className="absolute top-0 inset-x-0 h-full w-full bg-no-repeat"></div>

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
    </main>
  );
}
