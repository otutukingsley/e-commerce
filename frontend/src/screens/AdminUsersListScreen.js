import React, { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Table, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import {
  adminUsersList,
  deleteUser,
  clearMessages,
} from "../actions/userActions"

const AdminUsersListScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const adminGetUsersList = useSelector((state) => state.adminGetUsersList)
  const { users, loading, error } = adminGetUsersList
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const adminDeleteUser = useSelector((state) => state.adminDeleteUser)
  const {
    resMessage,
  } = adminDeleteUser

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(adminUsersList())
      dispatch(clearMessages())
    } else {
      navigate("/login")
    }
  }, [dispatch, navigate, userInfo, resMessage])

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteUser(id))
    }
  }

  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {resMessage && <Message variant="success">{resMessage}</Message>}
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADMIN</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <a href={`mailto: ${user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <i
                        className="fas fa-check"
                        style={{ color: "green" }}
                      ></i>
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    <Link to={`/admin/user/${user._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </Link>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(user._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  )
}

export default AdminUsersListScreen
