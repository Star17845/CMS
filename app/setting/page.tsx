import { Search } from '@/components/ui/search';
import { NavbarSetting } from './_components/navbarsetting';
import { SimpanButton } from './_components/smipanbutton';
export default function Page() {
  return (
    <>
      <NavbarSetting/>
    <div className="pl-46 bg-[#DBDBDB] pb-1">

        <div className="bg-[#0D1B48] w-fill h-25.5 shadow-lg">
            <h1 className="px-9.25 py-7 text-3xl text-white">Pengaturan</h1>
        </div>

        <div className="bg-white m-15 h-fit p-13.75 space-y-3">
            <h1 className="text-black font-bold text-xl">Logo</h1>
            <Search/>

            <div className="flex">
                <h1 className="text-black text-s">*</h1>
                <h1 className="text-black">Nama Instansi</h1>
            </div>
            <div>
                <input className="border-2 border-gray-200 rounded-xl p-3 w-full text-black"></input>
            </div>

            <div className="flex">
                <h1 className="text-black text-s">*</h1>
                <h1 className="text-black">Nama Aplikasi</h1>
            </div>
            <div>
                <input className="border-2 border-gray-200 rounded-xl p-3 w-full text-black"></input>
            </div>

            <div className="flex">
                <h1 className="text-black text-s">*</h1>
                <h1 className="text-black">Alamat</h1>
            </div>
            <textarea className="border-2 border-gray-200 rounded-xl p-3 w-full text-black h-52.5 resize-none"></textarea>

            <div className="flex">
                <h1 className="text-black text-s">*</h1>
                <h1 className="text-black">Kontak Person</h1>
            </div>
            <div>
                <input className="border-2 border-gray-200 rounded-xl p-3 w-full text-black"></input>
            </div>

            <div className="flex">
                <h1 className="text-black text-s">*</h1>
                <h1 className="text-black">Email</h1>
            </div>
            <div>
                <input className="border-2 border-gray-200 rounded-xl p-3 w-full text-black"></input>
            </div>

            <div className="flex justify-end mt-5">
                <SimpanButton/>
            </div>
        </div>

    </div>   
    </>
  )
}