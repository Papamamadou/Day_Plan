import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const TicketPage = ({ editMode }) => {

  const [formData, setFormData] = useState({
    status: 'not started',
    progress: 0,
    timestamp: new Date().toISOString(),
  })
 
  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  console.log(formData)

  const handleSubmit = async (e) => {
    console.log('submitted')
  }



  useEffect(() => {
    if (editMode) {
      fetchData()
    }
  }, [])

  console.log('EDITcategories', categories)
  console.log('formData', formData.status)
  console.log('formData.status', formData.status === 'stuck')
  return (
    <div className="ticket">
      <h1>{editMode ? 'Update Your Ticket' : 'Create a Ticket'}</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.title}
            />

           
          </section>
        </form>
      </div>
    </div>
  )
}

export default TicketPage
