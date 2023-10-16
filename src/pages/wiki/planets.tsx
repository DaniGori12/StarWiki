import { useState, useEffect } from "react";
import { getData } from "../../services/fetchService";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {AxiosResponse} from "axios"

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
    <div>
      <h1>Planetas</h1>
      <DataTable value={planet} stripedRows loading={loading} tableStyle={{ minWidth: '50rem' }} >
        <Column field="name" header="Nombre" sortable style={{ width: '25%' }}></Column>
        <Column field="climate" header="Clima" sortable style={{ width: '25%' }}></Column>
        <Column field="population" header="Población" sortable style={{ width: '25%' }}></Column>
      </DataTable>
    </div>
  )
}
