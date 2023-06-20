import { Box, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { SignUpForm } from './SignUpForm'

export const SignUpText = () => {
  return (
    <>
      <Box
        as='section'
        mt={{ base: '1rem', md: '0rem' }}
        p={{ base: '1rem', md: '2.5rem' }}
        color='neutral.dark-slate-grey'
      >
        <Heading mb='.8rem' fontSize={{ base: '35px', md: '45px' }}>
          Stay updated!
        </Heading>
        <Text fontSize='15px'>
          Join 60,000+ product manager receiving monthly updates on:
        </Text>

        <List mt='1.5rem' spacing={3} color='neutral.dark-slate-grey' fontSize='15px'>
          <ListItem>
            <ListIcon boxSize={6} as={CheckCircleIcon} color='primary.custom-tomato' />
            Product discovery and building what matters
          </ListItem>
          <ListItem>
            <ListIcon boxSize={6} as={CheckCircleIcon} color='primary.custom-tomato' />
            Measuring to ensure updates are a success
          </ListItem>
          <ListItem>
            <ListIcon boxSize={6} as={CheckCircleIcon} color='primary.custom-tomato' />
            And much more!
          </ListItem>
        </List>

        <SignUpForm />
      </Box>
    </>
  )
}
