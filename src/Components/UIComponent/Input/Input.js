import { useField } from "formik";
import cssClasses from './Input.module.scss'

const Input = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <div className = {cssClasses.Input}>
      <input
        placeholder={props.placeholder}
        type={props.type}
        {...field}
      ></input>
      <p style = {{height:'20px'}}>{meta.error ?"* "+ meta.error : "     "}</p>
    </div>
  );
};

export default Input;
