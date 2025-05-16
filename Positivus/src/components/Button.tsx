interface ButtonProps {
  children: string;
  style: "dark" | "gray" | "green";
  className?: string;
}

const Button = ({ children, style, className }: ButtonProps) => {
  let buttonClassName: string = `px-8 py-5 rounded-xl lg:text-xl whitespace-nowrap ${className} `;

  if (style === "dark") {
    buttonClassName += "bg-dark text-white";
  } else if (style === "gray") {
    buttonClassName += "bg-grey text-dark border-dark border";
  } else if (style === "green") {
    buttonClassName += "bg-green text-dark";
  }

  return <button className={buttonClassName}>{children}</button>;
};

export default Button;
