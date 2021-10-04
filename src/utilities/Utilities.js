import { useEffect, useState } from "react"

const UseCourse = ()=>{
    const[course,setCourse]=useState([])
    useEffect(()=>{
        fetch('./fackdata.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
    return (
        [course,setCourse]
    )
}
export default UseCourse;