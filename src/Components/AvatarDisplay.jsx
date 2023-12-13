import blankAvatar from '../images/blankAvatar.png'
export default function AvatarDisplay({ticket}) {
    return (
      <div className="avatar-container">
        <div className="img-container">
          <img src={ticket.avatar? ticket.avatar : blankAvatar} alt={'Photo of' + ticket.owner }/>
        </div>
      </div>
    )
  }