import { Ellipsis } from 'lucide-react';
import { UsersByDayChart } from './charts/UsersByDayChart';
export default function StatistikKunjungan() {
  return (
    <>
    <div className="bg-white w-175.5 h-102 rounded-2xl">
                              <div className="flex justify-between p-6.25">
                                  <h1 className="text-black font-semibold text-xl">Statistik Kunjungan</h1>
                                  <button className="hover:bg-gray-300 p-1 rounded-xl">
                                      <Ellipsis className='size-6 stroke-gray-500'/>
                                  </button>
                              </div>
                              <div className="flex justify-center">
                                        <UsersByDayChart/>
                              </div>
                          </div></>
  );
}