import {useState} from 'react'
import {useRouter} from 'next/router'

const preventDefault = f => e => {
    e.preventDefault()
    f(e)
}

export default({
    action = '/search'
}) => {
    const router = useRouter()
    const [query, setQuery] = useState('')

    const handleParam = setValue => e => setValue(e.target.value)

    const handleSubmit = preventDefault(() => {
        router.push({
            pathname: action,
            query: {
                q: query
            }
        })
    })

    return (
        <div className='md:flex bg-white rounded-lg p-6'>

            <div className="w-full min-h-screen bg-gray-100">
                <div className="max-w-2xl mx-auto flex flex-col items-center justify-center px-4">


                    <div className="py-6 w-full">

                        <div className="my-3 bg-white shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-green-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                    <h3 className=" px-2 text-lg leading-6 font-semibold text-gray-900">
                                        Your Special Card is here
                                    </h3>
                                </div>

                            </div>
                        </div>
                    
                        <div className="my-3 bg-white shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center">
                                <img   width="888" height="630" src="https://lh3.googleusercontent.com/pw/ACtC-3e9WBWc0_PVCCktgDirRABP33ggn522nS2KwL_LgJ2_58p6s2fvkUhOImBYlKE4_mO-IM9PLGlTrbBmqYTe9YKOe-xcr_p0WgdetYK_mbRrdf-OZ4uE7PKyCeGS0KSLgwBuzjtJ_SMKIARuSA9USRJCVw=w888-h630-no?authuser=0" data-atf="false" data-iml="12638.099999996484"    />
                                    
                                </div>
                              
                           
                            </div>
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
