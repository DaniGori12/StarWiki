import { database } from "../database/database"





export default function Home() {
  return (
    <div>
<h1 className="Main">Star Wars Wiki</h1>

    <h2>Hola {database.name}! Bienvenid@ a la Wiki de Star Wars</h2>
    </div>
  )
}
