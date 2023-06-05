import { Box, Image, Heading, Text, Button, chakra } from '@chakra-ui/react'
import { useContext } from 'react'
import { FormCtx } from '../context/FormContext'
import iconSuccess from '../assets/icon-success.svg'

export const SignUpSucess = () => {
  const { email, dissmiss } = useContext(FormCtx)

  return (
    <Box
      as='article'
      bgColor='white'
      w='full'
      minH='100vh'
      px='1rem'
      position='relative'
    >

      <Box as='section' mt='5rem' w='95%' mx='auto' color='neutral.dark-slate-grey'>
        <Box>
          <Image src={iconSuccess} mb='1rem' />
          <Heading fontSize='32px' lineHeight='1'>Thanks for subscribing!</Heading>
          <Text fontSize='14px' mt='1rem' lineHeight='1.6'>
            A confirmation email has been sent to
            <chakra.span fontWeight='700'> {email} </chakra.span>
            Please open it and click the button inside to confirm your subscription
          </Text>
        </Box>
      </Box>

      <Button
        position='absolute'
        bgColor='neutral.dark-slate-grey'
        w='290px'
        h='50px'
        bottom='10px'
        onClick={dissmiss}
      >
        Dismiss message
      </Button>

    </Box>
  )
}
