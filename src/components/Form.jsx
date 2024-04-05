import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC,
        }
      )
      .then(
        () => {
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-2 w-full text-white"
    >
      <label htmlFor="name">
        Full Name: <span className="text-red-600 select-none">*</span>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full px-4 py-2 rounded bg-transparent text-xl border-b-2 border-white placeholder:text-gray-300 focus:outline-none"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
      </label>
      <label htmlFor="email">
        Email <span className="text-red-600 select-none">*</span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded bg-transparent text-xl border-b-2 border-white placeholder:text-gray-300 focus:outline-none"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
      </label>
      <label htmlFor="message">
        Message <span className="text-red-600 select-none">*</span>
        <textarea
          name="message"
          placeholder="Message"
          className="w-full min-h-60 px-4 py-2 bg-slate-50 rounded mt-2 bg-transparent text-xl border border-gray-300 border-b-2 border-b-white placeholder:text-gray-300 focus:outline-none resize-none"
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
          }}
        />
      </label>
      <div className="w-full">
        {isSubmitting ? (
          <div className="bg-cBlue-dark rounded w-full py-4 flex justify-center items-center">
            <span className="w-3 h-3 bg-white rounded-full mx-2 animate-pulse"></span>
            <span className="w-3 h-3 bg-white rounded-full mx-2 animate-pulse"></span>
            <span className="w-3 h-3 bg-white rounded-full mx-2 animate-pulse"></span>
          </div>
        ) : (
          <input
            type="submit"
            value="Send Message 🚀"
            disabled={!formData.name || !formData.email || !formData.message}
            className={`bg-cBlue text-white p-2 rounded w-full ${
              !formData.name || !formData.email || !formData.message
                ? 'opacity-50 cursor-not-allowed'
                : 'cursor-pointer hover:bg-gray-400 transition-colors'
            }`}
            title={
              !formData.name || !formData.email || !formData.message
                ? 'Please fill out all fields'
                : 'Send Message'
            }
          />
        )}
      </div>
    </form>
  );
};

export default Form;
