import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import {
  getUserProfile,
  editUser,
  clearMessages,
} from "../actions/userActions";
import { USER_EDIT_RESET } from "../constants/userConstants";

const UserEditScreen = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, profile } = userDetails;
  const adminEditUser = useSelector((state) => state.adminEditUser);
  const { loading: editLoading, error: editError, resMessage } = adminEditUser;

  useEffect(() => {
    if (resMessage) {
      dispatch({ type: USER_EDIT_RESET });
      dispatch(clearMessages());
      navigate("/admin/userlist");
    } else {
      if (!profile.name || profile._id !== id) {
        dispatch(getUserProfile(id));
      } else {
        setName(profile.name);
        setEmail(profile.email);
        setIsAdmin(profile.isAdmin);
      }
    }
  }, [
    dispatch,
    navigate,
    id,
    profile._id,
    profile.email,
    profile.isAdmin,
    profile.name,
    resMessage,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = { name: name, email: email, isAdmin: isAdmin };
    dispatch(editUser(id, formData));
  };

  return (
    <>
      <button className="btn btn-light my-3" onClick={() => navigate(-1)}>
        Go back
      </button>
      <FormContainer>
        <h1>Edit User</h1>
        {editLoading && <Loader />}
        {editError && <Message variant="danger">{editError}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name" className="py-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email" className="py-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="isAdmin" className="py-3">
              <Form.Check
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>
            <Button type="submit" variant="primary" className="py-3">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserEditScreen;
