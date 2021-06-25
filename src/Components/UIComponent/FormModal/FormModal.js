import cssClasses from "./FormModal.module.scss";
import LoginForm from "../../Login/Login";
import AddProductForm from '../../AddProduct/AddProduct'
import EditProductForm from '../../EditProduct/EditProduct'
import { useSelector } from "react-redux";
const FormModal = (props) => {
  const formType = useSelector(state => state.modal.type)
  let heading;
  let form;
  switch(formType){
    case "login":
      heading = "Login";
      form = <LoginForm></LoginForm>
      break
    case "add-product":
      heading = "Add Product"
      form = <AddProductForm></AddProductForm>
      break
    default:
      heading = "Edit Product"
      form = <EditProductForm data = {formType}></EditProductForm>
      break
  }

  return (
    <div className={cssClasses.FormModal} onClick = {(e)=>{e.stopPropagation()}}>
      <div className={cssClasses.Head}>
        <h1>{heading}</h1>
      </div>
      <div className={cssClasses.Form}>
        {form}
      </div>
    </div>
  );
};

export default FormModal;
