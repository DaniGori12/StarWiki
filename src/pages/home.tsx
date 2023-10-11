import { database } from "../database/database"





export default function Home() {
  return (
    <div>
<h1 className="Main">Star Wars Wiki</h1>

    <h4>Hola {database.name}!</h4>
    </div>
  )
}
