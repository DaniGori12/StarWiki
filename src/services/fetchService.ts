import axios, {AxiosResponse} from "axios"

export const getData = async (query: string) => 
await axios.get(`https://swapi.dev/api/${query}/?results=5/`)
.then((response: AxiosResponse) => response)



