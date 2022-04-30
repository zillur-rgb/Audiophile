import React, { useState } from "react";
import { GiCardExchange } from "react-icons/gi";
const BillingForm = () => {
  const [radioValue, setRadioValue] = useState("e-money");

  return (
    <div className="w-4/5">
      <div className="billing my-4">
        <p className="text-orange font-medium tracking-wide text-md uppercase mb-4">
          Billing Details
        </p>
        <div className="flex flex-wrap gap-8">
          <div className="form-group w-2/5">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Alexa Bliss"
              className="w-full p-3 mt-3 rounded-md border-2 border-lightGray focus:outline-orange-light"
            />
          </div>
          <div className="form-group w-2/5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="alexa@missbliss.com"
              className="w-full  mt-3 p-3 rounded-md  border-2 border-lightGray focus:outline-orange-light"
            />
          </div>

          <div className="form-group w-2/5">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="+49-1111-0000000"
              className="w-full p-3 mt-3 rounded-md border-2 border-lightGray focus:outline-orange-light"
            />
          </div>
        </div>
      </div>
      <div className="shipping my-8">
        <p className="text-orange font-medium tracking-wide text-md uppercase mb-4">
          Shipping Info
        </p>
        <div className="flex flex-wrap gap-8">
          <div className="form-group w-5/6">
            <label htmlFor="address">Your Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Karl-Max Str 32"
              className="w-full p-3 mt-3 rounded-md border-2 border-lightGray focus:outline-orange-light"
            />
          </div>
          <div className="form-group w-2/5">
            <label htmlFor="zip">ZIP Code</label>
            <input
              type="number"
              name="zip"
              id="zip"
              placeholder="11111"
              className="w-full  mt-3 p-3 rounded-md  border-2 border-lightGray focus:outline-orange-light"
            />
          </div>

          <div className="form-group w-2/5">
            <label htmlFor="phone">City</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="München"
              className="w-full p-3 mt-3 rounded-md border-2 border-lightGray focus:outline-orange-light"
            />
          </div>
        </div>
      </div>

      <div className="billing my-4">
        <p className="text-orange font-medium tracking-wide text-md uppercase mb-4">
          Payment Details
        </p>
        <div className="flex flex-wrap gap-8">
          <div className="form-group w-2/5 flex justify-between">
            <p>Payment Method</p>
            <div>
              <div className="border-2 border-lightGray py-4 pl-3 pr-16 mb-4 flex items-center  rounded-md">
                <input
                  type="radio"
                  name="radio"
                  id="e-money"
                  className="w-6 h-6 mr-4 outline-orange"
                  value="e-money"
                  checked={radioValue === "e-money"}
                  onChange={({ target }) => setRadioValue(target.value)}
                />{" "}
                e-money
                <label htmlFor="e-money"></label>
              </div>
              <div className="border-2 border-lightGray py-4 pl-3 pr-16 mt-4 flex items-center rounded-md">
                <input
                  type="radio"
                  name="radio"
                  id="radio"
                  className="w-6 h-6 mr-4 outline-orange"
                  value="cash"
                  checked={radioValue === "cash"}
                  onChange={({ target }) => setRadioValue(target.value)}
                />
                <label htmlFor="cash" className=" whitespace-nowrap">
                  {" "}
                  Cash on Delivery
                </label>
              </div>
            </div>
          </div>
          {radioValue === "e-money" && (
            <div className="w-full flex gap-8">
              <div className="form-group w-2/5">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="+49-1111-0000000"
                  className="w-full p-3 mt-3 rounded-md border-2 border-lightGray focus:outline-orange-light"
                />
              </div>
              <div className="form-group w-2/5">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="+49-1111-0000000"
                  className="w-full p-3 mt-3 rounded-md border-2 border-lightGray focus:outline-orange-light"
                />
              </div>
            </div>
          )}
          {radioValue === "cash" && (
            <div className="w-3/5 flex items-center">
              <GiCardExchange className=" text-9xl mr-4 text-orange" />
              <p className="text-text-black font-light">
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillingForm;
