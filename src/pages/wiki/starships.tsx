import { getData } from "../../services/fetchService"
import { useState, useEffect } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { AxiosResponse } from "axios"
import { Box, Heading, Stack } from "@chakra-ui/react";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function Starships() {

  const [starship, setStarship] = useState<{ title: string, model: string, starship_class: string, manufacturer: string, length: string }[]>([])
  const [loading, setLoading] = useState(true)
  const footer = `${starship ? starship.length : 0} naves encontradas.`
  useEffect(() => {
    try {
      getData("starships")
        .then((response: AxiosResponse) => {
          setStarship(response.data.results)
          setLoading(false)
        })
    } catch (error) {
      console.log("Hay un error", error)
    }
  }, [])



  return (

    <Stack>
      <Heading mt="5" mb="5">Naves</Heading>
      <Box className='box'>
        <DataTable value={starship} loading={loading} footer={footer} tableStyle={{ minWidth: '50rem' }} paginator rows={6} rowsPerPageOptions={[3, 5, 10]} >
          <Column field="name" header="NOMBRE" sortable style={{ width: '25%' }}></Column>
          <Column field="model" header="MODELO" sortable style={{ width: '25%' }}></Column>
          <Column field="starship_class" header="CLASE" sortable style={{ width: '25%' }}></Column>
          <Column field="manufacturer" header="FABRICANTE" sortable style={{ width: '25%' }}></Column>
        </DataTable>
      </Box>

    </Stack>
  )
}
