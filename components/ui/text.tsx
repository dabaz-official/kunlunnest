interface TextSectionProps {
  title: string;
  subtitle: string;
  text: string | string[];
}

const Text: React.FC<TextSectionProps> = ({
  title,
  subtitle,
  text
}) => {
  const paragraphs = Array.isArray(text) ? text : text.split('\n\n');

  return (
    <div className="py-10 lg:py-16 max-w-2xl text-center mx-auto">
      <h1 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl lg:text-3xl xl:text-4xl">
        {title}
      </h1>
      <h2 className="text-xs sm:text-sm md:text-md lg:text-lg text-neutral-600 font-light">
        {subtitle}
      </h2>
      <div className="mt-6 sm:mt-8 lg:mt-10">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mt-6 text-neutral-600 text-left text-sm sm:text-md lg:text-base font-light">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Text;