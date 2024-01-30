import React from 'react'
import './adminCom.css'
import {useState} from 'react'

export default function AdminCom() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [formData, setFormData] = useState({
      description:'',
    })

    const HandleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = async(event) => {
      event.preventDefault();
      
      try {
        const response = await fetch('http://localhost:5000/v2/api/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Form submitted successfully');
          // Optionally, you can handle the success response from the backend
        } else {
          console.error('Failed to submit form');
          // Optionally, you can handle the error response from the backend
        }
      } catch (error) {
        console.log('Error submitting form:', error);
        // Handle other potential errors, such as network issues
      }
  
    };
  return (
    <div className='panelContainer'>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
            <div className="imagesInput">
              <label className='inputName'>Images*</label>
              <div className="ImageInput">
                  <input type="file" onChange={handleChange} />
                  <img src={file} alt=''/> 
              </div>
            </div>
            <div className="descriptionInput">
              <label className='inputDescription'>Description*</label>
              <div className="DescriptionInput">
                  <textarea className='desInput' name='description' onChange={HandleChange}/>
              </div>
            </div>
            <div className="locationInput">
              <label className='inputLocation'>Location*</label>
              <div className="LocationInput">
                  <input type='text' placeholder='Add Your Location' className='locInput'/>
              </div>
            </div>
        </div>
        <div className="submitButton">
          <button type="submit" class="signupbtn" className='button'>Submit</button>
        </div>
      </form>
      

    </div>
  )
}
