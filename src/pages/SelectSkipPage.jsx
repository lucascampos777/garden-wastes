import BottomNavbar from "@components/BottomNavbar";
import SkipCard from "@components/SkipCard";
import React, { useEffect, useState } from "react";
import { fetchSkips } from "src/api/skips";

export default function SelectSkipPage() {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(-1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchSkips()
      .then((data) => setSkips(data))
      .catch((error) => console.log("Error fetching skips: ", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-center text-white mt-8">
        Choose Your Skip Size
      </h1>
      <h3 className="text-lg text-center text-gray-400 mt-2 mb-10 max-w-md">
        Select the skip size that best suits your project needs.
      </h3>

      {loading ? (
        <div className="flex justify-center items-center h-60">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500 border-opacity-50"></div>
        </div>
      ) : (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4 ${selectedSkip >= 0 && "pb-40 sm:pb-10"}`}>
          {skips.map((skip, index) => (
            <SkipCard
              key={index}
              skip={skip}
              selectSkip={() => setSelectedSkip(index)}
              selected={selectedSkip === index}
            />
          ))}
        </div>
      )}

      <BottomNavbar
        selectedSkip={skips[selectedSkip]}
        onBack={() => {}}
        onContinue={() => {}}
      />
    </div>
  );
}

