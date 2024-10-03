import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import code from '../assets/code.svg';
import MySkills from '../components/MySkills';
import MyTools from '../components/MyTools';

const About = () => {
  useEffect(() => {
    document.title = 'About | Abdulrahman Moussa';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Container className="py-8">
        <section className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-5/12 w-full flex flex-col items-center md:items-start animate-FadeIn">
            <div>
              <div className="flex items-center">
                <h1 className="text-2xl mb-2">Hey again!</h1>
                <span
                  className="text-5xl animate-handCheck"
                  aria-label="Hand waving"
                  role="img"
                >
                  👋
                </span>
              </div>
              <h2 className="text-2xl">
                Let me tell you a bit more about myself
              </h2>
            </div>
            <div className="w-full flex justify-center">
              <p className="text-2xl text-white uppercase font-black">Or</p>
            </div>
            <div className="flex justify-center flex-col items-center md:items-start gap-4">
              <p className="text-xl">
                Wanna connect - collaborate on a project?
              </p>
              <Link
                to="/contact"
                className="md:self-end w-fit py-4 px-16 rounded-full uppercase font-medium bg-transparent border border-white text-white hover:bg-white hover:text-cBlack duration-300 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="md:w-6/12 w-full animate-FadeInRev">
            <img src={code} alt="code" className="w-full h-auto" />
          </div>
        </section>
        <section className="animate-slideUp read">
          <h3 className="text-3xl font-black my-4 uppercase bg-gray-300/40 rounded-3xl py-2 text-center">
            About <span className="text-cBlue">Me</span>
          </h3>
          <div className="text-lg text-gray-700 font-light leading-relaxed tracking-wide text-justify my-4 ">
            <p>
              I&apos;m Abdulrahman Moussa, a passionate and patient frontend
              developer based in Cairo, Egypt. My journey as a software engineer
              started at ALX Africa, where I completed the intensive 12-month
              Software Engineer track, honing my skills and gaining invaluable
              experience.
            </p>
            <p>
              With a strong foundation in both vanilla JavaScript and React.js,
              I craft code with ambitious goals, aiming to shape exceptional
              user experiences that leave a lasting impact.
            </p>
            <p>
              Currently, I&apos;m actively seeking opportunities for either an
              internship or a full-time position as a Frontend Developer.
              I&apos;m eager to apply my skills and contribute to innovative
              projects that drive meaningful change.
            </p>
            <p>
              From concept to execution, I thrive on bringing ideas to life and
              solving complex problems with innovative solutions. With a keen
              eye for detail and a commitment to quality, I specialize in
              creating intuitive and user-friendly interfaces that resonate with
              diverse audiences.
            </p>
            <p>
              Whether collaborating with teams or tackling projects
              independently, I&apos;m always eager to dive into new challenges
              and push the boundaries of what&apos;s possible. Let&apos;s work
              together to turn your vision into reality and create software that
              makes a difference.
            </p>
          </div>
        </section>
        <section className="animate-slideUp">
          <article>
            <h3 className="text-3xl font-black my-4 uppercase bg-gray-300/40 rounded-3xl py-2 text-center">
              I <span className="text-cBlue">Know</span>
            </h3>
            <div className="w-full flex gap-4 flex-wrap justify-center">
              <MySkills />
            </div>
          </article>
          <article>
            <h3 className="text-3xl font-black my-4 uppercase bg-gray-300/40 rounded-3xl py-2 text-center">
              I <span className="text-cBlue">Use</span>
            </h3>
            <div className="w-full flex gap-4 flex-wrap justify-center">
              <MyTools />
            </div>
          </article>
        </section>
        <section className="animate-slideUp read">
          <h3 className="text-3xl font-black my-4 uppercase bg-gray-300/40 rounded-3xl py-2 text-center">
            Education & <span className="text-cBlue">Courses</span>
          </h3>
          <div className="text-lg text-gray-700 font-light leading-relaxed tracking-wide text-justify my-4">
            <div>
              <p>
                <strong>• Bachelor of Management Information Systems</strong> -
                El Obour Institute, Graduated 2024
              </p>
            </div>
            <div>
              <p>
                <strong>• ALX Africa Software Engineering Program</strong> -
                Completed 2024
              </p>
              <p>
                An intensive 12-month course focusing on practical, real-world
                software development skills and methodologies.
              </p>
            </div>
            <div>
              <p>
                <strong>
                  • The Complete JavaScript Course 2024: From Zero to Expert
                </strong>{' '}
                - Jonas Schmedtmann Udemy, Completed 2024
              </p>
            </div>
            <div>
              <p>
                <strong>
                  • The Ultimate React Course 2024: React, Next.js
                </strong>{' '}
                - Jonas Schmedtmann Udemy, Completed 2024
              </p>
            </div>
          </div>
        </section>
        <section className="animate-slideUp read">
          <h3 className="text-3xl font-black my-4 uppercase bg-gray-300/40 rounded-3xl py-2 text-center">
            My <span className="text-cBlue">Hobbies</span>
          </h3>
          <div className="text-lg text-gray-700 font-light leading-relaxed tracking-wide text-justify my-4 ">
            <p>
              When I&apos;m not coding, you can find me indulging in various
              activities. I love playing video games, watching movies and TV
              series, and hanging out with my friends. Whether it&apos;s
              exploring new storylines or enjoying the thrill of competitive
              gaming, these hobbies provide me with relaxation and
              entertainment.
            </p>
            <p>
              Additionally, I enjoy spending time online, whether it&apos;s
              watching YouTube videos, listening to music, or reading books.
              These activities allow me to unwind and broaden my horizons,
              exploring new ideas and perspectives.
            </p>
            <p>
              When I&apos;m not immersed in digital entertainment, I like to
              unwind by scrolling through Facebook, catching up on the latest
              news and updates from friends and family. It&apos;s a simple yet
              enjoyable way to stay connected and engage with the world around
              me.
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default About;
