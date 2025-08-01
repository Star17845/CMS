import { Search } from 'lucide-react';

export function SearchGaleri (){
return (
    <label className="input bg-white flex space-x-3 py-1 px-2 rounded-xl">
                <Search className='stroke-gray-500'/>
                    <input type="search" className="text-gray-500 grow" placeholder="Search" />
            </label>
    )
}