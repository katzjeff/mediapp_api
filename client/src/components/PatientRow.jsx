import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_PATIENT } from "../mutations/PatientsMutation";
import { GET_PATIENTS } from "../queries/PatientsQueries";

export default function PatientRow({ patient }) {
  const [deletePatient] = useMutation(DELETE_PATIENT, {
    variables: { id: patient.id },
    update(cache, { data: { deletePatient } }) {
      const { patients } = cache.readQuery({ query: GET_PATIENTS });
      cache.writeQuery({
        query: GET_PATIENTS,
        data: {
          patients: patients.filter(
            (patient) => patient.id !== deletePatient.id
          ),
        },
      });
    },
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
