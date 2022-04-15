import { Link } from 'react-router-dom'

const ClassicCard = ({ classic }) => {
  return (


    <Link to={`/classics/${classic.id}`} className="card">
      
        <div className='card-img-container'>
          <img src={classic.image} className="card-img" alt={`${classic.name}`} />
        </div>
        <div className='card-text'>
        <h2 className='card-title'>{classic.name}</h2>
        <p>{classic.category}</p>
        
        <p>{classic.description}</p>
        </div>
      
    </Link>

  )
}

export default ClassicCard;