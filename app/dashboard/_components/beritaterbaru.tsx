import { Ellipsis } from 'lucide-react';
import { TableDashboard } from './table';
export default function BeritaTerbaru() {
  return (
    <div className="bg-white w-175.5 h-83.75 rounded-2xl">
                              <div className="flex justify-between px-6.25 pt-6.25 pb-2">
                                  <h1 className="text-black font-semibold text-xl">Berita Terbaru</h1>
                                  <button className="hover:bg-gray-300 p-1 rounded-xl">
                                     <Ellipsis className='size-6 stroke-gray-500'/>
                                  </button>
                              </div>
                              <div className="flex justify-center mx-4">
                                <TableDashboard/>
                              </div>
                          </div>
  );
}