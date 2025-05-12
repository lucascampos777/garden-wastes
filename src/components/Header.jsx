import React, { useState } from "react";
import { FaMapMarkerAlt, FaTrash, FaTruck, FaRegCheckCircle, FaCalendarAlt, FaCreditCard, FaShieldAlt } from "react-icons/fa";

export default function Header() {
    const steps = [
        { name: "Postcode", icon: <FaMapMarkerAlt size={20} /> },
        { name: "Waste Type", icon: <FaTrash size={20} /> },
        { name: "Select Skip", icon: <FaTruck size={20} /> },
        { name: "Permit Check", icon: <FaShieldAlt size={20} /> },
        { name: "Choose Date", icon: <FaCalendarAlt size={20} /> },
        { name: "Payment", icon: <FaCreditCard size={20} /> },
    ];

    const [currentStep, setCurrentStep] = useState(2);

    return (
        <header>
            <div className="flex justify-center gap-4 text-gray-400 mb-8 items-center overflow-x-auto whitespace-nowrap">
                {steps.map((step, index) =>
                    <React.Fragment key={index}>
                        <div className="flex items-center gap-2 cursor-pointer shrink-0" onClick={() => setCurrentStep(index)}>
                            <span className={currentStep >= index ? "text-blue-700" : "text-gray-400"}>{step.icon}</span>
                            <span className={`${currentStep >= index ? "text-white" : "text-gray-400"} text-lg`}>{step.name}</span>
                        </div>
                        {index < steps.length - 1 && <span className={`w-16 h-px ${currentStep > index ? "bg-blue-700" : "bg-gray-400"} mx-2`}></span>}
                    </React.Fragment>
                )}
            </div>
        </header>
    );
}