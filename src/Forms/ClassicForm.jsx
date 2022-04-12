import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../styles/Form.css'

import { getOne } from '../services/classics'

import ClassicInput from './ClassicInput'

const ClassicForm = ({updateClassic,addClassic,user}) => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [form,setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? updateClassic(form) : addClassic(form)
    navigate(`/classics`)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setForm({
        id: data.classic.id,
        name: data.classic.name,
        category: data.classic.category,
        description: data.classic.description,
        image: data.classic.image
      })
    }
    id && fetchOne()
    return () => setForm({})
  }, [id])



  return ( 
    <>
    <div className="page-header">
        {id
          ? <h1>Edit Classic</h1>
          : <><h1>Add A Classic</h1></>
        }
    </div>

      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <ClassicInput form={form} handleChange={handleChange} />
          <button type="submit" className="btn submit">Submit!</button>
        </form>
      </section>
    
    </>
   );
}
 
export default ClassicForm;