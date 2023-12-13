export default function ProgressDisplay(progress) {
    return (
      <div className="progressDisplay"> 
        <div className="progress-bar">
          <div style={{width: progress + '%'}} className="progress-indicator">

          </div>
        </div>
      </div>
    )
  }