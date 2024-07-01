import { Route, Routes } from "react-router";
import { Dashboard } from "./screens";
import { FinancialRecordProvider } from "./context/financial-record-context";
const App = () => (
  <div className="grid w-screen h-screen place-content-center">
    <Routes>
      <Route
        path="/"
        element={
          <FinancialRecordProvider>
            <Dashboard />
          </FinancialRecordProvider>
        }
      />
      <Route path="/auth" element={<h1>Sign in</h1>} />
    </Routes>
  </div>
);

export default App;
