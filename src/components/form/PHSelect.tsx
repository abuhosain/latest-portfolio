import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";
import { IInput } from "../../types";
 
interface IProps extends IInput {
  options: {
    key: string;
    label: string;
  }[];

}
export default function PHSelect({
  options,
  name,
  label,
  variant = "bordered",
  disabled
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Select
      {...register(name)}
      className="min-w-full sm:min-w-[225px] border rounded-md"
      isDisabled={disabled}
      label={label}
      variant={variant}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
}
