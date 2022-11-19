import Header from "./components/Header";
import Patients from "./components/Patients";
import AddPatient from "./components/AddPatient";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        patients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        doctors: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        diseases: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const patient = new ApolloClient({
  uri: "http://localhost:5000/mediapp",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={patient}>
        <Header />
        <div className="container">
          <AddPatient />,
          <Patients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
