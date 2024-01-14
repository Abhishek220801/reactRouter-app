import { useParams } from "react-router-dom"

const User = () => {
    const {userid} = useParams()
  return (
    <div>
      <h1 className="bg-gray-600 text-white p-4 text-3xl text-center">User: {userid}</h1>
    </div>
  )
}

export default User
