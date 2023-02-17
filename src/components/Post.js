import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Post = () => {

  const navigate = useNavigate();
  const [hiring, setHiring] = useState({
    company: '',
    design: '',
    salary: '',
    location: '',
    contact: '',
  });

  const handelHiringInput = (e) => {
    setHiring({
      ...hiring,
      [e.target.name]: e.target.value.trim()
    });
  };

  const renderSearchPage = () => {
    navigate('/search')
  }

  const handelPostData = () => {
    fetch('/api/hiring', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        company: hiring.company,
        design: hiring.design,
        salary: hiring.salary,
        location: hiring.location,
        contact: hiring.contact,
      }),
    });
  }

  return (

    <div className='w-[60%] display-block m-auto mt-[5rem] shadow-md'>
      <form className='flex flex-col p-8'>

        <label className='text-cyan-700 font-medium text-lg'>
          Company/Org
        </label>

        <input type='text' className='border-2 p-2 mt-1' name='company' value={hiring.company}
          onChange={(e) => handelHiringInput(e)} />

        <label className='text-cyan-700 font-medium text-lg mt-2'>
          Designation
        </label>

        <input type='text' className='border-2 p-2 mt-1' name='design' value={hiring.design}
          onChange={(e) => handelHiringInput(e)} />

        <label className='text-cyan-700 font-medium text-lg mt-2'>
          Salary
        </label>

        <input type='text' className='border-2 p-2 mt-1' name='salary' value={hiring.salary}
          onChange={(e) => handelHiringInput(e)} />

        <label className='text-cyan-700 font-medium text-lg mt-2'>
          Location
        </label>

        <input type='text' className='border-2 p-2 mt-1' name='location' value={hiring.location}
          onChange={(e) => handelHiringInput(e)} />

        <label className='text-cyan-700 font-medium text-lg mt-2'>
          Contact
        </label>

        <input type='text' className='border-2 p-2 mt-1' name='contact' value={hiring.contact}
          onChange={(e) => handelHiringInput(e)} />

        <button className='bg-cyan-600 text-white py-1 px-4 mt-4
        hover:bg-cyan-500'
          type='submit'
          onClick={handelPostData} >
          Post Hiring
        </button>

        <button className='bg-cyan-600 text-white py-1 px-4 mt-4
        hover:bg-cyan-500'
          onClick={renderSearchPage} >
          Or Search Hiring
        </button>

      </form>
    </div>

  )
}

export default Post
