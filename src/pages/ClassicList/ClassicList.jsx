import './ClassicList.css'

// components
import ClassicCard from '../../components/ClassicCard/ClassicCard'

const ClassicList = ({ classics }) => {
  return (
    <>
      {classics.map((classic) => (
        <ClassicCard
          classic={classic}
          key={classic.id}
        />
      ))}
    </>
  );
}

export default ClassicList;