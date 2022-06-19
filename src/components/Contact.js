// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ data }) => {
  const { name, phone, email, photo } = data;
  return (
    <div className="card">
      <img src={photo} className="contact-photo" alt="pict" />
      <div className="contact-detail">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Contact;
