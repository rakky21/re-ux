import React, { useState, useRef } from "react";
import { validateEmail } from "../../utils/helpers";
import { AiOutlineMail } from "react-icons/ai";

import emailjs from "emailjs-com";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_i4be4im",
      "template_9nsiyeb",
      form.current,
      "ZzbtA-4C5mnas6mko"
    );
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section id="contact" className="contact_section">
      <div className="contact_container">
        <h2 data-testid="h2tag" className="border-bottom">
          CONTACT
        </h2>
        <form
        ref={form}
          id="contact-form"
          onSubmit={handleSubmit}
          className="contact_form"
        >
          <div>
            
            <label htmlFor="name">Name:</label>
            <input
              required
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input
              required
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
         
            <label htmlFor="message">Message:</label>
            <textarea
              required
              type="text"
              name="message"
              rows="2"
              defaultValue={message}
              onBlur={handleChange}
            />
         
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <div>
            <button data-testid="button" type="submit" className="btn">
              <AiOutlineMail /> Contact Me
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;