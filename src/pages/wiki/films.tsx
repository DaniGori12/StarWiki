import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect } from 'react';
import { getData } from '../../services/fetchService';
import { AxiosResponse } from "axios"

export default function Films() {

  const [film, setFilm] = useState<{ title: string, episode_id: number, director: string, release_date: number }[]>([])
  const [loading, setLoading] = useState(true)
  // const GetData = async () => {
  //   try {
  //     const data = await getAFilm();
  //     console.log(data.results)


  //     const finalData = data.results;
  //     setFilm(finalData);

  //   } catch (error) {
  //     console.error("Fetching data:", error);
  //   }

  // }

  useEffect(() => {
    getData("films")
      .then((response: AxiosResponse) => {
        setFilm(response.data.results)
        setLoading(false)
      })

  }, [])


  return (
    <div>
      <h1>Peliculas</h1>
      <DataTable value={film} showGridlines loading={loading}  tableStyle={{ minWidth: '50rem' }} >
        <Column field="title" header="Titulo" sortable style={{ width: '25%' }}></Column>
        <Column field="episode_id" header="Episodio" sortable style={{ width: '25%' }}></Column>
        <Column field="director" header="Director" sortable style={{ width: '25%' }}></Column>
        <Column field="release_date" header="Año lanzamiento" sortable style={{ width: '25%' }}></Column>

      </DataTable>


    </div>
  )
}
