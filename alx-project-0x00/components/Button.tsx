// components/Button.tsx

import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styleClass }) => {
  return (
    <button
      className={`px-4 py-2 ${styleClass} bg-blue-500 text-white font-bold hover:bg-blue-600 transition duration-200`}
    >
      {title}
    </button>
  );
};

export default Button;
