import React from "react";

interface CustomInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  name?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  style = {},
  id,
  name
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border p-2 rounded-md ${className}`}
      style={style}
    />
  );
};

export default CustomInput;
