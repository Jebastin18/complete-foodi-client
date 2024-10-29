import React from "react";

const About = () => {
  return (
    <div className="container py-16 mt-32 mx-auto p-6 bg-gradient-to-r from-[#fdfdfd] to-[#f4f4f4] rounded-lg shadow-md transition-all duration-500 hover:shadow-lg">
      <h1 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-gray-800 text-center mb-8">
        About <span className="text-green">Foodi</span>
      </h1>

      <div className="text-lg text-gray-700 mb-8">
        <p className="mb-4">
          Welcome to <span className="text-green">Foodi</span>, where we pride
          ourselves on delivering an unforgettable dining experience. Founded in{" "}
          <span className="text-green">2024</span>, we have been dedicated to
          serving the highest quality food prepared from the freshest
          ingredients, sourced locally and sustainably whenever possible.
        </p>

        <p className="mb-4">
          At <span className="text-green">Foodi</span>, our mission is simple:
          to create delicious food that makes people happy. Whether you're
          enjoying a casual meal with friends or celebrating a special occasion,
          we strive to ensure every guest leaves with a smile.
        </p>

        <p className="mb-4">
          Our chefs are passionate about their craft, blending tradition with
          innovation to create dishes that are not only delicious but also
          beautifully presented. Our staff is dedicated to providing warm and
          welcoming service, ensuring you have a dining experience to remember.
        </p>

        <p className="mb-4">
          Whether you're here for a quick lunch, a leisurely dinner, or a
          celebration, we are honored to be part of your story. Thank you for
          choosing <span className="text-green">Foodi</span>.
        </p>
      </div>

      <div className="team-section">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team member 1 */}
          <div className="team-member text-center hover:bg-gray-100 p-6 rounded-lg transition duration-300 ease-in-out shadow-sm hover:shadow-lg">
            <img
              src="/images/home/about/chef.jpg"
              alt="Chef John"
              className="rounded-full mx-auto mb-4 h-40 w-40 object-cover hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-bold text-gray-800">Chef John Doe</h3>
            <p className="text-green">Executive Chef</p>
            <p className="mt-4 text-gray-700">
              With over 20 years of experience in fine dining, Chef John leads
              our kitchen with creativity and precision.
            </p>
          </div>

          {/* Team member 2 */}
          <div className="team-member text-center hover:bg-gray-100 p-6 rounded-lg transition duration-300 ease-in-out shadow-sm hover:shadow-lg">
            <img
              src="/images/home/about/man.jpg"
              alt="Manager Jane"
              className="rounded-full mx-auto mb-4 h-40 w-40 object-cover hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
            <p className="text-green">Restaurant Manager</p>
            <p className="mt-4 text-gray-700">
              Jane ensures every guest feels welcome and that every service runs
              smoothly.
            </p>
          </div>

          {/* Team member 3 */}
          <div className="team-member text-center hover:bg-gray-100 p-6 rounded-lg transition duration-300 ease-in-out shadow-sm hover:shadow-lg">
            <img
              src="/images/home/about/s.jpg"
              alt="Sommelier Alex"
              className="rounded-full mx-auto mb-4 h-40 w-40 object-cover hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-bold text-gray-800">Alex Johnson</h3>
            <p className="text-green">Sommelier</p>
            <p className="mt-4 text-gray-700">
              Alex brings a world of wine expertise to our restaurant, ensuring
              the perfect pairing for every meal.
            </p>
          </div>
        </div>
      </div>

      <div className="contact-info mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
        <p className="text-lg text-gray-700 mt-4">
          We would love to hear from you! Call us at{" "}
          <span className="text-green">6369592504</span> or email us at{" "}
          <a
            href="mailto:jebastinr817@gmail.com"
            className="text-green hover:underline"
          >
            jebastinr817@gmail.com
          </a>
        </p>
        <p className="text-lg text-gray-700 mt-2">
          Visit us at: 1/303, Tuticorin Main Road, Tirunelveli, Tamil Nadu
          627011
        </p>
      </div>
    </div>
  );
};

export default About;
