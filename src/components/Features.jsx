import { BadgeCheck, Frame, Package, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Faithful to the original.",
    text: "Museum-quality reproductions printed from high-resolution scans of the masterpieces.",
  },
  {
    icon: Frame,
    title: "Beautifully finished.",
    text: "Conservation-quality framing, thoughtfully paired with each piece. Ready for your wall.",
  },
  {
    icon: Package,
    title: "Safe from studio to home.",
    text: "Expertly packaged, fully insured, and tracked all the way to your doorstep.",
  },
  {
    icon: HeartHandshake,
    title: "Live with it. Love it.",
    text: "If it's not your piece, we'll help you return it.",
  },
];

function Features() {
  return (
    <section className="features">
      <h2>Extraordinary art. Nothing to worry about.</h2>
      <div className="feature-grid">
        {features.map(({ icon: Icon, title, text }) => (
          <div key={title} className="feature">
            <Icon size={28} strokeWidth={1.4} />
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>

      <blockquote className="quote">
        “Art is to console those who are broken by life”
        <cite>— Vincent Van Gogh</cite>
      </blockquote>
    </section>
  );
}

export default Features;