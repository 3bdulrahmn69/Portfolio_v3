const DetailsCard = () => {
  return (
    <div>
      <div className="name-card max-w-xl relative border-4 border-white border-b-transparent border-r-transparent py-4 md:py-8 px-8 md:px-16 rounded-3xl rounded-tr-none rounded-bl-none shadow-lg">
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
        <p className="md:text-xl text-lg mt-4 mb-2">Frontend Developer.</p>
        <p className="mb-2">
          I build web applications with modern technologies and best practices
          to create a seamless user experience.
        </p>
        <p className="mb-2">
          I am passionate about learning new technologies and sharing my
          knowledge with others.
        </p>
        <p>
          Currently seeking exciting projects or a talented developer team to
          join.
        </p>
      </div>
    </div>
  );
};

export default DetailsCard;
