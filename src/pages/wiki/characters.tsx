import { getData } from "../../services/fetchService"
import { useState, useEffect } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {AxiosResponse} from "axios"
export default function Characters() {


  const [person, setPerson] = useState<{ name: string, gender: string, height: string, birth_year: string }[]>([])
  const [loading, setLoading] = useState(true)

useEffect(() => { 
  getData("people")
  .then((response: AxiosResponse) => {setPerson(response.data.results)
  setLoading(false)})

}, [])



  return (
    <div>
      <h1>Personajes</h1>
     
      <DataTable value={person}  showGridlines loading={loading} tableStyle={{ minWidth: '50rem' }} >
        <Column field="name" header="Nombre" sortable style={{ width: '25%' }}></Column>
        <Column field="gender" header="Género" sortable style={{ width: '25%' }}></Column>
        <Column field="height" header="Altura" sortable style={{ width: '25%' }}></Column>
        <Column field="birth_year" header="Año nacimiento" sortable style={{ width: '25%' }}></Column>

      </DataTable>


    </div>
  )
}
