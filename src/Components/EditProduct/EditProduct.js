import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../Components/UIComponent/Input/Input";
import Button from "../../Components/UIComponent/Button/SimpleButton";
import {editProduct} from '../../Store/products'
import {hide} from '../../Store/modal'
import { useDispatch, useSelector } from "react-redux";

const EditProduct = (props) => {

  const dispatch = useDispatch();
  const products = useSelector(state=>state.products.products)
  const id = products.findIndex(ele=>ele.prodId===props.data);
  const product = products[id];

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{
        productName: product.productName,
        discription: product.discription,
        price: product.price,
        quantity: product.quantity,
        image: product.image,
      }}
      validationSchema={Yup.object({
        productName: Yup.string().required("Required").required("Required"),
        price: Yup.number("not a number").test('IsPositve','Must be postive',(num)=>num>0).required("Required"),
        quantity: Yup.number("not a number").test('IsPositve','Must be postive',(num)=>num>0).required("Required"),
      })}
      onSubmit={(value) => {
         dispatch(editProduct({...value,prodId:props.data}))
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
        <Button name="EDIT"></Button>
      </Form>
    </Formik>
  );
};

export default EditProduct;
