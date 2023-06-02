import { chakra } from '@chakra-ui/react'
import { SignUpContainer } from './components/SignUpContainer'

function App () {
  return (
    <chakra.main
      w='100%'
      minH='100vh'
      bgColor='neutral.charcoal-gray'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <SignUpContainer />
    </chakra.main>
  )
}

export default App
