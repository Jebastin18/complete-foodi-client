import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const Booking = () => {
  const { user, loading } = useAuth();
  const token = localStorage.getItem("access_token");

  const { refetch, data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/reservations/user`, // Removed email from query
        {
          method: "GET", // Changed to POST method
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ email: user?.email }), // Send email in the body
        }
      );
      return res.json();
    },
  });

  // date format
  const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleString(); // You can adjust options as needed
  };

  console.log(bookings);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* banner */}
      <div className="bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="py-28 flex flex-col items-center justify-center">
          {/* content */}
          <div className="text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-gray-800">
              Track Your <span className="text-green">Bookings</span>
            </h2>
          </div>
        </div>
      </div>

      {/* table content */}
      <div>
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead className="bg-green text-white rounded-sm">
              <tr>
                <th>#</th>
                <th>Table Name</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {/* Display the populated table number */}
                  <td>{item.table?.tableNo}</td>
                  {/* Display the start time and end time */}
                  <td>{formatDate(item.timing?.start)}</td>
                  <td>{formatDate(item.timing?.end)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Booking;
