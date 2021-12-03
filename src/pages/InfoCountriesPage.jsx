import { useParams } from "react-router-dom"


export const InfoCountriesPage = () => {
  const {name} = useParams();
  console.log(name);
  return (
    <div>
      Details {name}
    </div>
  )
}