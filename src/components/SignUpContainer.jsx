import { Box, Image } from '@chakra-ui/react'
import { SignUpText } from './SignUpText'
import illustrationDesktop from '../assets/illustration-sign-up-desktop.svg'
import illustrationMobile from '../assets/illustration-sign-up-mobile.svg'

export const SignUpContainer = () => {
  return (
    <Box
      as='article'
      display='flex'
      flexDirection={{ base: 'column', md: 'row-reverse' }}
      w='100%'
      h='750px'
      bgColor='white'
    >
      <Image src={illustrationMobile} srcSet={`${illustrationDesktop}600w`} />
      <SignUpText />
    </Box>
  )
}
