import { getData } from "../../services/fetchService"
import { useState, useEffect } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { AxiosResponse } from "axios"
import { Box, Heading, Stack } from "@chakra-ui/react";
import "primereact/resources/themes/lara-light-indigo/theme.css";


export default function Characters() {


  const [person, setPerson] = useState<{ name: string, gender: string, height: string, birth_year: string }[]>([])
  const [loading, setLoading] = useState(true)
  const footer = `${person ? person.length : 0} personas encontrados.`

  useEffect(() => {
    try {
      getData("people")
        .then((response: AxiosResponse) => {
          setPerson(response.data.results)
          setLoading(false)
        })
    } catch (error) {
      console.log("Hay un error", error)
    }

  }, [])


  return (

<Stack>
  <Heading mt="5" mb="5">Personajes</Heading>
<Box className='box'>

      <DataTable value={person} loading={loading} footer={footer} tableStyle={{ maxWidth: '100rem' }} paginator rows={6} rowsPerPageOptions={[3, 5, 10]} >

        <Column field="name" header="NOMBRE" sortable style={{ width: '25%' }}></Column>
        <Column field="gender" header="GÉNERO" sortable style={{ width: '25%' }}></Column>
        <Column field="height" header="ALTURA" sortable style={{ width: '25%' }}></Column>
        <Column field="birth_year" header="AÑO NACIMIENTO" sortable style={{ width: '25%' }}></Column>


      </DataTable>
</Box>

</Stack>



  )
}
