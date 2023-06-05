import { Box, Heading, Text, List, ListItem } from '@chakra-ui/react'
import { SignUpForm } from './SignUpForm'

export const SignUpText = () => {
  return (
    <>
      <Box
        as='section'
        mt='1rem'
        p='1rem'
        color='neutral.dark-slate-grey'
      >
        <Heading mb='.8rem' fontSize='35px'>
          Stay updated!
        </Heading>
        <Text fontSize='15px'>
          Join 60,000+ product manager receiving monthly updates on:
        </Text>

        <List mt='1.5rem' spacing={3} color='neutral.dark-slate-grey' fontSize='15px'>
          <ListItem>Product discovery and building what matters</ListItem>
          <ListItem>Measuring to ensure updates are a success</ListItem>
          <ListItem>And much more!</ListItem>
        </List>

        <SignUpForm />
      </Box>
    </>
  )
}
