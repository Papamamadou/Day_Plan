const DeleteBlock = ({ documentId }) => {

  const deleteTicket = () => {
    console.log('Deleted')
  }
  return (
    <div className="delete-block">
      <div className="delete-icon" onClick={deleteTicket}>✖</div>
      </div>
  )
}

export default DeleteBlock