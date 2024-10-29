import React, { useEffect, useState } from "react";
import newRequest from "../../hooks/new-request";

const TableStatus = () => {
  const [tables, setTables] = useState([]);

  // Fetch tables when the component mounts
  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await newRequest.get("http://localhost:5000/tables", {
          withCredentials: true,
        });
        setTables(response.data);
      } catch (error) {
        console.error("Error fetching tables:", error);
      }
    };
    fetchTables();
  }, []);

  console.log(tables);

  return (
    <div className="container py-16 mt-32 mx-auto p-6 bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC] rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-8">Table Status</h1>

      {/* Create a grid with 3 columns */}
      <div className="grid grid-cols-3 gap-4">
        {tables.map((table, index) => (
          <div
            key={table._id}
            // Conditionally set the background color: green for booked, white for available
            className={`h-32 w-32 flex items-center justify-center rounded-md shadow-lg text-lg font-bold ${
              table.isAvailable
                ? "bg-green text-white" // Green for booked tables
                : "bg-white border border-gray-300 text-gray-800" // White for available tables
            }`}
          >
            Table {table.tableNo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableStatus;
