import { TableGaleri } from './_components/table';
import { NavbarGaleri } from './_components/navbargaleri';
import { SearchGaleri } from './_components/searchgaleri';
import { TambahButton } from './_components/tambahbutton';
export default function Page() {
  return (
    <>
    <NavbarGaleri/>
    <div className="pl-46 bg-[#DBDBDB] pb-1 min-h-screen">

        <div className="bg-[#0D1B48] w-fill h-25.5 shadow-lg">
            <h1 className="px-9.25 py-7 text-3xl text-white">Galeri</h1>
        </div>

        <div className="mx-14.25 mt-33">
            <div className="flex justify-between">
                <TambahButton/>
                <SearchGaleri/>
            </div>
            

            <div className="bg-white my-7.75 p-3">
                    <div className='m-3'>
                        <TableGaleri/>
                    </div>
                    <div className="flex justify-end p-4 space-x-5">
                        <h1 className="my-auto text-black font-light">Rows per page:</h1>
                        <select className="select w-20 bg-white text-black border-1 border-gray-400">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                        </select>
                        <h1 className="my-auto text-black font-light">1 - 1 of 1</h1>
                        <button disabled>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-4 disabled:fill-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
            </div>

        </div>
    </div>
    </>
  )
}