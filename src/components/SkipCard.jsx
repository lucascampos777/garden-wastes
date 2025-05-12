import React from "react";
import { MdWarning } from "react-icons/md";

export default function SkipCard({ skip, selected, selectSkip }) {
  const { size, hire_period_days, price_before_vat, vat, allowed_on_road, allows_heavy_waste } = skip;
  const disabled = !allowed_on_road || !allows_heavy_waste;

  return (
    <div
      className={`bg-mydark-2 border ${
        selected ? "border-purple-600" : "border-gray-700"
      } rounded-2xl px-6 py-5 shadow-lg transform transition-transform duration-300 ${
        !disabled ? "hover:scale-105 cursor-pointer" : "cursor-not-allowed opacity-50"
      }`}
      onClick={disabled ? null : selectSkip}
    >
      <div className="relative w-full">
        <img
          src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${size}-yarder-skip.jpg`}
          alt={`${size} Yard Skip`}
          className="rounded-xl h-40 md:h-56 w-full object-cover"
        />
        <span className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 text-xs rounded-full shadow-md">
          {size} Yards
        </span>
      </div>

      <h2 className="text-2xl font-semibold mt-5 text-white">{size} Yard Skip</h2>
      <p className="text-gray-400 text-sm mb-3">{hire_period_days} day hire period</p>
      <p className="text-purple-500 font-bold text-2xl mb-5">£{price_before_vat - vat}</p>

      <button
        className={`w-full py-2 rounded-xl text-lg transition-all duration-300 ${
          selected
            ? "bg-purple-600 hover:bg-purple-700 text-white"
            : "bg-mydark-3 hover:bg-gray-700 text-white"
        } ${!disabled ? "cursor-pointer" : "cursor-not-allowed"}`}
        onClick={selectSkip}
        disabled={disabled}
      >
        {selected ? "Selected" : "Select This Skip →"}
      </button>
    </div>
  );
}
