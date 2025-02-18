import { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
    type: string,
    id: string,
    label: string
}

const Input = ({ type, id, label, ...props }: InputProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
        <label className="px-4 py-2 bg-neutral-200 font-bold marrom text-xl rounded-lg" htmlFor={id}>
            {label}
        </label>
        <input 
            className="border-none font-mono text-lg px-4 py-2 bg-neutral-200 rounded-lg" 
            type={type} 
            id={id} 
            name={id} 
            {...props}
        />
    </div>
  )
}

export default Input;