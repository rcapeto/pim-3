import { ForwardRefRenderFunction, forwardRef } from "react";

interface InputProps {
   label: string;
   labelId: string;
   type?: 'date' | 'text' | 'email';
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, labelId, type = 'text' }, ref) => {
   return(
      <div className="input-block">
         <label htmlFor={labelId}>{label}</label>
         <input
            id={labelId}
            name={labelId}
            ref={ref}
            type={type}
         />
      </div>
   );
};

export default forwardRef(Input);