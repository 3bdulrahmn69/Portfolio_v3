import { useEffect } from 'react';
import Container from '../components/Container';
import Form from '../components/Form';
import Links from '../components/Links';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact | Abdulrahman Moussa';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main aria-labelledby="contact-heading">
      <Container className="py-4 flex justify-between items-start md:mt-20 mt-0 md:mb-0 mb-24 md:flex-row flex-col md:static relative">
        <section className="md:w-5/12 w-full animate-FadeIn">
          <div>
            <h2
              id="contact-heading"
              className="text-2xl text-white font-bold mb-4 uppercase"
            >
              Let&apos;s get in touch 🤝
            </h2>
            <p className="text-white text-lg">
              I am always open to new opportunities and collaborations. If you
              have any questions or just want to say hi, feel free to send me a
              message. I&apos;ll try to get back to you as soon as possible.
            </p>
            <p className="text-white flex items-center my-4">
              Fill out this form
              <span className="text-5xl hidden md:block" aria-hidden="true">
                👉
              </span>
              <span className="text-5xl md:hidden block" aria-hidden="true">
                👇
              </span>
            </p>
          </div>
          <div className="mt-6 md:mt-0 md:static absolute -bottom-16">
            <h3 className="uppercase text-xl text-white font-bold mb-2">
              Or find me on
            </h3>
            <Links isCv={false} />
          </div>
        </section>
        <section className="md:w-6/12 w-full md:mt-0 mt-8 mb-8 animate-FadeInRev">
          <h2 className="text-2xl text-white font-bold mb-4 uppercase">
            Send me a Message 📬
          </h2>
          <Form />
        </section>
      </Container>
    </main>
  );
};

export default Contact;
