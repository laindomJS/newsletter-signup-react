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
      w={{ base: '100%', md: '55%', lg: '35%' }}
      h={{ base: '100vh', md: 'fit-content' }}
      px={{ base: '1rem', md: '2rem', lg: '3rem' }}
      py={{ base: '0', md: '3rem' }}
      borderRadius={{ base: '0', md: '12px' }}
    >

      <Box
        as='section'
        mt={{ base: '5rem', md: '0' }}
        w='95%'
        mx='auto'
        color='neutral.dark-slate-grey'
      >
        <Box>
          <Image
            w={{ base: '70px', md: '45px' }}
            src={iconSuccess}
            mb={{ base: '1rem', md: '2rem' }}
          />
          <Heading
            fontSize={{ base: '40px', md: '45px' }}
            lineHeight='1'
          >
            Thanks for subscribing!
          </Heading>
          <Text fontSize='14px' my='1rem' lineHeight='1.6'>
            A confirmation email has been sent to
            <chakra.span fontWeight='700'> {email} </chakra.span>
            Please open it and click the button inside to confirm your subscription
          </Text>
        </Box>
      </Box>

      <Button
        bgColor='neutral.dark-slate-grey'
        w={{ base: '100%', md: '100%' }}
        h='50px'
        mt={{ base: '35%', md: '0' }}
        onClick={dissmiss}
        _hover={{ bgColor: 'primary.custom-tomato' }}
      >
        Dismiss message
      </Button>

    </Box>
  )
}
