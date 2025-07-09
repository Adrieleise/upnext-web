import * as React from "react";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`border border-gray-300 px-3 py-2 rounded w-full ${className || ""}`}
      {...props}
    />
  );
}