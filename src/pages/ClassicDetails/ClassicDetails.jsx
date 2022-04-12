import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ClassicDetails.css'

import { getOne } from '../../services/classics'

const ClassicDetails = ({user}) => {
  const { id } = useParams()
  const [classic, setClassic] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setClassic(data.classic)
    }
    fetchOne()
  }, [id])


  return ( 
    <>
    
    </>



   );
}
 
export default ClassicDetails;