import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"
export default function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Abhishek220801')
    //   .then(response=>response.json())
    //   .then(data=>{
    //     console.log(data)
    //     setData(data)
    //   })
    // }, [])
    const data = useLoaderData()
    
  return (
    <div className='text-white bg-gray-600 text-center text-3xl m-4 p-4'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="git image" width={300}/></div>
  )
}

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/Abhishek220801')
    return response.json()
}