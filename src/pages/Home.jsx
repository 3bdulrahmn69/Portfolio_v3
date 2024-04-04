import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import IdCard from '../components/IdCard';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Abdulrahman Moussa';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Container className="py-8">
        <section className="w-full flex justify-between md:flex-row flex-col-reverse px-4 gap-4">
          <div className="name-card max-w-xl relative mt-20 border-4 border-white border-b-transparent border-r-transparent py-4 md:py-8 px-8 md:px-16 rounded-3xl rounded-tr-none rounded-bl-none shadow-lg animate-FadeIn">
            <div className="flex items-center">
              <h1 className="md:text-2xl text-xl mb-2">
                Hey, I&apos;m{' '}
                <span className="font-bold text-2xl">Abdulrahman Moussa</span>!
              </h1>
              <span
                className="md:text-5xl text-3xl animate-handCheck"
                aria-label="Hand waving"
                role="img"
              >
                👋
              </span>
            </div>
            <p className="md:text-xl text-lg mt-4 mb-2">
              A Software Engineer | Frontend Developer.
            </p>
            <p className="mb-2">
              I build web applications with modern technologies and best
              practices to create a seamless user experience.
            </p>
            <p className="mb-2">
              I am passionate about learning new technologies and sharing my
              knowledge with others.
            </p>
            <p>
              Currently seeking exciting projects or a talented developer team
              to join.
            </p>
          </div>
          <div className="animate-FadeInRev">
            <IdCard />
          </div>
        </section>
        <section className="bg-cBlue-dark text-white p-8 rounded-lg shadow-lg text-center mt-40 animate-slideUp">
          <h3 className="text-2xl font-semibold mb-4">
            Let&apos;s Work Together
          </h3>
          <p>
            Interested in collaborating on a project or learning more about my
            work?
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-cBlack-dark mt-4 px-6 py-2 rounded-full shadow hover:bg-gray-100 transition-colors"
          >
            Contact Me
          </Link>
        </section>
      </Container>
    </main>
  );
};

export default Home;
