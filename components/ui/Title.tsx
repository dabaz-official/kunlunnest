interface TextSectionProps {
  title: string;
  description: string | string[];
}

const Title: React.FC<TextSectionProps> = ({
  title,
  description
}) => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl tracking-tight">
        {title}
      </h2>
      <p className="mt-2 text-lg leading-8 text-neutral-600">
        {description}
      </p>
    </div>
  );
};

export default Title;