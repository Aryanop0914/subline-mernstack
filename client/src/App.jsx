import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CustomerDetails from "./components/CustomerDetails";
import CityList from "./components/CityList";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route
        path="/customerDetails/:customerId"
        element={<CustomerDetails />}
      />
      <Route path="/uniqueCities" element={<CityList />} />
    </Routes>
  );
}

export default App;
