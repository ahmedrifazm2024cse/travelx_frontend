import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

const team = [
  {
    name: "Ahmed Rifaz",
    role: "CEO & Founder",
    img: "/rifaz.jpeg",
  },
  {
    name: "Dharun Kumar",
    role: "Head of Operations",
    img: "/dharun.jpeg",
  },
  { name: "Kamalakannan", role: "Tour Specialist", img: "/kamal.jpeg" },
  { name: "Abinaya", role: "Customer Relations", img: "/abi.jpeg" },
];

function About() {
  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>
          About <span style={{ color: "#00B4FF" }}>TravelX</span>
        </h1>
        <p>Your trusted partner for unforgettable travel experiences</p>
        <div className="breadcrumb">
          <Link to="/">Home</Link> <span>›</span> <span>About Us</span>
        </div>
      </div>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-img">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop"
            alt="About TravelX"
          />
        </div>
        <div className="about-text">
          <p className="section-tag" style={{ textAlign: "left" }}>
            🌍 Our Story
          </p>
          <h2 className="section-title" style={{ textAlign: "left" }}>
            We Make Travel <span>Dreams Real</span>
          </h2>
          <p>
            Founded in 2010, TravelX has been crafting extraordinary travel
            experiences for over 15 years. We started with a simple mission — to
            make travel accessible, affordable and absolutely memorable for
            everyone.
          </p>
          <p style={{ marginTop: "16px" }}>
            From luxury beach resorts to adventurous mountain treks, our expert
            team designs every itinerary with passion, precision and a personal
            touch that sets us apart.
          </p>
          <div className="about-stats">
            {[
              ["50K+", "Happy Travelers"],
              ["200+", "Destinations"],
              ["15+", "Years Experience"],
              ["99%", "Satisfaction Rate"],
            ].map(([val, label]) => (
              <div key={label} className="a-stat">
                <strong>{val}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <Link
            to="/packages"
            className="btn-primary"
            style={{
              padding: "13px 32px",
              fontSize: "15px",
              marginTop: "16px",
              display: "inline-block",
            }}
          >
            Explore Our Packages
          </Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="mission-card">
          <div className="mission-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To deliver world-class travel experiences that inspire, connect and
            transform lives — one journey at a time, with unmatched service and
            care.
          </p>
        </div>
        <div className="mission-card">
          <div className="mission-icon">👁️</div>
          <h3>Our Vision</h3>
          <p>
            To become India's most loved and trusted travel brand, known for
            innovation, transparency and creating lifelong memories for millions
            of travelers.
          </p>
        </div>
        <div className="mission-card">
          <div className="mission-icon">💎</div>
          <h3>Our Values</h3>
          <p>
            Integrity, excellence and customer-first thinking guide everything
            we do. We believe every traveler deserves the very best experience
            possible.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <p className="section-tag">👥 The People</p>
        <h2 className="section-title">
          Meet Our <span>Team</span>
        </h2>
        <p className="section-subtitle">
          Passionate travel experts dedicated to your perfect journey
        </p>
        <div className="team-grid">
          {team.map((m) => (
            <div key={m.name} className="team-card">
              <div className="team-img-wrap">
                <img src={m.img} alt={m.name} />
              </div>
              <h3>{m.name}</h3>
              <span>{m.role}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
//redeploy

export default About;
