
import { SelectKonten } from './_components/selectkonten';
import { KontenTerbit } from './_components/kontenterbit';
import { DaftarKonten } from './_components/daftarkonten';
import { ReviewKonten } from './_components/reviewkonten';
import { SearchKonten } from './_components/searchkonten';
import { NavbarKonten } from './_components/navbarkonten';
export default function page(){
    return (
        <>
        <NavbarKonten/>
    <div className="pl-46 bg-[#DBDBDB] pb-1 w-full">

    <div className="bg-[#0D1B48] w-fill h-25.5 shadow-lg">
        <h1 className="px-9.25 py-7 text-3xl text-white">Konten</h1>
    </div>
    <div className="mx-11.5 my-10.25 border-t-2 border-[#0D1B48]">
        <div className="space-x-25.5 pt-7.5 flex">
            <SearchKonten/>
                    <SelectKonten/>
        </div>
        <div className="lg:flex justify-between space-x-10 md:grid">
            <KontenTerbit/>
            <DaftarKonten/>
            <ReviewKonten/>
        </div>
    </div>
  </div>
        </>
    )
}