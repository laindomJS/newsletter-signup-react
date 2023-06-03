import { createContext, useState } from 'react'

export const FormCtx = createContext(null)

export const FormContextProvider = ({ children }) => {
  const [isValid, setIsValid] = useState(false)

  function handleSubmit () {
    setIsValid(!isValid)
  }

  return (
    <FormCtx.Provider value={{ isValid, handleSubmit }}>
      {children}
    </FormCtx.Provider>
  )
}
