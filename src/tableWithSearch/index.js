import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'

function TableWithSearch () {
  const [usersList, setUsersList] = useState([])

  const columns = [
    { dataField: 'id', text: 'Id' },
    { dataField: 'name', text: 'Name', sort: true },
    { dataField: 'username', text: 'Username' },
    { dataField: 'email', text: 'Email' }
  ]

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => setUsersList(data))
      .catch(error => {
        console.log('error..', error)
      })
  }, [])
  return (
    <>
      <BootstrapTable
        bootstrap4
        keyField='id'
        columns={columns}
        data={usersList}
      />
      {/* <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {usersList && usersList.length
            ? usersList.map(user => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            : ''}
        </tbody>
      </table> */}
    </>
  )
}

export default TableWithSearch
