import React, { useState } from "react";
import EmptyBasket from "./EmptyBasket"; // Assuming you have an EmptyBasket component
import BasketStep2 from "./BasketStep2"; // Assuming you have a BasketStep2 component

function BasketManager() {
  const [activeStep, setActiveStep] = useState("EmptyBasket");

  return (
    <div>
      {activeStep === "EmptyBasket" && (
        <EmptyBasket setActiveStep={setActiveStep} />
      )}
      {activeStep === "Basket Step 2" && <BasketStep2 />}
    </div>
  );
}

export default BasketManager;
