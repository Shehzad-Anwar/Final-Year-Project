import React from "react";
import CartSummary from "../components/checkout/CartSummary";
import CheckoutFrom from "../components/checkout/CheckoutFrom";
import PaymentInfo from "../components/checkout/PaymentInfo";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

const checkout = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-28">
          <CheckoutFrom />
          <CartSummary />
          <PaymentInfo />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default checkout;
