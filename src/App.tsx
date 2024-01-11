// Header
import Logo from "./components/Logo";

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

// Engagement Icons
import LocationIcon from "~icons/dice/location";
import CalendarIcon from "~icons/dice/calendar";
import { useEffect, useState } from "react";
import { cn } from "./utilities";

// Engagement Data
import engagements from "./data/engagements";

// Community Data
import communities from "./data/communities";

export default function App() {
  const [scrollPos, setScrollPos] = useState(0);
  const [navbarVariant, setNavbarVariant] = useState<'light' | 'dark'>('dark');

  function getScrollPercent() {
    const h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
  }

  function monitorScroll() {
    setScrollPos(getScrollPercent());
  }

  useEffect(() => {
    if (scrollPos > 0.15) {
      setNavbarVariant('light');
    } else {
      setNavbarVariant('dark');
    }

    window.addEventListener('scroll', monitorScroll);
    return () => {
      window.removeEventListener('scroll', monitorScroll);
    }
  }, [scrollPos]);

  return (
    <main>
      <header className={cn(
        "fixed inset-x-0 top-0 py-5 border-b z-50 transition-colors",
        {
          'backdrop-blur-sm text-white border-white border-opacity-70': navbarVariant === 'dark',
          'bg-white text-black shadow-lg': navbarVariant === 'light'
        }
      )}>
        <div className="content-wrapper flex items-center justify-between mx-auto">
          <Logo variant={navbarVariant === 'light' ? 'dark' : 'light'} />

          <ul className="flex space-x-8 font-bold">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Engagements</a></li>
            <li><a href="#">Communities</a></li>
          </ul>

          <a href="#" className="button">Contact Us</a>
        </div>
      </header>

      {/* Hero */}
      <section style={{paddingTop: 'calc(1.25rem + 88px)', backgroundImage: `url(${heroBg})`}} className="bg-cover bg-no-repeat bg-center text-white relative">
        <div className="relative z-[2] max-w-5xl mx-auto px-10 py-44 flex flex-col items-center space-y-20">
          <div className="space-y-12 flex flex-col items-center">
            <div className="flex space-x-6 items-center">
              <div className="p-4 bg-red-light rounded-full">
                <ComputerIcon className="h-12 w-12" />
              </div>

              <div className="p-4 bg-yellow rounded-full">
                <PeopleIcon className="h-12 w-12" />
              </div>

              <div className="p-4 bg-green-light rounded-full">
                <ConnectIcon className="h-12 w-12" />
              </div>

              <div className="p-4 bg-blue-light rounded-full">
                <BoxIcon className="h-12 w-12" />
              </div>

              <div className="p-4 bg-pink-light rounded-full">
                <TrendIcon className="h-12 w-12" />
              </div>
            </div>

            <div className="space-y-6 text-center">
              <h1 className="text-7xl font-black text-center">Davao's Pioneering Student Tech Collective</h1>
              <p className="w-[90%] mx-auto text-2xl font-normal">DICE is a pioneering initiative in Davao City aimed at revolutionizing computer education and development. We are dedicated to building a collaborative network that empowers student organizations and propels the technology landscape forward.</p>
            </div>
          </div>

          <a href="#" className="button text-2xl py-4 px-16 rounded-base">Get Started</a>
        </div>

        <div style={{backgroundImage: `url(${heroGridBg})`}} className="z-[1] h-[660px] absolute bottom-0 inset-x-0 bg-[center_bottom] bg-no-repeat"></div>
        <div className="z-0 h-full w-full bg-[#161616]/80 absolute inset-0"></div>
      </section>

      {/* Our Mission */}
      <section className="section relative p-0">
        <div className="relative z-[1] content-wrapper">
          <div className="section-header pt-28 !pb-16">
            <h2>Our Mission</h2>
          </div>

          <div style={{backgroundImage: `url(${missionTriangleRight})`}} className="z-0 absolute top-0 right-[-13%] h-[957px] w-[457px] bg-no-repeat bg-[top_center]"></div>

          <div style={{backgroundImage: `url(${missionTriangleLeft})`}} className="z-0 absolute bottom-0 left-[-13%] h-[957px] w-[457px] bg-no-repeat bg-[bottom_center]"></div>

          <div className="relative z-[1] flex flex-col pb-28">
            <div className="flex items-center pb-10">
              <div className="w-[62%] space-y-8">
                <h3 className="block bg-red-light text-white p-4 text-5xl font-extrabold">We believe in the power of collective action.</h3>
                <p className="font-medium text-2xl">We provide a platform for student organizations to come together, exchange ideas, and share resources. Through our support and guidance, we enable our members to unleash their full potential and make a lasting impact in their respective fields.</p>
              </div>

              <div className="w-[40%] pl-8">
                <img src={missionImageRight} alt="Mission Right" />
              </div>
            </div>

            <div className="flex flex-row-reverse items-center pt-10">
              <div className="w-[62%] space-y-8">
                <h3 className="bg-pink-light text-white p-4 text-5xl font-extrabold">Our purpose is to empower student communities through collaboration.</h3>
                <p className="font-medium text-2xl">We understand the challenges faced by student organizations and the need for a strong support system that fosters growth and innovation. That's why we have created a dynamic community that brings together like-minded individuals from various schools, backgrounds, and interests.</p>
              </div>

              <div className="w-[40%] pr-8">
                <img src={missionImageLeft} alt="Mission Left" />
              </div>
            </div>
          </div>
        </div>

        <div style={{backgroundImage: `url(${missionGridBg})`}} className="z-0 h-[677px] absolute top-0 inset-x-0 bg-[center_top] bg-no-repeat"></div>
      </section>

      {/* Our Vision */}
      <section className="section bg-[#F9F9F9] py-36">
        <div className="content-wrapper">
          <div className="section-header">
            <h2>Our Vision</h2>
          </div>

          <div className="flex">
            <div className="w-1/3 space-y-3 pr-3">
            <div className="inline-block p-4 bg-blue-light rounded-full mb-2">
                <BoxIcon className="h-12 w-12" />
              </div>
              <h2 className="text-blue-light text-4xl uppercase font-bold">Create</h2>
              <p className="text-2xl">Create a <b>collaborative of student-run tech organizations</b> that empower the youth of Davao City to pursue their passions in technology.</p>
            </div>
            <div className="w-1/3 space-y-3 px-3 border-x">
              <div className="inline-block p-4 bg-green-light rounded-full mb-2">
                <ConnectIcon className="h-12 w-12" />
              </div>
              <h2 className="text-green-light text-4xl uppercase font-bold">Collaborate</h2>
              <p className="text-2xl">We envision a future where <b>our member organizations collaborate seamlessly,</b> sharing resources and best practices to enhance their reach and impact. </p>
            </div>
            <div className="w-1/3 space-y-3 pl-3">
              <div className="inline-block p-4 bg-yellow rounded-full mb-2">
                <PeopleIcon className="h-12 w-12" />
              </div>
              <h2 className="text-yellow text-4xl uppercase font-bold">Lead</h2>
              <p className="text-2xl">We envision ourselves as a collective leading force in the promotion of computer education and <b>enabling our members to make an impact on our communities.</b></p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="section relative">
        <div style={{backgroundImage: `url(${missionGridBg})`}} className="z-0 h-[677px] absolute top-0 inset-x-0 bg-[center_top] bg-no-repeat"></div>

        <div className="relative content-wrapper">
          <div className="section-header">
            <h2 className="text-green-light">Engagements</h2>
            <p>DICE has participated in events from various tech companies and organizations and in and out of the city.</p>
          </div>

          <div>
            {/* TODO: add carousel */}
            {engagements.slice(1, 2).map((e) => (
              <div className="bg-white border shadow-lg flex" key={`e_${e.title}`}>
                <div style={{backgroundImage: `url(${e.image})`}} className="min-h-64 w-1/2 bg-center bg-cover bg-no-repeat"></div>
                <div className="w-1/2 p-12">
                  <h3 className="text-5xl font-black mb-4">{e.title}</h3>
                  <div className="flex space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="text-blue-light" />
                      <p className="font-medium">{e.date}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <LocationIcon className="text-red-light" />
                      <p className="font-medium">{e.location}</p>
                    </div>
                  </div>
                  <p className="text-lg">{e.description}</p>
                  {e.collaborators && (<div className="mt-8">
                    <p className="font-medium">In collaboration with:</p>
                    <div className="flex flex-wrap items-center -mx-4">
                      {e.collaborators.map(c => (
                        <div className="p-4 w-1/2" key={`e_${e.title}_c_${c.name}`}>
                          <img src={c.logo} alt={c.name} />
                        </div>
                      ))}
                    </div>
                  </div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Communities */}
      <section className="section">
        <div className="content-wrapper">
          <div className="section-header">
            <h2>The <span className="text-pink-light">Communities</span></h2>
            <p>These student organizations encompass a network of tech enthusiast groups with whom we have established valuable connections through our previous collaborative events, fostering a strong and supportive community.</p>
          </div>

          <div className="flex flex-wrap justify-center -mt-20">
            {/* TODO: add carousel */}
            {communities.map((c) => (
              <div className="min-h-[2rem] w-1/3 px-2 pb-2 pt-20" key={`community_${c.name}`}>
                <div className="h-full border shadow-lg flex flex-col p-8 items-center text-center rounded-md">
                  <div className="bg-white p-2 w-32 min-h-32 -mt-20 shadow-md rounded-full border mb-4 flex items-center justify-center">
                    <img src={c.logo} alt={c.name} className="h-auto w-24" />
                  </div>

                  <h3 className="text-2xl font-black mb-4">{c.name}</h3>
                  <p className="mb-10">{c.description}</p>
                  <a href={c.url} className="w-full button py-4 text-xl mt-auto">Visit Website</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section bg-gray-100">
        <div className="content-wrapper">
          <div className="section-header !max-w-full mx-0">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {Array.from({ length: 4 }).map((_, i) => (
              <div className="py-4 px-8 border-b hover:bg-gray-200 border-black" key={`question_${i}`}>
                <p>test</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-yellow-light">
        <div className="flex">
          <div className="w-1/2 flex flex-col space-y-4 pl-60 pr-16 py-16">
            <div className="text-left space-y-4 pb-16">
              <h2 className="text-6xl font-black">Contact Us</h2>
              <p className="text-lg">For any questions or concerns, or to learn more about our organization and initiatives, you may reach out to us through this contact form.</p>
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
                <textarea name="message" className="border rounded-sm shadow px-8 py-4" id="message"></textarea>
              </div>
              <button type="submit" className="button px-24 py-4 bg-black text-lg self-end">Send</button>
            </form>
          </div>
          <div className="w-1/2 bg-gray-200">
            <p>Photo goes here</p>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="content-wrapper flex flex-col items-center text-center space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <p>Stay in touch with us</p>
            <div className="flex space-x-4">
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
            </div>
          </div>
          <p>Innovate. Create. Collaborate.</p>
          <p>&copy; 2024 Davao Interschool Computer Enthusiasts</p>
        </div>
      </footer>
    </main>
  );
}
