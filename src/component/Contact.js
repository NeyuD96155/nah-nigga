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
  const [showModal, setShowModal] = useState(false); // Thêm state này
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Logic gửi form của bạn
  
    setShowModal(true); // Hiển thị Modal
    setFormData({ name: "", email: "", message: "" }); // Reset form data
  };
  

  const SuccessModal = ({ onClose }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close-btn" onClick={onClose}>
            &times;
          </span>
          <p>Tin nhắn của bạn đã được gửi thành công!</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Have questions? Reach out to us!</p>

      <form onSubmit={handleSubmit}>
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
      <div>
        <p>Email: phuochvse171793@fpt.edu.vn</p>
        <p>Phone: 0832345780</p>
      </div>
      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Contact;
