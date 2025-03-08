import api from "../../utils/api"
import React, { useEffect, useState } from 'react'

const SalaryHistory = () => {
    const [salaries, setSalaries] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() => {
      const fetchSalaries = async () => {
        try {
          const response = await api.get("/admin/salaries");
          setSalaries(response.data);
        } catch (error) {
          console.error("Error fetching salaries:", error);
        }
      };
      fetchSalaries();
    }, []);
  
    // Filter salaries based on search term (Employee ID)
    const filteredSalaries = salaries.filter((salary) =>
      salary.employeeId.includes(searchTerm)
    );
  return (
    <div className="overflow-x-auto p-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Salary History</h2>
      </div>
      <div className="flex justify-end my-3">
        <input
          type="text"
          placeholder="Search by employee ID"
          className="border px-2 rounded-md py-0.5 border-gray-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border border-gray-200">
          <tr>
            <th className="px-6 py-3">Sl No</th>
            <th className="px-6 py-3">Emp ID</th>
            <th className="px-6 py-3">Department</th>
            <th className="px-6 py-3">Basic Salary</th>
            <th className="px-6 py-3">Pay Date</th>
          </tr>
        </thead>

        <tbody>
          {filteredSalaries.map((salary, index) => (
            <tr key={salary._id} className="bg-white border-b">
              <td className="px-6 py-3">{index + 1}</td>
              <td className="px-6 py-3">{salary.employeeId}</td>
              <td className="px-6 py-3">{salary.department}</td>
              <td className="px-6 py-3">{salary.basicSalary}</td>
              <td className="px-6 py-3">{new Date(salary.payDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SalaryHistory