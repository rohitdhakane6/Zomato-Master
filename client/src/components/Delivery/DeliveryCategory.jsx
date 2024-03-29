import React from "react";

function DeliverySmCard({ image, title }) {
  return (
    <>
      <div className="lg:hidden bg-white shadow rounded-md w-24 md:w-56">
        <div className="w-full h-24">
          <img
            className="w-full h-full object-cover object-center rounded-t-md"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className="text-sm my-1 text-center font-light">{title}</h3>
        </div>
      </div>
    </>
  );
}

function DeliveryLgCard({ image, title }) {
  return (
    <>
      <div className="hidden lg:block  px-9 ">
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover object-center rounded-full"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className="text-xl my-1 text-center font-semibold text-gray-600">{title}</h3>
        </div>
      </div>
    </>
  );
}

function DeliveryCategory(props) {
  return (
    <>
      <DeliverySmCard {...props} />
      <DeliveryLgCard {...props} />
    </>
  );
}

export default DeliveryCategory;