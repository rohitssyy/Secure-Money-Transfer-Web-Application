

export function ButtonC({label , onclick}) {
    

    return (
            
    <button className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-2" onClick={onclick}>{label}</button>
    
    )
}