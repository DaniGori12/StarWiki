import { getAStarship } from "../../services/fetchService"
import { useState, useEffect } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export default function Starships() {
  
  const [starship, setStarship] = useState<{ title: string, model: string, starship_class: string, manufacturer: string, length: string }[]>([])

  const GetData = async () => {
    try {
      const data = await getAStarship();
      console.log(data.results)


      const finalData = data.results;
      setStarship(finalData);

    } catch (error) {
      console.error("Fetching data:", error);
    }

  }

  useEffect(() => { GetData() }, [])

  return (
    <div>
    <h1>Naves</h1>
    <DataTable value={starship} stripedRows tableStyle={{ minWidth: '50rem' }} >
      <Column field="name" header="Nombre" sortable style={{ width: '25%' }}></Column>
      <Column field="model" header="Modelo" sortable style={{ width: '25%' }}></Column>
      <Column field="starship_class" header="Clase" sortable style={{ width: '25%' }}></Column>
      <Column field="manufacturer" header="Fabricante" sortable style={{ width: '25%' }}></Column>
      <Column field="length" header="Longitud" sortable style={{ width: '25%' }}></Column>
    </DataTable>
  </div>
  )
}
