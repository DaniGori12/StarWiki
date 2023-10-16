import { Box, Heading } from "@chakra-ui/react"
import { database } from "../database/database"





export default function Home() {
  return (
    <Box>
      <Heading mt="5" mb="5">
        Star Wars Wiki
      </Heading>

      <h2>Hola {database.name}! Bienvenid@ a la Wiki de Star Wars</h2>
    </Box>

  )
}
