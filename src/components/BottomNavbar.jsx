export default function BottomNavbar({ selectedSkip, onBack, onContinue }) {
  if (!selectedSkip) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-mydark-1 border-t border-zinc-700 text-white p-4 shadow-inner">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto gap-4 sm:gap-0">
        <div className="flex flex-row items-center gap-2 text-sm text-center sm:text-left justify-between w-full sm:w-80 sm:justify-start">
          <span className="text-gray-400">{selectedSkip.size} Yard Skip</span>
          <div className="flex items-end gap-1">
            <span className="text-blue-700 font-bold text-2xl">
              £{selectedSkip.price_before_vat - selectedSkip.vat}
            </span>
            <span className="text-gray-400 hidden sm:block">{selectedSkip.hire_period_days} day hire</span>
            <span className="text-gray-400 block sm:hidden">{selectedSkip.hire_period_days} days</span>
          </div>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={onBack}
            className="w-full sm:w-auto bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded transition duration-300"
          >
            Back
          </button>
          <button
            onClick={onContinue}
            className="w-full sm:w-auto bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
