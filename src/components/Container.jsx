import React from "react";

export default function Container({ children, className }) {
  return (
    <div className={`px-2 md:px-14 w-full max-w-[1440px] m-auto ${className}`}>
      {children}
    </div>
  );
}
