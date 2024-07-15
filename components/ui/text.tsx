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
    <div className="py-6 sm:py-8 lg:py-10 max-w-2xl text-center mx-auto">
      <h1 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl lg:text-3xl xl:text-4xl font-serif">
        {title}
      </h1>
      <h2 className="text-xs sm:text-sm md:text-md lg:text-lg text-neutral-600 font-inter">
        {subtitle}
      </h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mt-6 sm:mt-8 lg:mt-10 text-neutral-600 text-left text-sm sm:text-md lg:text-lg">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default Text;