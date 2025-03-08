import api from "../../utils/api"
import React, { useEffect, useState } from "react";

const ViewRewards = () => {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const fetchRewards = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return;

      try {
        const response = await api.get(`/employee/rewards/${user.employeeId}`);
        setRewards(response.data);
      } catch (error) {
        console.error("Error fetching rewards:", error);
      }
    };
    fetchRewards();
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">My Rewards</h2>
      <div className="bg-white p-6 rounded shadow-md">
        {rewards.length === 0 ? (
          <p>No rewards assigned yet.</p>
        ) : (
          <ul className="list-disc pl-5">
            {rewards.map((reward, index) => (
              <li key={index} className="mb-2">{reward.reward}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ViewRewards;
