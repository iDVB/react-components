import React from 'react'

const ModalContext = React.createContext()

const ModalProvider = ({ children, disableBlur = false }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const value = { isModalOpen, setIsModalOpen }
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

const useModalContext = () => {
  const context = React.useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider')
  }
  return context
}

export { ModalProvider, useModalContext }
