import { Box, Heading, Text } from '@chakra-ui/react'
import { SignUpList } from './SignUpList'
import { SignUpForm } from './SignUpForm'

export const SignUpText = () => {
  return (
    <Box as='section' mt={{ base: '1rem', md: '0px' }} py='1rem' px='1rem'>
      <Heading color='neutral.dark-slate-grey' fontSize='35px'>
        Stay updated!
      </Heading>
      <Text color='neutral.dark-slate-grey' mt='1rem' fontSize='15px'>
        Join 60,000+ product managers receiving monthly updates on:
      </Text>

      <SignUpList />
      <SignUpForm />
    </Box>
  )
}
