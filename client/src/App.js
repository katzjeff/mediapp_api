import Header from "./components/Header";
import Patients from "./components/Patients";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const patient = new ApolloClient({
  uri: "http://localhost:5000/mediapp",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={patient}>
        <Header />
        <div className="container">
          <Patients />,
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
