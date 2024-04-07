import { PropagateLoader } from "react-spinners"


const Spinner = () => {
  return (
    <div className="h-screen flex justify-center items-center">
        <PropagateLoader color="#36d7b7" />
    </div>
  )
}

export default Spinner