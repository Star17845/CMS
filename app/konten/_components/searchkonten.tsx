import { Search } from 'lucide-react';

export function SearchKonten (){
return (
    <label className="input bg-[#0D1B48] mb-3 flex space-x-3 py-1 px-2 rounded-xl">
                <Search className='stroke-gray-500'/>
                    <input type="search" className="text-white grow" placeholder="Search" />
            </label>
    )
}