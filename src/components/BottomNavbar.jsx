export default function BottomNavbar({ selectedSkip, onBack, onContinue }) {
  if (!selectedSkip) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-mydark-2 backdrop-blur border-t border-zinc-700 text-white p-4 shadow-2xl z-50">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto gap-4 sm:gap-0 px-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span className="text-gray-400">{selectedSkip.size} Yard Skip</span>
          <div className="flex items-end gap-1">
            <span className="text-purple-500 font-bold text-2xl">
              £{selectedSkip.price_before_vat - selectedSkip.vat}
            </span>
            <span className="text-gray-400 hidden sm:block">
              {selectedSkip.hire_period_days} day hire
            </span>
            <span className="text-gray-400 block sm:hidden">
              {selectedSkip.hire_period_days} days
            </span>
          </div>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={onBack}
            className="w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-xl transition-all duration-300 cursor-pointer"
          >
            Back
          </button>
          <button
            onClick={onContinue}
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl transition-all duration-300 shadow-md cursor-pointer"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
