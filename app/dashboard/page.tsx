import { DatePicker } from '../agenda/_components/DatePicker';
import { NavbarDashboard } from './_components/navbardashboard';
import { Stats } from './_components/stats';
import StatistikKunjungan from './_components/statistikkunjungan';
import KategoriBerita from './_components/kategoriberita';
import BeritaTerbaru from './_components/beritaterbaru';
import TopBerita from './_components/topberita';
export default function Page() {
  return (
    <>
    <title>Dashboard</title>
    <NavbarDashboard/>
      <div className="bg-[#DBDBDB] pl-46 w-full">
              <div className="flex justify-between py-8">
                  <h1 className="text-black px-10 text-2xl font-semibold">
                      Dashboard
                  </h1>

                    <div className='mx-10'>
                  <DatePicker/>
                    </div>

              </div>

              <Stats/>

              <div className="grid py-7.5 space-y-7.5">

                  <div className="lg:flex justify-evenly md:grid md:space-y-5">
                      <StatistikKunjungan/>
                      <KategoriBerita/>
                  </div>

                  <div className="lg:flex justify-evenly md:grid md:space-y-5">

                      <BeritaTerbaru/>
                      <TopBerita/>
                  </div>

              </div>
          </div></>
  );
}