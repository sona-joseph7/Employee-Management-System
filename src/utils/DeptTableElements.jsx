export const columns = [
    {
        name: "Sl No",
        selector : (row)=>row.slno
    },
    {
        name: "Department Name",
        selector: (row)=>row.dept_name
    },
    {
        name: "Action",
        selector: (row)=>row.action
    }
]

export const DepartmentButtons = () =>{
    return (
        <div className="flex space-x-3">
            <button className="px-4 py-1 bg-green-500">Edit</button>
            <button className="px-4 py-1 bg-red-500">Delete</button>
        </div>
    )
}