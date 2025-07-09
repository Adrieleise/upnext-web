import * as React from "react";

export function Select({ children }: { children: React.ReactNode }) {
  return <div className="relative">{children}</div>;
}

export function SelectTrigger({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-gray-300 px-3 py-2 rounded cursor-pointer bg-white">
      {children}
    </div>
  );
}

export function SelectValue({ placeholder }: { placeholder: string }) {
  return <span className="text-gray-400">{placeholder}</span>;
}

export function SelectContent({ children }: { children: React.ReactNode }) {
  return <ul className="mt-2 border border-gray-300 rounded shadow bg-white">{children}</ul>;
}

export function SelectItem({
  value,
  children,
  onClick,
}: {
  value: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <li
      onClick={onClick}
      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
    >
      {children}
    </li>
  );
}