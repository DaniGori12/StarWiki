import { useState, useEffect } from "react";
import { getData } from "../../services/fetchService";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { AxiosResponse } from "axios"
import { Box, Heading, Stack } from "@chakra-ui/react";
import "primereact/resources/themes/lara-light-indigo/theme.css";

useState
export default function Planets() {

  const [planet, setPlanet] = useState<{ name: string, climate: string, population: string }[]>([])
  const [loading, setLoading] = useState(true)
  const footer = `${planet ? planet.length : 0} planetas encontrados.`

  useEffect(() => {

    try {
      getData("planets")
        .then((response: AxiosResponse) => {
          setPlanet(response.data.results)
          setLoading(false)
        })
    } catch (error) {
      console.log("Hay un error", error)
    }

  }, [])


  return (
    <Stack>
      <Heading mt="5" mb="5">Planetas</Heading>
      <Box className='box'>
        <DataTable value={planet} footer={footer} loading={loading} tableStyle={{ minWidth: '50rem' }} paginator rows={6} rowsPerPageOptions={[3, 5, 10]} >
          <Column field="name" header="NOMBRE" sortable style={{ width: '25%' }}></Column>
          <Column field="climate" header="CLIMA" sortable style={{ width: '25%' }}></Column>
          <Column field="population" header="POBLACIÓN" sortable style={{ width: '25%' }}></Column>
        </DataTable>
      </Box>
    </Stack>

  )
}
