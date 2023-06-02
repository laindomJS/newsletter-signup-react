import { FormControl, FormLabel, FormErrorMessage, Input, Button } from '@chakra-ui/react'

export const SignUpForm = () => {
  return (
    <FormControl mt='2rem' color='neutral.dark-slate-grey'>
      <FormLabel fontSize='15px' fontWeight='700'>Email address</FormLabel>
      <FormErrorMessage>Valid email required</FormErrorMessage>
      <Input
        height='50px'
        variant='outline'
        borderColor='neutral.custom-grey'
        type='email'
        placeholder='email@company.com'
        _placeholder={{ color: 'neutral.custom-grey', fontSize: '15px' }}
      />
      <Button mt='1rem' h='50px' w='100%' fontSize='15px' bgColor='neutral.dark-slate-grey' color='white'>
        Subscribe to monthly newsletter
      </Button>
    </FormControl>
  )
}
