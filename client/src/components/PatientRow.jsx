import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_PATIENT } from "../mutations/PatientsMutation";

export default function PatientRow({ patient }) {
  const [deletePatient] = useMutation(DELETE_PATIENT, {
    variables: { id: patient.id },
  });

  return (
    <tr>
      <td>{patient.patientName}</td>
      <td>{patient.age}</td>
      <td>{patient.email}</td>
      <td>{patient.gender}</td>
      <td>{patient.phone}</td>
      <td>{patient.status}</td>
      <td>{patient.drName}</td>
      <td>{patient.diagnosis}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deletePatient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
