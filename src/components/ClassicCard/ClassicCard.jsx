import { Link } from 'react-router-dom'

const ClassicCard = ({classic}) => {
  return ( 
  
  
  <Link to={`/classics/${classic.id}`} className="card">
    <div className='card-content'>
      <div className='card-img-container'>
        <img src={classic.image} alt={`${classic.name}`} />
      </div>
      <h2 className='card-title'>{classic.name}</h2>
      <p>{classic.category}</p>
      <p><small>{classic.description}</small></p>
    </div>
  </Link>
  )
}
 
export default ClassicCard;