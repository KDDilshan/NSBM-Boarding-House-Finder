import React from 'react'
import './boardingRight.css'

export default function BoardingRight() {
  return (
    <div className='rightPaneContainer'>
      <img
        src="https://maps.googleapis.com/maps/api/staticmap?zoom=12&size=1200x600&markers=color:yellow|label:N|6.911037,79.8849499&markers=color:green|label:G|NSBM+Green+University&markers=color:blue|label:S|6.9146828,79.9703696&markers=color:red|label:C|6.9153916,79.9581354&key=AIzaSyDMqp63TLlCEnN148U6CHAEhmu-U1NZxvw"
        alt=""
        className="mapImgBpage"
        style={{ width: '600px', height: '500px' }}
      />
    </div>
  )
}
