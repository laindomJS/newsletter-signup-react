import { useContext } from 'react'
import { chakra } from '@chakra-ui/react'
import { FormCtx } from './context/FormContext'
import { SignUpContainer } from './components/SignUpContainer'
import { SignUpSucess } from './components/SignUpSucess'

function App () {
  const { isValid } = useContext(FormCtx)

  return (
    <chakra.main
      w='100%'
      minH='100vh'
      bgColor='neutral.charcoal-gray'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      {isValid ? (<SignUpSucess />) : (<SignUpContainer />)}
    </chakra.main>
  )
}

export default App
