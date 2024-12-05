import { useContext } from "react";
import { FinancialRecordContext } from "../context/financial-record-context";

export const useFinancialRecords = () => {
  const context = useContext<FinancialRecordContext | undefined>(
    FinancialRecordContext
  );

  if (!context) {
    throw Error(
      "useFinancialRecords must be used within a FinancialRecordProvider"
    );
  }

  return context;
};
