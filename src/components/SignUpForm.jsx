import { useContext } from 'react'
import { FormCtx } from '../context/FormContext'
import { Box, Input, Button, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'

export const SignUpForm = () => {
  const { email, handleSubmit, handleEmail, isError } = useContext(FormCtx)

  return (
    <Box
      as='section'
      w='100%'
      mt='2.8rem'
    >
      <FormControl isInvalid={isError}>

        <Box
          w='full'
          display='flex'
          justifyContent='space-between'
          alignItems='flex-start'
        >

          <FormLabel
            color='neutral.dark-slate-grey'
            fontSize='14px'
            fontWeight='700'
          >
            Email Address
          </FormLabel>

          {!isError
            ? null
            : (
              <FormErrorMessage
                color='primary.custom-tomato'
                fontSize='13px'
                fontWeight='700'
              >
                Valid email required
              </FormErrorMessage>)}

        </Box>

        <Input
          h='45px'
          type='email'
          borderColor='neutral.custom-grey'
          placeholder='email@company.com' variant='outline'
          value={email}
          _placeholder={{ color: 'neutral.custom-grey', fontSize: '15px' }}
          onChange={handleEmail}
        />

        <Button
          bgColor='neutral.dark-slate-grey'
          color='white'
          h='50px'
          fontSize='15px'
          mt='1rem'
          w='full'
          onClick={handleSubmit}
        >
          Subscribe to monthly newsletter
        </Button>

      </FormControl>
    </Box>
  )
}
