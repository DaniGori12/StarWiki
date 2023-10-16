import { FormControl, FormLabel, Input, useToast, Box, Button, Stack, Container, Card, Heading } from "@chakra-ui/react"
import { database } from "../database/database"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
  setAuth: (action: boolean) => void;
}

export const LoginPage = ({ setAuth }: Props) => {
  const [textedPass, setTextedPass] = useState("")
  const [textedUser, setTextedUser] = useState("")
  const navigate = useNavigate()

  const toast = useToast();

  const user = database.username
  const pass = database.password



  useEffect(() => {

    (user && pass ) &&
        toast({
            title: "Credentials",
            description: "Username: "+ user + " Password: "+ pass,
            status: "info",
            duration: 5000,
            position: "top-right",
            isClosable: true
        }), []; 
        
},  [user, pass])





  const handleSubmit = () => {

    if (user == textedUser && pass == textedPass) {

      setAuth(true)
      navigate("/home")

      toast({
        title: 'Login',
        description: "Login success",
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Error',
        description: "Sus credenciales no coinciden",
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }


  }

  return (
    <Container >
      <Stack mt='10' spacing='23'>
    
<Heading >Log in to your account</Heading>
<Card p="5">
          <FormControl isRequired >
            <FormLabel htmlFor="user">Username</FormLabel>
            <Input id="TextedUser" type="Username" placeholder="admin@admin.com" onChange={(e) => setTextedUser(e.target.value)} />


            <FormLabel htmlFor="pass" mt="5">Password</FormLabel >
            <Input id="Textedpass" type="password" placeholder="Your password" onChange={(e) => setTextedPass(e.target.value)} />
            <Box display='flex' justifyContent='right'>
              <Button mt="10px" type="submit" onClick={handleSubmit}>Submit</Button>
            </Box>
          </FormControl>
</Card>
   
      </Stack>

    </Container>
  )


}


export default LoginPage