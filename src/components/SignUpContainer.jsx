import { Box, Image } from '@chakra-ui/react'
import { SignUpText } from './SignUpText'
// import illustrationDesktop from '../assets/illustration-sign-up-desktop.svg'
import illustrationMobile from '../assets/illustration-sign-up-mobile.svg'

export const SignUpContainer = () => {
  return (
    <Box
      as='article'
      display='flex'
      flexDirection={{ base: 'column', md: 'row-reverse' }}
      bgColor='white'
      w={{ base: '100%', md: '45%' }}
      h='fit-content'
      borderRadius={{ base: '0px', md: '20px' }}
      p={{ base: '0px', md: '1rem' }}
    >
      <Image src={illustrationMobile} />
      <SignUpText />
    </Box>
  )
}
