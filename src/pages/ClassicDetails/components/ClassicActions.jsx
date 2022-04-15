import { useNavigate } from "react-router-dom";
import { BsTrash } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'



const ClassicActions = ({classic, user}) => {
  const navigate = useNavigate()
  return (
    classic.profile_id === user.id &&
    <div className="actions">
      <button className="btn warn" onClick={()=>
      navigate(`/classics/${classic.id}/edit`,{ state:classic })}><FiEdit/></button>

      <button className="btn danger" onClick={()=>
      navigate(`/classics/${classic.id}/confirmation`,{state:classic})}><BsTrash/></button>

    </div>
   );
}
 
export default ClassicActions;