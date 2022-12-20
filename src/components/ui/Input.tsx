import { RefObject, ChangeEvent } from "react";

interface InputProps<T> {
  hidden?: boolean;
  placeholder?: string;
  transform?: (value: string) => T;
  innerRef: RefObject<HTMLInputElement>;
  icon?: () => JSX.Element;
  className?: string;
}

export default function Input<T = string>({
  hidden = false,
  placeholder,
  transform,
  innerRef,
  icon,
  className,
}: InputProps<T>) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (transform) {
      e.target.value = transform(e.target.value) as any;
    }
  };

  return (
    <div className={`w-full flex items-center gap-2 border-semilight border py-2 px-3 rounded-xl ${className}`}>
      {icon ? icon() : null}
      <input
        className="w-full outline-none font-normal"
        type={hidden ? "password" : "text"}
        placeholder={placeholder}
        ref={innerRef}
        onChange={onChange}
      />
    </div>
  );
}
