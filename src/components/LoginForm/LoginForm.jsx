import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      
    >
      <div >
        <label htmlFor="email">Email</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div >
        <label htmlFor="password" >Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <button>Log In</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
