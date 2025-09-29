import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/contact.module.css";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message envoyé avec succès !");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Erreur lors de l'envoi. Veuillez réessayer.");
        }
      );
  };

  return (
    <div className={styles.formWrapper}>
      <h3>Envoyer un message rapide</h3>
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <input type="text" name="user_name" placeholder="Votre Nom" required />
        <input
          type="email"
          name="user_email"
          placeholder="Votre Email"
          required
        />
        <textarea
          name="message"
          placeholder="Votre Message"
          rows="4"
          required
        ></textarea>
        <button type="submit" className={styles.submitButton}>
          Envoyer le message
        </button>
      </form>
      {status && <p className={styles.formStatus}>{status}</p>}
    </div>
  );
};

export default ContactForm;
