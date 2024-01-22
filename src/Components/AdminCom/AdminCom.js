import React from 'react'
import './adminCom.css'
import {useState} from 'react'

export default function AdminCom() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <div className='panelContainer'>
      <div className="imagesInput">
        <label className='inputName'>Images*</label>
        <div className="imageInput">
            <input type="file" onChange={handleChange} />
            <img src={file} alt=''/> 
        </div>
      </div>
      <div className="descriptionInput">
        <label className='inputDescription'>Description*</label>
        <div className="DescriptionInput">
            <input type='text'/>
        </div>
      </div>
      <div className="locationInput">
        <label className='inputLocation'>Location*</label>
        <div className="locationInput">
            <input type='text'/>
        </div>
      </div>

    </div>
  )
}
