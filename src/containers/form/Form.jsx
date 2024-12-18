import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './form.css';
import Lottie from 'lottie-react';
import interview from './contact.json';
import loadingAnimation from './loading.json';
import thanks from './thanks.json';

const Form = ({ translate }) => {
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
      // do nothing
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
      </div>
    );
  } else {
    content = (
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">
          {translate('name')}:
          <input type="text" name="user_name" required />
        </label>
        <label htmlFor="email">
          {translate('email')}:
          <input type="email" name="user_email" required />
        </label>
        <label htmlFor="message">
          {translate('message')}:
          <textarea name="message" required />
        </label>
        <input type="submit" value={translate('send')} />
      </form>
    );
  }

  return (
    <div className="main-container">
      <div className="animation-container">
        <Lottie animationData={interview} />
      </div>
      <div className="form-container">
        <h1>{translate('send_message_title')}...</h1>
        {content}
      </div>
    </div>
  );
};

export default Form;
