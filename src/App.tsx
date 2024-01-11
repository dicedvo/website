export default function App() {
  return (
    <main>
      <header className="py-6">
        <div className="content-wrapper flex justify-between mx-auto">
          <p>DICE</p>
          
          <ul className="flex space-x-4">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Engagements</a></li>
            <li><a href="#">Communities</a></li>
          </ul>
          
          <a href="#" className="rounded-md bg-black text-white px-4 py-2">Contact Us</a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center">
          <h1 className="text-7xl font-bold text-center">Davao's Pioneering Student Tech Collective</h1>
          <p className="text-center">DICE is a pioneering initiative in Davao City aimed at revolutionizing computer education and development. We are dedicated to building a collaborative network that empowers student organizations and propels the technology landscape forward.</p>

          <a href="#">Get Started</a>
        </div>
      </section>

      {/* Our Mission */}
      <section>
        <div>
          <div>
            <h3>We believe in the power of collective action.</h3>
            <p>We provide a platform for student organizations to come together, exchange ideas, and share resources. Through our support and guidance, we enable our members to unleash their full potential and make a lasting impact in their respective fields.</p>
          </div>

          <div>
            <h3>Our purpose is to empower student communities through collaboration.</h3>
            <p>We understand the challenges faced by student organizations and the need for a strong support system that fosters growth and innovation. That's why we have created a dynamic community that brings together like-minded individuals from various schools, backgrounds, and interests.</p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section>
        <div className="content-wrapper">
          <div>
            <h2>Create</h2>
            <p>Create a <b>collaborative of student-run tech organizations</b> 
that empower the youth of Davao City to pursue their passions in technology.</p>
          </div>

          <div>
            <h2>Collaborate</h2>
            <p>Create a <b>collaborative of student-run tech organizations</b> 
that empower the youth of Davao City to pursue their passions in technology.</p>
          </div>

          <div>
            <h2>Lead</h2>
            <p>We envision ourselves as a collective leading force in the promotion of computer education and <b>enabling our members to make an impact on our communities.</b></p>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section>
        <div>

        </div>
      </section>
    </main>
  );
}