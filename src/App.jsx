
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import EmployeeDashboard from './pages/EmployeeDashboard'
import AdminOverview from './components/dashboard/AdminOverview'
import DepartmentList from './components/department/DepartmentList'
import AddDepartment from './components/department/AddDepartment'
import List from './components/employee/List'
import Add from './components/employee/Add'
import AddSalary from './components/salary/Add'
import Summary from './components/EmpDashboard/Summary'
import ProfileView from './components/employee/View'
import LeaveList from './components/leave/List'
import AddLeave from './components/leave/Add'
// import Setting from './components/EmpDashboard/Setting'
import Table from './components/leave/Table'
import View from './components/salary/View'
import SalaryHistory from './components/salary/SalaryHistory'
import RewardsEmp from './components/rewards/ViewRewards'
import RewardsAdmin from './components/rewards/AssignRewards'


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/login"/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin-dashboard' element={<AdminDashboard/>}>
      <Route index element={<AdminOverview/>}></Route>
      <Route path='/admin-dashboard/departments' element={<DepartmentList/>}></Route>

      <Route path='/admin-dashboard/add-department' element={<AddDepartment/>}></Route>
      <Route path='/admin-dashboard/employees' element={<List/>}></Route>
      <Route path='/admin-dashboard/add-employee' element={<Add/>}></Route>
      <Route path='/admin-dashboard/salary/add' element={<AddSalary/>}></Route>
      <Route path='/admin-dashboard/salary' element={<SalaryHistory/>}></Route>
      <Route path='/admin-dashboard/leaves' element={<Table/>}></Route>
      <Route path='/admin-dashboard/rewards' element={<RewardsAdmin/>}></Route>
      </Route>
       
      <Route path='/employee-dashboard' element={<EmployeeDashboard/>}>
      <Route index element={<Summary/>}></Route>
      <Route path='/employee-dashboard/profile' element={<ProfileView/>}></Route>
      <Route path='/employee-dashboard/leaves' element={<LeaveList/>}></Route>
      <Route path='/employee-dashboard/add-leave' element={<AddLeave/>}></Route>
      <Route path='/employee-dashboard/salary' element={<View/>}></Route>
      <Route path='/employee-dashboard/rewards' element={<RewardsEmp/>}></Route>
      </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App



