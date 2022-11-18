import { gql, useQuery } from "@apollo/client";
import PatientRow from "./PatientRow";
import Spinner from "./spinner";
import { GET_PATIENTS } from "../queries/PatientsQueries";


export default function Patients() {
  const { loading, error, data } = useQuery(GET_PATIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something is wrong...</p>;

    return <>{!loading && !error && 
        <table className="table-hover mt-3">
            <thead>
                <tr>
                    <th>Patient Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Dr. Name</th>
                    <th>Diagnosis</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.patients.map((patient) => (
                    <PatientRow key={patient.id} patient={patient} />
                ))}
            </tbody>
        </table>
  } </>;

  return <div>Patients</div>;
}
