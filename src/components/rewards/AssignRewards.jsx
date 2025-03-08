import api from "../../utils/api"
import React, { useEffect, useState } from "react";

const AssignRewards = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [reward, setReward] = useState("");

  // Fetch Employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await api.get("/employee");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

  // Handle Reward Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedEmployee || !reward) {
      alert("Please select an employee and enter a reward!");
      return;
    }
    
    try {
      await api.post("/admin/rewards", {
        employeeId: selectedEmployee,
        reward,
      });
      alert("Reward assigned successfully!");
      setSelectedEmployee("");
      setReward("");
    } catch (error) {
      console.error("Error assigning reward:", error);
      alert("Failed to assign reward.");
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Assign Rewards</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div>
          <label className="block mb-2">Select Employee:</label>
          <select
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
            className="p-2 border rounded w-full"
            required
          >
            <option value="">Choose an Employee</option>
            {employees.map((emp) => (
              <option key={emp._id} value={emp.employeeId}>
                {emp.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mt-4 mb-2">Reward:</label>
          <input
            type="text"
            value={reward}
            onChange={(e) => setReward(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Enter reward title"
            required
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
          Assign Reward
        </button>
      </form>
    </div>
  );
};

export default AssignRewards;
