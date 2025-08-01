import { Plus } from 'lucide-react';

export function TambahButton (){
return (
    <button className="bg-[#0D1B48] rounded-xl text-white flex py-2 px-6 text-sm space-x-3 hover:bg-[#152c76] transition duration-150 ease-in-out active:scale-90">
                        <Plus className="size-5 mx-auto"/>
                        <h1 className=''>Tambah</h1>
                    </button>
    )
}