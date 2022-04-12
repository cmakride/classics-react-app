import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ClassicDetails.css'

import { getOne } from '../../services/classics'
import ClassicActions from './components/ClassicActions'

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

  if (!classic) return <h1>Loading</h1>

  return ( 
    <>
    <section className="classic-container">
        <div className="classic-img">
          <img className="usr-img" src={classic.img} alt={`${classic.name}`} />
        </div>
        <div className="classic-details">
          <h1>{classic.name}</h1>
          
            <h2>A {classic.category}</h2>
            
            <p>{classic.description}</p>

            <ClassicActions classic = {classic} user = {user}/>
        </div>
      </section>
    </>
   );
}
 
export default ClassicDetails;