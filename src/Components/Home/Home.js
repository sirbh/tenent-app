import { useSelector } from "react-redux";
import cssClasses from "./Home.module.scss";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const Home = () => {
  const products = useSelector((state) => state.products.products);
  const [productList, setProductList] = useState(products);
  const filterQuery = useSelector((state) => state.products.filterQuery);

  useEffect(() => {
    if (filterQuery === "") {
      setProductList(products);
      return;
    }
    setProductList(
      products.filter((prod) =>
        prod.productName.toLowerCase().includes(filterQuery.toLowerCase())
      )
    );
  }, [filterQuery, products]);

  return productList.length === 0 ? (
    <h1 style={{ marginTop: "30px" }}>No Product To Show</h1>
  ) : (
    <div className={cssClasses.Products}>
      {productList.map((prod) => {
        return <Card {...prod} key =  {prod.prodId} prodId = {prod.prodId}></Card>;
      })}
    </div>
  );
};

export default Home;
