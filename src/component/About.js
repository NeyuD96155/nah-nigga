import React from "react";
import "../style/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <section className="about-section about-mission">
        <h2 className="about-subheading">Our Mission</h2>
        <p className="about-paragraph">
          Imagine that your application is dedicated to enhancing user
          experience through innovative technology. The mission statement might
          go as follows: "Our mission at <b>MINT TICKET</b> is to revolutionize
          the way people interact with technology. We strive to create
          user-friendly, efficient, and cutting-edge applications that simplify
          everyday tasks and enhance productivity. Our goal is to empower users
          by providing them with intuitive tools that make their digital
          experience seamless and enjoyable. We are committed to continuous
          improvement and innovation, ensuring that our solutions always meet
          the evolving needs of our users. At the core of our mission is a
          commitment to excellence, user satisfaction, and the pursuit of
          technological advancement."
        </p>
      </section>

      <section className="about-section about-history">
        <h2 className="about-subheading">Our History</h2>
        <p className="about-paragraph">
          The history of your application can be narrated to reflect its
          journey, challenges, and achievements. For example: "The journey of
          <b> MINT TICKET</b> began in <i>2023</i>, born from a passion for
          technology and a desire to make a tangible impact on people's lives.
          What started as a small project in a tiny office has now grown into a
          leading application in its field. Over the years, we have reached
          several milestones that have been instrumental in shaping our journey.
          In
          <i> 2023</i>, we launched our first version, which was met with great
          enthusiasm and positive feedback. This was followed by a series of
          enhancements and new features, each aimed at providing more value to
          our users. In <i>2020</i>, we achieved Academy Award for Best Picture,
          a testament to our dedication and hard work. Each step of our journey
          has been guided by our core values and a deep understanding of our
          users' needs. Today, as we continue to grow and evolve, we remain true
          to our roots – driven by innovation, user-centric design, and a
          commitment to making a difference." These sections aim to articulate
          the essence of your application – its purpose, journey, and the values
          it stands for.
        </p>
      </section>

      <section className="about-section about-team">
        <h2 className="about-subheading">Meet the Team</h2>
        <div className="about-team-member">
          <img src="./assets/img/phuoc.jpg" alt="Team Member Name" />
          <h3>Mint</h3>
          <p>Producer</p>
          <img src="./assets/img/phuoc.jpg" alt="Team Member Name" />
          <h3>Mint</h3>
          <p>Designer</p>
          <img src="./assets/img/phuoc.jpg" alt="Team Member Name" />
          <h3>Mint</h3>
          <p>Editor</p>
        </div>
      </section>

      <section className="about-section about-values">
        <h2 className="about-subheading">Our Values</h2>
        <p className="about-paragraph">
          "At <b>MINT TICKET</b>, our values are the cornerstone of our identity
          and the compass that guides every aspect of our work, decision-making,
          and innovation. These values are not just words to us; they are the
          principles we live by and are evident in every interaction with our
          users, partners, and team members. Innovation and Excellence: We
          believe in constantly pushing the boundaries of what's possible. Our
          dedication to innovation drives us to explore new ideas, technologies,
          and solutions, aiming always for excellence in everything we do.
          User-Centric Design: Our users are at the heart of our
          decision-making. Every feature, update, and service is crafted with
          the user experience in mind, ensuring that our application is not only
          powerful but also intuitive and easy to use. Integrity and
          Transparency: Honesty and transparency are paramount in all our
          interactions. We believe in doing the right thing, being open about
          our processes, and building trust with our users and stakeholders.
          Collaboration and Teamwork: We are a team that values collaboration.
          By bringing together diverse perspectives, expertise, and ideas, we
          create a synergy that fuels innovation and effective problem-solving.
          Commitment to Community and Environment: We are committed to making a
          positive impact on the community and the environment. Our application
          and business practices aim to be sustainable and socially responsible.
          Continuous Learning and Adaptability: The tech world is ever-evolving,
          and so are we. We embrace change, continually learn, and adapt,
          ensuring that we are always at the forefront of technological
          advances. Empowerment and Personal Growth: We invest in the growth and
          development of our team members. By empowering our people, we foster
          an environment of creativity and personal development that translates
          into a better product for our users. These values shape our culture,
          our product, and our approach to the future. They are integral to
          achieving our mission and vision, as we continue to innovate and make
          a meaningful impact in the lives of our users."
        </p>
      </section>

      {/* Additional sections as needed */}
    </div>
  );
};

export default About;
