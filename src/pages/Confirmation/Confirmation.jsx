import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'

const Confirmation = ({deleteClassic,user}) => {
  const { id } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()

  const handleDelete = () => {
    deleteClassic && deleteClassic(id)
    navigate('/classics')
  }


  return ( 
    <>
     <div className="page-header">
        <h1>Delete Confirmation</h1>
      </div>
      <section className="confirmation">
        <h2>Are you sure you want to delete {state?.name}?</h2>
        <Link className="btn submit" to={`/classics/${id}`}>Cancel</Link>
        <button onClick={handleDelete} type="button" className="btn danger">Yes - Delete!</button>
      </section>
    </>
   );
}
 
export default Confirmation;