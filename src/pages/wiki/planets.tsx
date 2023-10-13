import { useState, useEffect } from "react";
import { getAPlanet } from "../../services/fetchService";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

useState
export default function Planets() {

  const [planet, setPlanet] = useState<{ name: string , climate: string, population: string }[]>([])


  const GetData = async () => {
    try {
      const data = await getAPlanet();
      console.log(data.results)


      const finalData = data.results;
      setPlanet(finalData);

    } catch (error) {
      console.error("Fetching data:", error);
    }

  }

  useEffect(() => { GetData() }, [])







  return (
    <div>
      <h1>Planetas</h1>
      <DataTable value={planet} stripedRows tableStyle={{ minWidth: '50rem' }} >
        <Column field="name" header="Nombre" sortable style={{ width: '25%' }}></Column>
        <Column field="climate" header="Clima" sortable style={{ width: '25%' }}></Column>
        <Column field="population" header="Población" sortable style={{ width: '25%' }}></Column>
      </DataTable>
    </div>
  )
}
