import * as React from "react";

export function Select({
  children,
  onValueChange,
}: {
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
}) {
  return (
    <div className="relative">
      {React.Children.map(children, (child) => {
        if (
          React.isValidElement(child) &&
          child.type === SelectContent
        ) {
          // Only pass onValueChange into SelectContent so it can handle it
          return React.cloneElement(child, { onValueChange });
        }
        return child;
      })}
    </div>
  );
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

export function SelectContent({
  children,
  onValueChange,
}: {
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
}) {
  return (
    <ul className="mt-2 border border-gray-300 rounded shadow bg-white">
      {React.Children.map(children, (child) => {
        if (
          React.isValidElement(child) &&
          child.type === SelectItem
        ) {
          return React.cloneElement(child, { onValueChange });
        }
        return child;
      })}
    </ul>
  );
}

export function SelectItem({
  value,
  children,
  onClick,
  onValueChange,
}: {
  value: string;
  children: React.ReactNode;
  onClick?: () => void;
  onValueChange?: (value: string) => void;
}) {
  const handleClick = () => {
    onValueChange?.(value);
    onClick?.();
  };

  return (
    <li
      onClick={handleClick}
      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
    >
      {children}
    </li>
  );
}