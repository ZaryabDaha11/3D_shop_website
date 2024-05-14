import React, { useState } from "react";
import TextInputComponent from "./TextInputComponent";
import axios from "axios";
import state from "../../store";
import { useSnapshot } from "valtio";
export default function Modal(props) {
  const snap = useSnapshot(state);

  const [noOfProducts, setNoOfProducts] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  return (
    <div className="static">
      <div className="fixed h-screen w-screen bg-black z-10 top-0 opacity-75"></div>
      <div className="fixed top-0 right-0 left-0 z-20 flex justify-center">
        <div className="mx-4 my-4 bg-white  ">
          <div className="flex justify-end">
            <button
              className="border-2 text-red-900 px-2 m-2"
              onClick={props?.setIsVisible}
            >
              X
            </button>
          </div>
          <div className=" bg-white ">
            <TextInputComponent
              title="Name:"
              placeholder="Enter name here"
              value={customerName}
              onChangeText={(text) => setCustomerName(text.target.value)}
            />
            <TextInputComponent
              title="Phone:"
              placeholder="Enter phone here"
              value={customerPhone}
              onChangeText={(text) => setCustomerPhone(text.target.value)}
            />
            <TextInputComponent
              title="Address:"
              placeholder="Enter address here"
              value={customerAddress}
              onChangeText={(text) => setCustomerAddress(text.target.value)}
            />
            <div className=" flex justify-around items-center px-2 py-1 mt-5">
              <button
                className="border-2 px-2"
                onClick={() => setNoOfProducts(noOfProducts - 1)}
              >
                -
              </button>
              <div className="font-bold font-mono text-xl text-red-700">
                Quantity: {noOfProducts}
              </div>
              <button
                className="border-2 px-2"
                onClick={() => setNoOfProducts(noOfProducts + 1)}
              >
                +
              </button>
            </div>
            <div className="flex justify-around items-center px-2 py-1">
              <button
                className="border-2 px-2 py-1 rounded bg-green-500 text-white font-bold font-mono text-lg"
                onClick={() => {
                  if (noOfProducts <= 0 || customerPhone == '' || customerAddress == '' || customerName == '') {
                    return alert(
                      "Please Provide All The Information Correctly!"
                    );
                  }

                  axios.post("http://localhost:3000/placeOrder", {
                    customer_name: customerName,
                    customer_phone: customerPhone,
                    customer_address: customerAddress,
                    customer_product: {
                      product_color: snap.color,
                      product_logo: snap.logoDecal,
                      product_texture: snap.fullDecal,
                      no_of_products: noOfProducts,
                    },
                  }).then(() => {
                    alert('Order Placed Successfully!')
                    setCustomerName('')
                    setCustomerPhone('')
                    setCustomerAddress('')
                    setNoOfProducts(1)
                    props.setIsVisible
                  }
                  ).catch((e) => {
                    alert(e);
                  });
                }}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
