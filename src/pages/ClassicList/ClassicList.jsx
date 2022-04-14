import './ClassicList.css'

// components
import ClassicCard from '../../components/ClassicCard/ClassicCard'

const ClassicList = ({ classics }) => {
  return (
    <div className='card-container'>
      {classics.map((classic) => (
        <ClassicCard
          classic={classic}
          key={classic.id}
        />
      ))}
    </div>
  );
}

export default ClassicList;