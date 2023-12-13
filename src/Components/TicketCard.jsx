import { Link } from 'react-router-dom'
import AvatarDisplay from './AvatarDisplay'
import StatusDisplay from './StatusDisplay'
 import PriorityDisplay from './PriorityDisplay'
 import ProgressDisplay from './ProgressDisplay'
 import DeleteBlock from './DeleteBolck'
export default function TicketCard( { color , ticket}) {
    return (
      <div className="ticket-card">
          <Link to={"/ticket/${ticket.documentId}"} id='link'>
          
            <h3>{ticket.title}</h3>
            <AvatarDisplay ticket={ticket}/>
            <StatusDisplay status={ticket.status}/>
            <PriorityDisplay priority={ticket.priority}/>
            <ProgressDisplay progress={ticket.progress}/>
          </Link>
          <DeleteBlock/>
      </div>
    )
  }