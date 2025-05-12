import React, { useState } from "react";
import { FaMapMarkerAlt, FaTrash, FaTruck, FaShieldAlt, FaCalendarAlt, FaCreditCard } from "react-icons/fa";

export default function Header() {
  const steps = [
    { name: "Postcode", icon: FaMapMarkerAlt },
    { name: "Waste Type", icon: FaTrash },
    { name: "Select Skip", icon: FaTruck },
    { name: "Permit Check", icon: FaShieldAlt },
    { name: "Choose Date", icon: FaCalendarAlt },
    { name: "Payment", icon: FaCreditCard },
  ];

  const [currentStep, setCurrentStep] = useState(2);

  return (
    <header className="w-full py-4 sticky top-0 bg-mydark-1 backdrop-blur z-50 shadow-md overflow-x-auto scrollbar-custom ">
      <div className="flex gap-2 sm:gap-3 md:gap-4 px-6 items-center justify-center whitespace-nowrap">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = currentStep >= index;

          return (
            <React.Fragment key={index}>
              <div
                onClick={() => setCurrentStep(index)}
                className="flex flex-col items-center cursor-pointer shrink-0"
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    isActive ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-400"
                  } transition-colors duration-300`}
                >
                  <Icon size={20} />
                </div>
                <span
                  className={`mt-2 text-sm ${
                    isActive ? "text-white font-semibold" : "text-gray-400"
                  }`}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`${index >= currentStep ? "bg-gray-700" : "bg-purple-600"} w-20 h-1 rounded-full mx-2`}></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </header>
  );
}
