import { useReactTable } from '@tanstack/react-table'

function SimpleTable(prop) {
    const {data} = prop
    const columns = [
        {
            header: 'ID',
            accessorKey: 'id'
        },
        {
            header: 'First Name',
            accessorKey: 'firstName'
        },
        {
            header: 'Last Name',
            accessorKey: 'lastName'
        },
        {
            header: 'Username',
            accessorKey: 'username'
        },
        {
            header: 'Password',
            accessorKey: 'password'
        },
        {
            header: 'Registration Date',
            accessorKey: 'registrationDate'
        }
    ]

    const table = useReactTable(data, columns)
  return (
    <div className="container-table">
      
    </div>
  )
}

export default SimpleTable