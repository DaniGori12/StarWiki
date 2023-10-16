import axios, {AxiosResponse} from "axios"

export const getData = async (query: string) => 
await axios.get(`https://swapi.dev/api/${query}/?/`)
.then((response: AxiosResponse) => response)



