"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { FaPhoneAlt, FaEnvelope, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      console.log("SUCCESS!", result.text);
      setMessageSent(true);
      reset();
      setTimeout(() => setMessageSent(false), 5000);
    } catch (error) {
      console.error("FAILED...", error);
      setErrorMessage("Erreur d’envoi du message. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Me contacter</h2>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <p><FaPhoneAlt className={styles.icon} /> <strong>Appeler</strong><br />+1 581-447-5890</p>
          <p><FaEnvelope className={styles.icon} /> <strong>Courriel</strong><br />diallohabibdia@gmail.com</p>
        </div>

        <div className={styles.contactForm}>
          <h3 className={styles.subtitle}>Envoyez-moi un courriel</h3>

          {messageSent && <p className={styles.success}><FaCheckCircle /> Message envoyé avec succès! ✅</p>}
          {errorMessage && <p className={styles.error}><FaTimesCircle /> {errorMessage}</p>}

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Votre nom*"
              {...register("name", { required: "Veuillez entrer votre nom." })}
              className={styles.input}
              aria-label="Nom"
            />
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}

            <input
              type="text"
              placeholder="Objet du message"
              {...register("subject")}
              className={styles.input}
              aria-label="Objet du message"
            />

            <input
              type="email"
              placeholder="Votre adresse courriel*"
              {...register("email", { required: "Veuillez entrer votre adresse courriel." })}
              className={styles.input}
              aria-label="Email"
            />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}

            <textarea
              placeholder="Message*"
              {...register("message", { required: "Veuillez entrer votre message." })}
              className={styles.textarea}
              aria-label="Message"
            ></textarea>
            {errors.message && <p className={styles.error}>{errors.message.message}</p>}

            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? "Envoi en cours..." : "Envoyer message ➤"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
