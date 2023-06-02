import { List, ListItem } from '@chakra-ui/react'

export const SignUpList = () => {
  return (
    <List mt='2rem' spacing={3} color='neutral.dark-slate-grey' fontSize='15px'>
      <ListItem>Product discovery and building what matters</ListItem>
      <ListItem>Measuring to ensure updates are a success</ListItem>
      <ListItem>And much more!</ListItem>
    </List>
  )
}
