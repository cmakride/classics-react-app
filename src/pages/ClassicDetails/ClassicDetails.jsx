import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ClassicDetails.css'

import { getOne } from '../../services/classics'
import ClassicActions from './components/ClassicActions'

const ClassicDetails = ({ user }) => {
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

  console.log(classic.image)

  return (
    <>
      {classic.image ? 
        <>
      <section className="show-card-container">
        <div className='show-card'>
          <div className="show-img-container">
            <img src={classic.image} className="show-img" alt={`${classic.name}`} />
          </div>
          <div className="show-card-text">
            <h1>{classic.name}</h1>

            <h2>A {classic.category}</h2>

            <p>{classic.description}</p>

          </div>
            <ClassicActions className="show-actions" classic={classic} user={user} />
        </div>
      </section>
        </>
        :
        <>
        <h2>Loading</h2>
        </>
    }
    </>
  );
}

export default ClassicDetails;