import { useState, useEffect } from "react";
import { getData } from "../../services/fetchService";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {AxiosResponse} from "axios"
import { Box, Heading } from "@chakra-ui/react";
import "primereact/resources/themes/lara-light-indigo/theme.css";

useState
export default function Planets() {

  const [planet, setPlanet] = useState<{ name: string , climate: string, population: string }[]>([])
const [loading, setLoading] = useState(true)

  useEffect(() => { 
    getData("planets")
    .then((response: AxiosResponse) => {
    setPlanet(response.data.results)
    setLoading(false)})

  }, [])








  return (
    <Box>
      <Heading mt="5" mb="5">Planetas</Heading>
      <DataTable value={planet}  loading={loading} stripedRows tableStyle={{ minWidth: '50rem' }} >
        <Column field="name" header="Nombre" sortable style={{ width: '25%' }}></Column>
        <Column field="climate" header="Clima" sortable style={{ width: '25%' }}></Column>
        <Column field="population" header="Población" sortable style={{ width: '25%' }}></Column>
      </DataTable>
    </Box>
  )
}
