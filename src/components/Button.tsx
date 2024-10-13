import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: boolean;
}

export default function Button({
  children,
  icon,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      type={props.type}
      className="flex bg-brand text-[18px] border-2 border-brand text-white px-[24px] py-[10px] rounded-full  hover:bg-white hover:text-brand"
    >
      {children}
      {icon && <p className="ml-[10px]">icon자리</p>}
    </button>
  );
}
