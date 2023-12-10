import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './form.css';
import Lottie from 'lottie-react';
import interview from './contact.json';
import loadingAnimation from './loading.json';
import thanks from './thanks.json';

const Form = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const resetSuccess = () => {
    setTimeout(() => {
      setIsSuccessful(false);
    }, 7000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID,
      );
      if (form.current) {
        form.current.reset();
      }
      setIsSuccessful(true);
      resetSuccess();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  let content;

  if (loading) {
    content = (
      <div className="loading-container">
        <Lottie animationData={loadingAnimation} />
      </div>
    );
  } else if (isSuccessful) {
    content = (
      <div className="success-message">
        <Lottie animationData={thanks} />
        <p>Your message has been sent successfully!</p>
      </div>
    );
  } else {
    content = (
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">
          Nimi:
          <input type="text" name="user_name" required />
        </label>
        <label htmlFor="email">
          Sähköpostiosoitteesi:
          <input type="email" name="user_email" required />
        </label>
        <label htmlFor="message">
          Viesti:
          <textarea name="message" required />
        </label>
        <input type="submit" value="Lähetä" />
      </form>
    );
  }

  return (
    <div className="main-container">
      <div className="animation-container">
        <Lottie animationData={interview} />
      </div>
      <div className="form-container">
        <h1>LÄHETÄ MEILLE VIESTI...</h1>
        {content}
      </div>
    </div>
  );
};

export default Form;
