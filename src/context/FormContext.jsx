import { createContext, useState } from 'react'

export const FormCtx = createContext(null)

export const FormContextProvider = ({ children }) => {
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [isError, setIsError] = useState(false)

  function handleEmail (e) {
    const inputValue = e.target.value
    setEmail(inputValue)
  }

  function handleSubmit (e) {
    e.preventDefault()
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (regex.test(email)) {
      setIsValid(true)
    } else {
      setIsValid(false)
      setEmail('')
      setIsError(true)
    }
  }

  function dissmiss () {
    setIsValid(false)
    setIsError(false)
    setEmail('')
  }

  return (
    <FormCtx.Provider value={{ isValid, handleEmail, handleSubmit, email, isError, dissmiss }}>
      {children}
    </FormCtx.Provider>
  )
}
