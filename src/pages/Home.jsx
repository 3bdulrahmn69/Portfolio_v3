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
          <div className="name-card relative mt-20 border-4 border-white border-b-transparent border-r-transparent t py-4 md:py-8 px-8 md:px-16 rounded-3xl rounded-tr-none rounded-bl-none shadow-lg animate-FadeIn  ">
            <div className="flex items-center flex-col md:flex-row">
              <h1 className="text-2xl mb-2">
                Hey I&apos;m Abdulrahman Moussa!
              </h1>
              <span
                className="text-5xl animate-handCheck"
                aria-label="Hand waving"
                role="img"
              >
                👋
              </span>
            </div>
            <p className="text-xl text-center mt-4">
              A Software Engineer | Frontend Developer.
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
