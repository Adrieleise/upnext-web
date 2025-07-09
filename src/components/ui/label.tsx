import * as React from "react";

export function Label({ children, className }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={`block text-sm font-medium text-gray-700 ${className || ""}`}>
      {children}
    </label>
  );
}