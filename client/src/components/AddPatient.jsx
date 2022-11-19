import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaUserPlus } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_PATIENT } from "../mutations/PatientsMutation";
import { GET_PATIENTS } from "../queries/PatientsQueries";

function AddPatient() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [drName, setDrName] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addPatient] = useMutation(ADD_PATIENT, {
    variables: {
      name,
      age,
      phone,
      gender,
      email,
      status,
      drName,
      diagnosis,
    },
    update(cache, { data: { addPatient } }) {
      const { patient } = cache.readQuery({ query: GET_PATIENTS });
      cache.writeQuery({
        query: GET_PATIENTS,
        data: { patient: [...patient, addPatient] },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      age === "" ||
      phone === "" ||
      gender === "" ||
      email === "" ||
      status === "" ||
      drName === "" ||
      diagnosis === ""
    ) {
      return alert("Please fill all fields");
    } else {
      addPatient(name, age, phone, gender, email, status, drName, diagnosis);

      setName("");
      setAge("");
      setPhone("");
      setGender("");
      setEmail("");
      setStatus("");
      setDrName("");
      setDiagnosis("");
    }
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        <FaUserPlus className="icon" /> Add Patient
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            {/* Patient Name */}
            <div className="mb-3">
              <label className="form-label">Patient Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* Age */}
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                value={age}
                id="age"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            {/* Phone */}
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                value={phone}
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Gender */}
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <input
                type="text"
                className="form-control"
                value={gender}
                id="gender"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            {/* Status */}
            <div className="mb-3">
              <label className="form-label">Status</label>
              <input
                type="text"
                className="form-control"
                value={status}
                id="status"
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            {/* Doctor Name */}
            <div className="mb-3">
              <label className="form-label">Doctor Name</label>
              <input
                type="text"
                className="form-control"
                value={drName}
                id="drName"
                onChange={(e) => setDrName(e.target.value)}
              />
            </div>
            {/* Diagnosis */}
            <div className="mb-3">
              <label className="form-label">Diagnosis</label>
              <input
                type="text"
                className="form-control"
                value={diagnosis}
                id="diagnosis"
                onChange={(e) => setDiagnosis(e.target.value)}
              />
            </div>
            <Modal.Footer>
              <Button
                variant="secondary"
                type="submit"
                data-bs-dismiss="modal"
                onClick={handleClose}
              >
                Submit Form
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddPatient;
