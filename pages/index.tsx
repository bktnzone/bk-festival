import {useState} from 'react'
import {useRouter} from 'next/router'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

export default function Home({action = '/card'}){
   const router = useRouter()
   const [query, setQuery] = useState('')

   const handleParam = setValue => e => setValue(e.target.value)

   const handleSubmit = preventDefault(() => {
     router.push({
       pathname: action,
       query: {q: query},
     })
   })

   return (

    <div className='md:flex bg-white rounded-lg p-6'>

    <div className="w-full min-h-screen bg-gray-100">
        <div
          className="max-w-2xl mx-auto flex flex-col items-center justify-center px-4"
        >
     <h1 className="text-blue-900 font-black text-5xl  text-center">
    <img className="bg-indigo-700" src="http://bkyouth.org/wp-content/uploads/2018/09/logo_white-2.png" />
    </h1>
          <h2 className="text-blue-900 font-black text-5xl  text-center">
            Special Card for You
          </h2>
          <h2 className="text-indigo-700 text-sm font-semibold italic">
            Get your blessing by entering your name
          </h2>
    
         
          <div className=" w-full mt-6 flex rounded-md shadow-sm">
            <div className="relative flex-grow focus-within:z-10">

           

            <form onSubmit={handleSubmit}>

            <div className=" w-full mt-6 flex rounded-md shadow-sm">
              <div className="relative flex-grow focus-within:z-10">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 
                </div> 
                <input placeholder="Your name" value={query}
                onChange={handleParam(setQuery)} className="text-gray-700 py-3 form-input block w-full rounded-none rounded-l-md pl-5 transition ease-in-out duration-150 font-semibold sm:text-sm sm:leading-5" />

                </div>
                <button className="group -ml-px relative inline-flex items-center px-3 py-3 border border-indigo-300 text-sm leading-5 font-medium rounded-r-md text-white bg-indigo-700 hover:text-indigo-700 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-indigo-300 active:bg-gray-100 active:text-indigo-700 transition ease-in-out duration-150">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white h-5 w-5 group-hover:text-indigo-700"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg> <span className="ml-2 text-sm font-semibold"></span>
                </button>
                </div>

              </form>
            </div>
    
          </div>
          <div className="mt-2 max-w-xl text-xs font-medium leading-5 text-gray-500 overflow-hidden">
                        <p>
                            @Copyrights 2020. Brahma Kumaris - Youth Wing
                       
                        </p>
                    </div>
                    <div className="mt-1 text-sm leading-5 text-center">
                        <a href="https://bkyouth.org" target="_blank" className="text-center font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                            https://bkyouth.org
                        </a>
                    </div>
        </div>
       
      </div>
         
        </div>
     
   )
}


