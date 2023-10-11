import { getAPerson } from "../../services/fetchService"
import { useState, useEffect } from "react"

export default function Characters() {


  const [person, setPerson] = useState([])


  const GetData = async () => {
    try {
      const data = await getAPerson();
      console.table(data.results)


      const finalData = data.results;
      setPerson(finalData);

    } catch (error) {
      console.error("Fetching data:", error);
    }

  }

  useEffect(() => { GetData() }, [])


  return (
    <div>
      
      {person.map((element, id) => {
        return (
<li  key={id}>
  {element.name}

</li>
        )


      })}

</div>
        )
      }
