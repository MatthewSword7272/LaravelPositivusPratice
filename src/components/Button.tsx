interface ButtonProps {
  children: string;
  style: "dark" | "gray" | "green";
  className?: string;
}

const Button = ({ children, style, className }: ButtonProps) => {
  let buttonClassName: string = `px-8 py-5 rounded-xl lg:text-xl border whitespace-nowrap duration-300 ${className} `;

  if (style === "dark") {
    buttonClassName += "bg-dark text-white border-dark hover:bg-white hover:text-dark";
  } else if (style === "gray") {
    buttonClassName += "bg-grey text-dark border-dark hover:bg-dark hover:text-white";
  } else if (style === "green") {
    buttonClassName += "bg-green text-dark hover:bg-dark border-0";
  }

  return <button className={buttonClassName}>{children}</button>;
};

export default Button;
