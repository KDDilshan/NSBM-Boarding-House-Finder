import React from 'react'
import './aboutUsCom.css'
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import { useForm } from 'react-hook-form';

export default function AboutUsCom() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div className="aboutUsPageContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
        <span className="formTopic">Contact Us</span>
          <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
          <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
          <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
          <textarea placeholder='Send your message' {...register} />

          <input type="submit" />
        </form>
        <div className='aboutUsContainer'>
        <div className="topic1">
          <span className="topicName1">Who We Are......?</span>
          <hr className="underline" />
        </div>
        <div className="descriptionContainer">
          <p>Welcome to the BoardSphere ! 
            This web platform is designed to simplify the process of finding 
            suitable boarding accommodations near the NSBM Campus premises.
            Whether you are a boarding house owner looking to showcase your spaces
              or a student in search of the perfect living arrangement, this platform has you covered </p>
        </div>
        <div className="topic2">
          <span className="topicName2">Meet The Team</span>
        </div>
        <div className="memberImages">
          <div className="firstRow">
            <AccountBoxTwoToneIcon className='memberIcon'/>
            <AccountBoxTwoToneIcon className='memberIcon'/>
            <AccountBoxTwoToneIcon className='memberIcon'/>
          </div>
          <div className="secondRow">
            <AccountBoxTwoToneIcon className='memberIcon'/>
            <AccountBoxTwoToneIcon className='memberIcon'/>
            <AccountBoxTwoToneIcon className='memberIcon'/>
          </div>
        </div>
      </div>
    </div>
    
  )
}
