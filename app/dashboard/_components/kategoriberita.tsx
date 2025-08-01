import { Ellipsis } from 'lucide-react';
import { OrdersByDayChart } from './OrdersByDayChart';

export default function KategoriBerita() {
  return (
    <div className="bg-white lg:w-107.5 h-102 rounded-2xl md:w-175.5">
                          <div className="flex justify-between p-6.25">
                              <h1 className="text-black font-semibold text-xl">Kategori Berita</h1>
                              <button className="hover:bg-gray-300 p-1 rounded-xl">
                                  <Ellipsis className='size-6 stroke-gray-500'/>
                              </button>
                          </div>
                            <OrdersByDayChart/>
                      </div>
  );
}