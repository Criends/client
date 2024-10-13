import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: boolean;
}

export default function Button({ icon, ...props }: ButtonProps) {
  return (
    <button
      type={props.type}
      className="flex bg-[#4400D1] text-[18px] border-2 border-[#4400D1] text-white px-[24px] py-[10px] rounded-full  hover:bg-white hover:text-[#4400D1]"
    >
      {props.children}
      {icon && <p className="ml-[10px]">icon자리</p>}
    </button>
  );
}
