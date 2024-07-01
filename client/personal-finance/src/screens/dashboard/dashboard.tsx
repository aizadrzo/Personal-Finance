import FinancialList from "./financial-list";
import FormEntry from "./form-entry";

const Dashboard = () => (
  <div className="w-full h-full space-y-8">
    <FormEntry />
    <FinancialList />
  </div>
);

export default Dashboard;
