import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'whatwg-fetch';

const Search = () => {

  const navigate = useNavigate();
  const [hire , setHire] = useState();

  const renderPostPage = () => {
    navigate('/post')
  }

  useEffect(() => {
    const fetchData = async() => {
    const result = await fetch('/api/companies')
    const data = result.json();
    setHire(data);
    };
    fetchData();
  },[]);

  console.log(hire);
  return (
    <div className='w-[60%] display-block m-auto mt-[5rem]'>
      {/* <div>
        {
          hire?.map((ele , index) => (
            <div className='flex' key={index}>
              {ele.company}
            </div>
          ))
        }
      </div> */}

       <h4 className='bg-cyan-600 py-1 px-4 text-white text-center mt-4 mb-4'
       onClick={renderPostPage} >
          Post Hiring
        </h4>

    </div>
  )
}

export default Search
