
import React, { useEffect, useState } from 'react';
import api from "../../utils/api";

const View = () => {
  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    const fetchSalaries = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return;

      console.log(`Querying salary for Employee ID: ${user.employeeId}`);

      try {
        const response = await api.get(`/salary/${user.employeeId}`);
        console.log("Fetched Salaries:", response.data);
        setSalaries(response.data);
      } catch (error) {
        console.error("Error fetching salary history:", error);
      }
    };
    fetchSalaries();
  }, []);

  return (
    <div className='overflow-x-auto p-5'>
      <div className='text-center'>
        <h2 className='text-2xl font-bold mb-5'>Salary History</h2>
      </div>

      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-green-300 border border-gray-200'>
          <tr>
            <th className='px-6 py-3'>Sl No</th>
            <th className='px-6 py-3'>Basic Salary</th>

            <th className='px-6 py-3'>Pay Date</th>
          </tr>
        </thead>

        <tbody>
          {salaries.map((salary, index) => (
            <tr key={salary._id} className='bg-white border-b'>
              <td className='px-6 py-3'>{index + 1}</td>
              <td className='px-6 py-3'>{salary.basicSalary}</td>

              <td className='px-6 py-3'>{new Date(salary.payDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View;
