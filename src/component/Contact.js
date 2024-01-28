import React, { useState } from "react";
import "../style/Contact.css";
import { Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Ripple });
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setShowModal(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const SuccessModal = ({ onClose }) => {
    return (
      <div className="contact-modal">
        <div className="contact-modal-content">
          <span className="contact-close-btn" onClick={onClose}>
            &times;
          </span>
          <p>Your message has been sent successfully!</p>
        </div>
      </div>
    );
  };

  return (
    <div>
       <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-description">Have questions? Reach out to us!</p>

      <form className="contact-form" onSubmit={handleSubmit}>

        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-success btn-rounded"
          data-mdb-ripple-color="dark"
        >
          Send Message
        </button>
      </form>

      {/* Additional contact information */}
      <div className="contact-info">
        <p>Email: phuochvse171793@fpt.edu.vn</p>
        <p>Phone: 0832345780</p>
      </div>
    {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
    </div>
  </div>
  );
};

export default Contact;
