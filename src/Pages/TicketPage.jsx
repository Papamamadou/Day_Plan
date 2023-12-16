const TicketPage =() => {

  const editMode = false
    return (
      <div className="ticket">
        <h1>{editMode ? 'Update Your Ticket' : 'Create a Ticket'}</h1>
      </div>
    )
  }
  export default TicketPage