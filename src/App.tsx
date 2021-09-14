import { useState } from "react";
import Modal from "react-modal";

import { Header } from "./Components/Header";
import { Dashboard } from "./Components/Dashboard";
import { NewTransactionModal } from "./Components/NewTransactionModal";

import { GlobalStyle } from "./styled/global";
import { TransactionsProvider } from "./contexts/TransactionsContext";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle></GlobalStyle>
    </TransactionsProvider>
  );
}
