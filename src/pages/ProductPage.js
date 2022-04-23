import React, { useState, useEffect } from "react";
import Nav from "../components/HomeNavbar/HomeNav";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productAction";
import Product from "../components/Product";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { tag } = useParams();
  const listProducts = useSelector((state) => state.listProducts);
  const { products } = listProducts;
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      <Nav open={open} setOpen={setOpen} show={show} setShow={setShow} />{" "}
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-3">
            {/* {products &&
              products.map(
                (product) =>
                  product.sub_category === tag && (
                    <div class="col">
                      <Product product={product} />
                    </div>
                  )
              )} */}
            {products &&
              products
                .filter((value) => value.sub_category == tag)
                .map((product) => (
                  <div class="col">
                    <Product product={product} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
