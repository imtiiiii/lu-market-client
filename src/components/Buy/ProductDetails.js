import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';
const ProductDetails = () => {
  const { productId } = useParams();
  const [details, setDetails] = useState(null);
  const loadProduct = async () => {
    try {
      const req = await axios.get(`http://localhost:3333/product/get-buy-product-by-id/${productId}`)
      if (req.status === 200) {

        setDetails(req.data)
      }
    } catch (error) {
      console.log("🚀 ~ file: ProductDetails.js:13 ~ error:", error)
      setDetails(null)
    }
  }

  useEffect(() => {
    if (productId) loadProduct()
  }, [productId]);
  return (
    <div className="flex justify-center">
      <div className="card bg-base-700 shadow-xl w-96 md:w-1/3 my-16">
        <figure className="px-10 pt-10">
          <img
            src={`http://localhost:3333/uploads/${details?.image}`}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{details?.name}</h2>
          <p>{details?.description}</p>
          <h3>Price: {details?.price}</h3>
          {
            details?.category === 'shop' ? <h3>Edition: {details?.edition}</h3> : null
          }
          <p>Contact Information</p>
          <p>Owner name :{details?.product_owner?.name}</p>
          <p>Owner email :{details?.product_owner?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
