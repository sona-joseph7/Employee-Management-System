
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import './App.css'
// import Login from './pages/Login'
// import AdminDashboard from './pages/AdminDashboard'
// import EmployeeDashboard from './pages/EmployeeDashboard'
// import AdminOverview from './components/dashboard/AdminOverview'
// import DepartmentList from './components/department/DepartmentList'
// import AddDepartment from './components/department/AddDepartment'
// import List from './components/employee/List'
// import Add from './components/employee/Add'
// import AddSalary from './components/salary/Add'
// import Summary from './components/EmpDashboard/Summary'
// import ProfileView from './components/employee/View'
// import LeaveList from './components/leave/List'
// import AddLeave from './components/leave/Add'
// import Setting from './components/EmpDashboard/Setting'
// import Table from './components/leave/Table'
// import View from './components/salary/View'


// function App() {

//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Navigate to="/admin-dashboard"/>}/>
//       <Route path='/login' element={<Login/>}/>
//       <Route path='/admin-dashboard' element={<AdminDashboard/>}>



//       <Route index element={<AdminOverview/>}></Route>
//       <Route path='/admin-dashboard/departments' element={<DepartmentList/>}></Route>

//       <Route path='/admin-dashboard/add-department' element={<AddDepartment/>}></Route>
//       <Route path='/admin-dashboard/employees' element={<List/>}></Route>
//       <Route path='/admin-dashboard/add-employee' element={<Add/>}></Route>
//       <Route path='/admin-dashboard/salary/add' element={<AddSalary/>}></Route>
//       <Route path='/admin-dashboard/leaves' element={<Table/>}></Route>
//       <Route path='/admin-dashboard/setting' element={<Setting/>}></Route>
//       </Route>
       
//       <Route path='/employee-dashboard' element={<EmployeeDashboard/>}>
//       <Route index element={<Summary/>}></Route>
//       <Route path='/employee-dashboard/profile' element={<ProfileView/>}></Route>
//       <Route path='/employee-dashboard/leaves' element={<LeaveList/>}></Route>
//       <Route path='/employee-dashboard/add-leave' element={<AddLeave/>}></Route>
//       <Route path='/employee-dashboard/salary' element={<View/>}></Route>
//       <Route path='/employee-dashboard/setting' element={<Setting/>}></Route>
//       </Route>

//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App



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
import Setting from './components/EmpDashboard/Setting'
import Table from './components/leave/Table'
import View from './components/salary/View'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route index element={<AdminOverview />} />
          <Route path="departments" element={<DepartmentList />} />
          <Route path="add-department" element={<AddDepartment />} />
          <Route path="employees" element={<List />} />
          <Route path="add-employee" element={<Add />} />
          <Route path="salary/add" element={<AddSalary />} />
          <Route path="leaves" element={<Table />} />
          <Route path="setting" element={<Setting />} />
        </Route>

        {/* Employee Routes */}
        <Route path="/employee-dashboard" element={<EmployeeDashboard />}>
          <Route index element={<Summary />} />
          <Route path="profile" element={<ProfileView />} />
          <Route path="leaves" element={<LeaveList />} />
          <Route path="add-leave" element={<AddLeave />} />
          <Route path="salary" element={<View />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App



