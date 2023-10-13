import { getAPerson } from "../../services/fetchService"
import { useState, useEffect } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function Characters() {


  const [person, setPerson] = useState<{ name: string, gender: string, height: string, birth_year: string }[]>([])


  const GetData = async () => {
    try {
      const data = await getAPerson();
      console.log(data.results)


      const finalData = data.results;
      setPerson(finalData);

    } catch (error) {
      console.error("Fetching data:", error);
    }

  }

  useEffect(() => { GetData() }, [])


  return (
    <div>
      <h1>Personajes</h1>
      <DataTable value={person} stripedRows tableStyle={{ minWidth: '50rem' }} >
        <Column field="name" header="Nombre" sortable style={{ width: '25%' }}></Column>
        <Column field="gender" header="Género" sortable style={{ width: '25%' }}></Column>
        <Column field="height" header="Altura" sortable style={{ width: '25%' }}></Column>
        <Column field="birth_year" header="Año nacimiento" sortable style={{ width: '25%' }}></Column>

      </DataTable>
    </div>
  )
}
