import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();

  const [status,setStatus] = useState("");

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      "service_wcgpd1w",
      "template_g29os8n",
      form.current,
      "BMTkiaT2KEileyd5z"
    )

    .then(() => {

      setStatus("success");

      form.current.reset();

      setTimeout(()=>{

        setStatus("");

      },3000);

    })

    .catch(() => {

      setStatus("error");

    });

  };

  return (

    <section className="contact" id="contact">

      <h2 className="contact-title">Let's Connect</h2>

      <div className="contact-container">

        {/* CONTACT INFO */}

        <div className="contact-info">

          <h3>Contact Information</h3>

          <p>
            Feel free to reach out for collaborations, job opportunities,
            or if you just want to say hello.
          </p>

          <div className="contact-icons">

            <a href="mailto:harishbalamurugan24@gmail.com">

              <FaEnvelope size={28} color="#EA4335" />

              <span>Email</span>

            </a>

            <a href="https://linkedin.com/in/haarishb" target="_blank" rel="noreferrer">

              <FaLinkedin size={28} color="#0077B5" />

              <span>LinkedIn</span>

            </a>

            <a href="https://github.com/Hari24-c?tab=repositories" target="_blank" rel="noreferrer">

              <FaGithub size={28} color="#181717" />

              <span>GitHub</span>

            </a>

          </div>

        </div>


        {/* CONTACT FORM */}

        <div className="contact-form">

          <form ref={form} onSubmit={sendEmail}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

          {/* SUCCESS MESSAGE */}

          {status === "success" && (

            <p className="form-success">

              ✔ Message sent successfully!

            </p>

          )}

          {/* ERROR MESSAGE */}

          {status === "error" && (

            <p className="form-error">

              ❌ Failed to send message. Try again.

            </p>

          )}

        </div>

      </div>

    </section>

  );

}