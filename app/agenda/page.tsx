import Link from 'next/link';
import { DatePicker } from './_components/DatePicker';
import { Search } from '@/components/ui/search';
import { SelectScrollable } from '@/components/ui/selectscrollable';
import { ArrowLeft, Redo, Undo } from 'lucide-react';
import { NavbarAgenda } from './_components/navbaragenda';
import { Deskripsi } from './_components/deskripsi';
import { SimpanButton } from './_components/smipanbutton';
export default function Page() {
  return (
    <>
    <NavbarAgenda/>
    <div className="pl-46 bg-[#DBDBDB] pb-1">

        <div className="bg-[#0D1B48] w-fill h-25.5 shadow-lg">
            <h1 className="px-9.25 py-7 text-3xl text-white">Formulir Data</h1>
        </div>

        <div className="bg-white pb-10 m-7 h-fit space-y-3">
            <div className="bg-[#A7A7A7] w-fill h-fit shadow-lg">
                <Link href="/dashboard">
                    <button className="flex px-9.25 py-3 space-x-3 hover:underline text-black">
                        <ArrowLeft className='size-7'/>
                        <h1 className="text-lg text-black">Kembali</h1>
                    </button>
                </Link>
            </div>
            

            <div className="bg-white mx-15 h-fit space-y-3">
                <h1 className="text-black font-bold">Nama Aplikasi</h1>
                <div>
                    <input className="border-2 border-gray-200 rounded-xl p-3 w-full text-black"></input>
                </div>

                <h1 className="text-black font-bold">Rentang Tanggal</h1>
                <DatePicker/>

                <h1 className="text-black font-bold">Deskripsi</h1>
                <Deskripsi/>


                <h1 className="text-black font-bold">Lokasi</h1>
                <SelectScrollable/>
                <h1 className="text-black font-bold">Gambar</h1>
                <Search/>

                <div className="flex justify-end mt-5">
                <SimpanButton/>
            </div>
            </div>

        </div>
    </div>
    </>
  )
}