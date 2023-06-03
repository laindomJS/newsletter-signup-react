import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { FormContextProvider } from './context/FormContext'
import { theme } from './theme.js'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <FormContextProvider>
        <App />
      </FormContextProvider>
    </ChakraProvider>
  </React.StrictMode>
)
