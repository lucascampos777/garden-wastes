import React from "react";
import { MdWarning } from "react-icons/md"

export default function SkipCard({ skip, selected, selectSkip }) {
    const { size, hire_period_days, price_before_vat, vat, allowed_on_road, allows_heavy_waste } = skip;
    const disabled = !allowed_on_road || !allows_heavy_waste;

    return (
        <div
            className={`bg-mydark-1 border ${!selected ? "border-gray-700" : "border-blue-700"} rounded-lg px-7 py-5 flex flex-col items-left ${!disabled ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`}
            onClick={disabled ? null : selectSkip}>
            <div className="relative w-full">
                <img src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${size}-yarder-skip.jpg`}
                    alt={`${size} Yard Skip`}
                    className={`rounded-md h-36 md:h-48 w-full object-cover`}
                />
                <span className="absolute top-2 right-2 bg-blue-800 text-white px-3 py-1 text-sm rounded-full">{size} Yards</span>
                <div className="absolute left-2 bottom-2 mt-4 space-y-2 text-sm">
                    {!allowed_on_road && (
                        <div className="flex items-center text-yellow-400 bg-black rounded-md px-2 py-1 gap-1">
                            <MdWarning /> Not Allowed On The Road
                        </div>
                    )}
                    {!allows_heavy_waste && (
                        <div className="flex items-center text-red-400 bg-black rounded-md px-2 py-1 gap-1">
                            <MdWarning /> Not Suitable for Heavy Waste
                        </div>
                    )}
                </div>
            </div>
            <h2 className="text-2xl font-semibold mt-4 text-white">{size} Yard Skip</h2>
            <p className="text-gray-400 mb-2 text-sm my-1">{hire_period_days} day hire period</p>
            <span className="mt-2">
                <p className="text-blue-700 font-bold text-2xl mb-4">£{price_before_vat - vat}</p>
                {!selected ?
                    <button className={`bg-mydark-2 hover:bg-gray-300 transition-all duration-300 px-4 py-2 rounded text-white w-full text-lg ${!disabled ? "cursor-pointer" : "cursor-not-allowed"}`} onClick={selectSkip} disabled={disabled}>
                        Select This Skip →</button> :
                    <button className={`bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded text-white w-full text-lg ${!disabled ? "cursor-pointer" : "cursor-not-allowed"}`}>Selected</button>
                }
            </span>
        </div>
    );
}