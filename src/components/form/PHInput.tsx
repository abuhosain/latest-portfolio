"use client";
 
import { useFormContext } from "react-hook-form";
import { IInput } from "../../types";
 
import { Input } from "@nextui-org/input";

interface IProps extends IInput {}

export default function PHInput({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors ? (errors[name]?.message as string) : ""; // Get the error message for the specific field
  const isInvalid = !!errorMessage; // Check if there's an error
  return (
    <Input
      {...register(name)}
      errorMessage={errorMessage}
      isInvalid={isInvalid}
      placeholder={label}
      required={required}
      size={size}
      type={type}
      variant={variant}
      className="border rounded-md px-3 py-2"
    />
  );
}
