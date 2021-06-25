import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../Components/UIComponent/Input/Input";
import Button from "../../Components/UIComponent/Button/SimpleButton";
import {addProduct} from '../../Store/products'
import {hide} from '../../Store/modal'
import { useDispatch } from "react-redux";

const AddProduct = () => {

  const dispatch = useDispatch();
  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{
        productName: "",
        discription: "",
        price: "",
        quantity: "",
        image: "",
      }}
      validationSchema={Yup.object({
        productName: Yup.string().required("Required").required("Required"),
        price: Yup.number("not a number").test('IsPositve','Must be postive',(num)=>num>0).required("Required"),
        quantity: Yup.number("not a number").test('IsPositve','Must be postive',(num)=>num>0).required("Required"),
      })}
      onSubmit={(value) => {
         dispatch(addProduct({
             ...value
         }))
         dispatch(hide())
      }}
    >
      <Form noValidate>
        <Input
          name="productName"
          type="text"
          placeholder="Product Name"
        ></Input>
        <Input name="discription" type="text" placeholder="Discription"></Input>
        <Input name="price" type="number" placeholder="Price"></Input>
        <Input name="quantity" type="number" placeholder="Quantity"></Input>
        <Input name="image" type="text" placeholder="Add Img URL"></Input>
        <Button name="ADD"></Button>
      </Form>
    </Formik>
  );
};

export default AddProduct;
