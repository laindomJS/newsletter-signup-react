import { Box, Image } from '@chakra-ui/react'
import { SignUpText } from './SignUpText'
// import illustrationDesktop from '../assets/illustration-sign-up-desktop.svg'
import illustrationMobile from '../assets/illustration-sign-up-mobile.svg'

export const SignUpContainer = () => {
  return (
    <Box
      as='article'
      display='flex'
      flexDirection='column'
      w='100%'
      h='750px'
      bgColor='white'
    >
      <Image src={illustrationMobile} />
      <SignUpText />
    </Box>
  )
}
