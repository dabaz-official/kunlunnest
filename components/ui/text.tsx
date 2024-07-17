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
    <div className="text-base leading-7 text-neutral-700 lg:max-w-lg">
      <p className="text-base leading-7 text-blue-600">
        {subtitle}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        {title}
      </h1>
      <div className="max-w-xl">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mt-8 text-neutral-900">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Text;