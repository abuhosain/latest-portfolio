import { Textarea } from "@nextui-org/input";
import { useFormContext, useWatch } from "react-hook-form";
import { IInput } from "../../types";

interface IProps extends IInput {
  type?: string;
}

export default function PHTextarea({
  name,
  label,
  variant = "bordered",
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const currentValue = useWatch({ name });
  return (
    <Textarea
      {...register(name)}
      label={label}
      minRows={6}
      value={currentValue || ""}
      variant={variant}
      className="border rounded-md px-3 py-2"
    />
  );
}
