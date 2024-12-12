import React, { useState } from "react";

const Scheduler = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const days = ["SAT", "SUN", "MON", "TUE", "WED", "THUR", "FRI"];

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div className="bg-gray-300 w-full h-screen flex justify-center items-center">
      <div className="bg-gray-100 text-black p-6 rounded-lg shadow-md w-80">
        <h1 className="text-lg font-semibold text-center mb-4">class scheduler</h1>
        <div className="border-t border-black mb-4"></div>
        <div className="mb-4">
          <button className="w-full py-2 bg-white text-black rounded-lg border">select student</button>
        </div>
        <p className="text-center font-medium mb-2">select the days you like to take class</p>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {days.map((day) => (
            <button
              key={day}
              className={`py-2 px-3 font-semibold rounded ${
                selectedDays.includes(day) ? "bg-green-500 text-white" : "bg-white text-black border"
              }`}
              onClick={() => toggleDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="flex justify-between mb-4">
          <button className="py-2 px-4 bg-white text-black border rounded">Start Date</button>
          <button className="py-2 px-4 bg-white text-black border rounded">Finish Date</button>
        </div>
        <div className="text-center">
          <button className="py-2 px-6 bg-green-500 text-white font-semibold rounded">Generate</button>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
