import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './form.css';
import Lottie from 'lottie-react';
import interview from './interview.json';
import loadingAnimation from './loading.json';

const Form = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID,
      );

      console.log(result.text);
      form.current.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <div className="animation-container">
        <Lottie animationData={interview} />
      </div>
      <div className="form-container">
        <h1>LÄHETÄ MEILLE VIESTI...</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">
            Nimi:
            <input type="text" name="user_name" />
          </label>
          <label htmlFor="email">
            Sähköpostiosoite:
            <input type="email" name="user_email" />
          </label>
          <label htmlFor="message">
            Viesti:
            <textarea name="message" />
          </label>
          <input type="submit" value="Lähetä" />
        </form>
        {loading && (
          <div className="loading-container">
            <Lottie animationData={loadingAnimation} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
