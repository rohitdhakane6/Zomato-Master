import React from "react";
import { BsShieldLockFill } from "react-icons/bs";
import useRazorpay from "react-razorpay";

// components
import FoodItem from "../components/cart/FoodItem";
import AddressList from "../components/Checkout/AddressList.jsx";
import { useSelector } from "react-redux";

function CheckoutPage() {
  const address = [
    {
      name: "Home",
      address: "123 Main St",
    },
    {
      name: "Work",
      address: "123 Main St",
    },
    {
      name: "Other",
      address: "123 Main St",
    },
  ];
  const foods = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user?.user?.user);
  console.log(user);
  //   {
  //     "email": "rohitdhakane6@gmail.com",
  //     "fullName": "Rohit Dhakane",
  //     "address": {}
  // }

  const [Razorpay] = useRazorpay();

  const handlePayment = async (params) => {
    const options = {
      key: "rzp_test_AapC3GhwdWLRPJ", // Enter the Key ID generated from the Dashboard
      amount:
        foods
          .map((item) => item.totalPrice * item.quantity)
          .reduce((total, num) => total + num, 0) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Zomato master",
      description: "Food Order",
      image:
        "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
      handler: function (response) {
        console.log(response);
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: user.fullName,
        email: user.email,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#e01d19",
      },
    };

    const rzp1 = new Razorpay(options);

    // rzp1.on("payment.failed", function (response) {
    //   alert(response.error.code);
    //   alert(response.error.description);
    //   alert(response.error.source);
    //   alert(response.error.step);
    //   alert(response.error.reason);
    //   alert(response.error.metadata.order_id);
    //   alert(response.error.metadata.payment_id);
    // });

    rzp1.open();
  };

  return (
    <div className="my-3 flex flex-col gap-3 items-center">
      <h1 className="text-xl text-center md:text-2xl font-bold">Checkout</h1>
      <div className="w-full md:w-3/5 rounded-lg py-3 shadow-lg bg-white flex flex-col items-center">
        <h3 className="text-lg font-semibold">Summary</h3>
        <div className="flex w-full flex-col gap-2 items-center">
          <h5 className="text-base tracking-wider">ORDER FROM</h5>
          <div className="flex w-full flex-col items-center text-gray-400">
            <h4>Domino's Pizza</h4>
            <small>GT Woorld Mall, Magadi Road, NCR Noida</small>
          </div>
          <div className="my-4 h-32 overflow-y-scroll px-4 flex flex-col gap-2 w-full md:w-3/5">
            {foods.map((food) => (
              <FoodItem key={food._id} {...food} />
            ))}
          </div>
          <div className="flex flex-col gap-3 w-full md:w-3/5 items-center">
            <h4 className="text-xl font-semibold">Choose Address</h4>
            <AddressList address={address} />
          </div>
        </div>
        <button
          onClick={handlePayment}
          className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg"
        >
          Pay Securely <BsShieldLockFill />
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
