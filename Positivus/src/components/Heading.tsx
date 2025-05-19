interface HeadingProps {
  heading: string;
  className?: string;
  description?: string;
  backgroundColor?: "bg-green" | "bg-dark" | "bg-white";
}

const Heading = ({
  heading,
  description,
  backgroundColor = "bg-green",
  className = "",
}: HeadingProps) => {
  return (
    <div className="flex max-lg:flex-col gap-x-10 gap-y-7 items-center mb-10">
      <h2
        className={`${backgroundColor} font-medium rounded-lg px-3 py-1 ${className}`}
      >
        {heading}
      </h2>
      {description && (
        <p className="lg:w-1/2 max-lg:text-center">{description}</p>
      )}
    </div>
  );
};

export default Heading;
