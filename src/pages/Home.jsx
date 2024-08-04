import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import DetailsCard from '../components/DetailsCard';
import IdCard from '../components/IdCard';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Abdulrahman Moussa';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Container className="py-8">
        <section className="w-full flex justify-between md:flex-row flex-col-reverse px-4 gap-16 md:gap-4">
          <div className="animate-FadeIn mt-20">
            <DetailsCard />
          </div>
          <div className="animate-FadeInRev">
            <IdCard />
          </div>
        </section>
        <section className="bg-cBlue-dark text-white p-8 rounded-lg shadow-lg text-center mt-40 animate-slideUp">
          <h3 className="text-2xl font-semibold mb-4">
            Let&apos;s Work Together
          </h3>
          <p className="md:text-base text-ms">
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
