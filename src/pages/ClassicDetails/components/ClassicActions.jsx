import { useNavigate } from "react-router-dom";

const ClassicActions = ({classic, user}) => {
  const navigate = useNavigate()
  return (
    classic.profile_id === user.id &&
    <div className="actions">
      <button className="btn warn" onClick={()=>
      navigate(`/classics/${classic.id}/edit`,{ state:classic })}>Edit</button>

      <button className="btn danger" onClick={()=>
      navigate(`/classics/${classic.id}/confirmation`,{state:classic})}>Delete</button>

    </div>
   );
}
 
export default ClassicActions;