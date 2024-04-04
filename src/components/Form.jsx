import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  return (
    <form
      name="contact"
      method="POST"
      className="flex flex-col gap-2 w-full text-white"
      data-netlify="true"
      onSubmit="submit"
      action="/contact?success=true"
    >
      <input type="hidden" name="form-name" value="contact" />
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
      <input
        type="submit"
        value="Send Message 🚀"
        disabled={!formData.name || !formData.email || !formData.message}
        className={`bg-cBlue text-white p-2 rounded ${
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
    </form>
  );
}

export default Form;
