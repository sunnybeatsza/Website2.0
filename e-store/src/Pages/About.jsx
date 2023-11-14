import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";

// This is a React functional component named "About."
function About() {
  return (
    <div className="text-light">
      {/* Navigation links to Home, About, and Products */}
      <Navbar />

      {/* Title and description of the page */}
      <h1>"Olympian Opulence"</h1>
      <h3> Elevate your style</h3>
      <h4 className="my-2">About US</h4>

      {/* Container for the main content */}
      <div className="container" style={{ height: "auto", width: "35rem" }}>
        <p>
          At Olympian Opulence, we curate a collection of exquisite, high-end
          products that redefine the boundaries of fashion. Our journey began
          with a passion for offering more than just items; we strive to provide
          an experience that resonates with sophistication and allure.
          <br />
          <hr />
          Our Mission: Olympian Opulence is more than a destination for luxury
          shopping; it's a lifestyle. We aim to inspire and empower individuals
          to express their unique style through carefully selected, meticulously
          crafted pieces.
          <br />
          What Sets Us Apart: From curated collections to personalized service,
          we pride ourselves on offering an unparalleled shopping experience.
          Every product tells a story of craftsmanship, innovation, and the
          pursuit of excellence.
          <br />
          Elegance Redefined: Our commitment to elegance goes beyond the
          products we offer. We believe in a world where luxury is accessible,
          and style is a reflection of individuality. At Olympian Opulence,
          every item is a statement, and every purchase is a step toward refined
          living.
          <br />
          <hr />
          Join Olympian Opulence: Whether you're here for a specific piece or to
          explore the world of luxury, we invite you to join Olympian Opulence.
          Discover a curated selection that transcends trends, embraces
          authenticity, and celebrates the artistry of life. Thank you for being
          a part of our journey. Elevate your style. Embrace Olympian Opulence.
        </p>
      </div>

      {/* Location images */}
      <h2>Please come see us!</h2>
      <div>
        <h2>Tokyo / London stores</h2>
      </div>

      {/* Contact details */}
      <h2>Contact details</h2>
      <p>Email: olympic@luxury.com</p>
      <p>Number : 011 222 4594</p>
    </div>
  );
}

// Export the "About" component to make it available for use in other parts of the application.
export default About;
