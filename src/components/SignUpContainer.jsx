import { Box, Image, useBreakpointValue } from '@chakra-ui/react'
import { SignUpText } from './SignUpText'
import illustrationDesktop from '../assets/illustration-sign-up-desktop.svg'
import illustrationMobile from '../assets/illustration-sign-up-mobile.svg'

export const SignUpContainer = () => {
  const imageVariant = useBreakpointValue({
    base: illustrationMobile,
    md: illustrationDesktop
  })

  return (
    <Box
      as='article'
      display='flex'
      flexDirection={{ base: 'column', md: 'row-reverse' }}
      w={{ base: '100%', md: 'fit-content', lg: '60%' }}
      borderRadius={{ base: '0', md: '12px' }}
      h={{ base: 'fit-content', md: '520px', lg: '530px' }}
      p={{ base: '0', md: '1rem' }}
      bgColor='white'
    >
      <Image
        src={imageVariant}
        alt='illustration of screens and stadistics'
      />
      <SignUpText />
    </Box>
  )
}
