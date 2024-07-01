import { Route, Routes } from "react-router";
import { Dashboard } from "./screens";
const App = () => (
  <div className="grid w-screen h-screen p-4 place-content-center">
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/auth" element={<h1>Sign in</h1>} />
    </Routes>
  </div>
);

export default App;
