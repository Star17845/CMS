import Image from 'next/image';
import Link from 'next/link';
import { LayoutGrid } from 'lucide-react';
import { StickyNote } from 'lucide-react';
import { ImagePlus } from 'lucide-react';
import { ClipboardList } from 'lucide-react';
import { Settings } from 'lucide-react';

export function NavbarDashboard (){
return (

<div className="bg-white h-screen w-fit fixed">
        <Image 
            src="/pemkot.png" 
            width={94}
            height={83}
            className="mx-auto mb-[32px] mt-[15px] object-contain pointer-events-none select-none"
            alt="Screenshots of the dashboard project showing desktop version"
            />
          <Link href="/dashboard" className="flex justify-start text-lg bg-linear-to-r from-gray-400/50 via-white to-white px-7 py-3 transition delay-150 duration-300 space-x-2">
              <div>
                  <LayoutGrid className='size-7 stroke-[#0D1B48]'/>
              </div>
              <h1 className="text-[#0D1B48] font-semibold text-md">
                  Dashboard
              </h1>
          </Link>
          <Link href="/konten" className="flex justify-start text-lg hover:bg-linear-to-r hover:from-gray-400/50 hover:via-white hover:to-white px-7 py-3 transition delay-150 duration-300 space-x-2">
              <div>
                  <StickyNote className='stroke-[#0D1B48] size-7'/>
              </div>
              <h1 className="text-[#0D1B48] font-semibold text-md">
                  Konten
              </h1>
          </Link>
          <Link href="/galeri" className="flex justify-start  text-lg hover:bg-linear-to-r hover:from-gray-400/50 hover:via-white hover:to-white px-7 py-3 transition delay-150 duration-300 space-x-2">
              <div>
                  <ImagePlus className='stroke-[#0D1B48] size-7'/>
              </div>
              <h1 className="text-[#0D1B48] font-semibold text-md">
                  Galeri
              </h1>
          </Link>
          <Link href="/agenda" className="flex justify-start text-lg hover:bg-linear-to-r hover:from-gray-400/50 hover:via-white hover:to-white px-7 py-3 transition delay-150 duration-300 space-x-2">
              <div>
                  <ClipboardList className='stroke-[#0D1B48] size-7'/>
              </div>
              <h1 className="text-[#0D1B48] font-semibold text-md">
                  Agenda
              </h1>
          </Link>
          <Link href="/setting" className="flex justify-start text-lg hover:bg-linear-to-r hover:from-gray-400/50 hover:via-white hover:to-white px-7 py-3 transition delay-150 duration-300 space-x-2">
              <div>
                  <Settings className='stroke-[#0D1B48] size-7'/>
              </div>
              <h1 className="text-[#0D1B48] font-semibold text-md">
                  Pengaturan
              </h1>
          </Link>
      </div>
)
}