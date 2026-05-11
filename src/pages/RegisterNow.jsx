import NavBar from "../components/NavBar"
import RegisterSection from "../components/RegisterSection"
import { useSearchParams } from "react-router-dom"

const RegisterNow = () => {

  const [searchParams] = useSearchParams()

  const ticket = searchParams.get("ticket")

  return (
    <>
      <NavBar />
      <RegisterSection ticket={ticket} />
    </>
  )
}

export default RegisterNow