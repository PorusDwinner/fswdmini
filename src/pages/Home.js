import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const renderPostPage =() => {
        navigate('/post')
    }

    const renderSearchPage = () => {
        navigate('/search')
    }

  return (
    <div className='w-[60%] h-[20rem] display-block m-auto mt-[10rem] p-8 shadow-2xl'>
      
        <div className='flex justify-around'>
            <div className=' text-4xl text-emerald-600 font-medium leading-[20rem]
            hover:cursor-pointer'
            onClick={renderPostPage}>
                Post
            </div>

            <div className=' text-4xl text-emerald-600 font-medium leading-[20rem]
            hover:cursor-pointer'
            onClick={renderSearchPage}>
                Search
            </div>
        </div>

    </div>
  )
}

export default Home