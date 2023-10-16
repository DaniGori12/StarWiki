import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect } from 'react';
import { getData } from '../../services/fetchService';
import { AxiosResponse } from "axios"
import { Heading, Box, Stack } from '@chakra-ui/react';
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function Films() {

  const [film, setFilm] = useState<{ title: string, episode_id: number, director: string, release_date: number }[]>([])
  const [loading, setLoading] = useState(true)
  const footer = `${film ? film.length : 0} peliculas encontradas.`

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
    try {
      getData("films")
        .then((response: AxiosResponse) => {
          setFilm(response.data.results)
          setLoading(false)
        })

    } catch (error) {
      console.log("Hay un error", error)
    }

  }, [])



  return (
    <Stack>
      <Heading mt="5" mb="5">Peliculas</Heading>
      <Box className='box'>
        <DataTable value={film} loading={loading} footer={footer} tableStyle={{ minWidth: '50rem' }} paginator rows={6} rowsPerPageOptions={[3, 5, 10]} >
          <Column field="title" header="TITULO" sortable style={{ width: '3 5%' }}></Column>
          <Column field="episode_id" header="EPISODIO" sortable style={{ width: '25%' }}></Column>
          <Column field="director" header="DIRECTOR" sortable style={{ width: '25%' }}></Column>
          <Column field="release_date" header="AÑO LANZAMIENTO" sortable style={{ width: '25%' }}></Column>
        </DataTable>
      </Box>


    </Stack>
  )
}
