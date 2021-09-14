import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useTransactions(){
  const useTransactios = useContext(TransactionsContext);

  return useTransactios;
}