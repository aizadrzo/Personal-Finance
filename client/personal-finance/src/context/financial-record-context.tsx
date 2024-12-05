import { PropsWithChildren, createContext, useState } from "react";
import { FinancialRecord } from "../types";

export type FinancialRecordContext = {
  records: FinancialRecord[];
  addRecord: (record: FinancialRecord) => void;
  // updateRecord: (id: string, newRecord: Partial<FinancialRecord>) => void;
  // deleteRecord: (id: string) => void;
};

export const FinancialRecordContext = createContext<
  FinancialRecordContext | undefined
>(undefined);

export const FinancialRecordProvider = (children: PropsWithChildren) => {
  const [records, setRecords] = useState<FinancialRecord[]>([]);

  const addRecord = (record: FinancialRecord) => {};

  return (
    <FinancialRecordContext.Provider value={{ records, addRecord }}>
      {children}
    </FinancialRecordContext.Provider>
  );
};
