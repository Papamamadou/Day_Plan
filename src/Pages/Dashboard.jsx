import TicketCard from '../Components/TicketCard'
const Dashboard = () => {
 
  const tickets = [
    {
      category : 'Q1 2022' ,
      color : 'blue' ,
      title : 'Nfl Safe',
      owner : 'Mamadou',
      avatar :'../images/avatar.png',
      status :'Done',
      priority :'5',
      progress :'40',
      description :'Make a Video',
      timestamp : '2022-02-11T07:36:17+0000 ' ,
    },
    {
      category : 'Q1 2022' ,
      color : 'red' ,
      title : 'Runtime',
      owner : 'Mamadou',
      avatar :'../images/avatar.png',
      status :'Working on it',
      priority :'2',
      progress :'20',
      description :'Buy new outfit',
      timestamp : '2022-02-13T07:36:17+0000 ' ,
    },
    {
      category : 'Q3 2022' ,
      color : 'Blue' ,
      title : 'Travel',
      owner : 'Mamadou',
      avatar :'../images/avatar.png',
      status :'Done',
      priority :'2',
      progress :'20',
      description :'Make a Vlog',
      timestamp : '2022-02-11T07:36:17+0000 ' ,
    }
  ]

  const colors = [
    'rgb(255,179,186)',
    'rgb(255,223,186)',
    'rgb(255,255,186)',
    'rgb(186,255,201)',
    'rgb(186,225,255)',
  ]

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ]

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Dashboard