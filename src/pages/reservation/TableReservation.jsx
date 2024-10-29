import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import newRequest from "../../hooks/new-request";

const TableReservation = () => {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState("");
  const [reservationTime, setReservationTime] = useState({
    start: "",
    end: "",
  });
  const [toast, setToast] = useState({ message: "", isVisible: false });
  const { user } = useContext(AuthContext);

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

  // Handle reservation submission
  const handleReservation = async () => {
    if (!selectedTable || !reservationTime.start || !reservationTime.end) {
      showToast("Please select a table and reservation time.");
      return;
    }

    try {
      const reservationData = {
        table: selectedTable,
        timing: {
          start: reservationTime.start,
          end: reservationTime.end,
        },
        reservedBy: user.email,
        price: 100,
      };

      await newRequest.post("/reservations", reservationData);
      showToast("Table reserved successfully!", "success");
    } catch (error) {
      console.error("Error making reservation:", error);
      showToast("Failed to reserve the table.");
    }
  };

  // Function to show toast
  const showToast = (message, type = "error") => {
    setToast({ message, isVisible: true });
    setTimeout(() => {
      setToast({ message: "", isVisible: false });
    }, 3000); // Toast will disappear after 3 seconds
  };

  return (
    <div className="container py-16 mt-32 mx-auto p-6 bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC] rounded-lg shadow-md">
      <h1 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-gray-800">
        Reserve Your <span className="text-green">Table</span>
      </h1>
      <div className="mb-4">
        <label className="label">
          <span className="label-text">Select a Table:</span>
        </label>
        <select
          onChange={(e) => setSelectedTable(e.target.value)}
          value={selectedTable}
          className="select select-bordered w-full"
        >
          <option value="">--Select a Table--</option>
          {tables.length > 0 ? (
            tables.map((table) => (
              <option key={table._id} value={table._id}>
                Table {table.tableNo}
              </option>
            ))
          ) : (
            <option value="">Loading tables...</option>
          )}
        </select>
      </div>

      <div className="mb-4">
        <label className="label">
          <span className="label-text">Start Time:</span>
        </label>
        <input
          type="datetime-local"
          value={reservationTime.start}
          onChange={(e) =>
            setReservationTime({ ...reservationTime, start: e.target.value })
          }
          className="input input-bordered w-full"
        />
      </div>

      <div className="mb-4">
        <label className="label">
          <span className="label-text">End Time:</span>
        </label>
        <input
          type="datetime-local"
          value={reservationTime.end}
          onChange={(e) =>
            setReservationTime({ ...reservationTime, end: e.target.value })
          }
          className="input input-bordered w-full"
        />
      </div>

      <button
        onClick={handleReservation}
        className="btn bg-green text-white hover:bg-green/70 w-full"
      >
        Reserve
      </button>

      {/* Toast Notification */}
      {toast.isVisible && (
        <div className={`toast toast-${toast.type} mt-4`}>
          <div className="toast-message">{toast.message}</div>
        </div>
      )}
    </div>
  );
};

export default TableReservation;
