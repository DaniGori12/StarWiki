import { getData } from "../../services/fetchService"
import { useState, useEffect } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {AxiosResponse} from "axios"

export default function Starships() {
  
  const [starship, setStarship] = useState<{ title: string, model: string, starship_class: string, manufacturer: string, length: string }[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => { 
    getData("starships")
    .then((response: AxiosResponse) => {
      setStarship(response.data.results)
    setLoading(false)})

  }, [])



  return (
    <div>
    <h1>Naves</h1>
    <DataTable value={starship} stripedRows loading={loading} tableStyle={{ minWidth: '50rem' }} >
      <Column field="name" header="Nombre" sortable style={{ width: '25%' }}></Column>
      <Column field="model" header="Modelo" sortable style={{ width: '25%' }}></Column>
      <Column field="starship_class" header="Clase" sortable style={{ width: '25%' }}></Column>
      <Column field="manufacturer" header="Fabricante" sortable style={{ width: '25%' }}></Column>
    </DataTable>
  </div>
  )
}
