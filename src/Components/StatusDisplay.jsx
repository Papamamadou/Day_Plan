export default function StatusDisplay({status}) {

    const getColor = (status ) =>{
        let color
        switch (status ) {
          case 'done':
            color = 'rgb(186,255,201)'
            break;
        
          case 'Working on it':
            color ='rbg(255,223,186)'
            break;
           
          case 'Stuck' :
            color = 'rgb (255,179,186)'
            break;

          default :
            color = 'rgb(186,225,255 )'
        }
        return color
    }


    return (
      <div  className="status-display" style={{ backgroundColor: getColor(status)}}>
        {status}
      </div>
    )
  }