import TicketCard from '../Components/TicketCard'
export default function Dashboard() {

  const tickets = [
    {
      category : 'Q1 2022' ,
      color : 'red' ,
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

    const color = [
      'rgb(255,179,186)',
      'rgb(255,223,186)',
      'rgb(255,255,186)',
      'rgb(186,255,201)',
      'rgb(186,255,255)'
    ]

    const uniqueCategories = [
      ...new Set (tickets?.map(({category}) => category))
    ]
      console.log(uniqueCategories)
    return (
      <div className="dashboard">
        <h1>Day Plan</h1>
        <div className="ticket-container ">
          {tickets && uniqueCategories?.map((uniqueCategories , categoryIndex)=>(
            <div key={categoryIndex}>
              <h3>{uniqueCategories}</h3>
              {tickets.filter(ticket => ticket.category === uniqueCategories)
                .map((filteredTicket, _Index) => (
                  <TicketCard
                    id={_Index}
                    color={color[categoryIndex] || color[0]}
                    ticket={filteredTicket}
                  />
                ))
              }
            </div>
          ))}
        </div>
      </div>
    )
  }