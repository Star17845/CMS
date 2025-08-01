import { Ellipsis } from 'lucide-react';
import Image from 'next/image';
export default function TopBerita() {
  return (
    <div className="bg-white lg:w-107.5 h-83.75 rounded-2xl md:w-175.5">
                          <div className="flex justify-between p-6.25">
                              <h1 className="text-black font-semibold text-xl">Top Berita</h1>
                              <button className="hover:bg-gray-300 p-1 rounded-xl">
                                  <Ellipsis className='size-6 stroke-gray-500'/>
                              </button>
                          </div>
                          <div className="space-y-7 px-5">
                              <a href="#" className="flex justify-start space-x-5">
                                  <div className="bg-green-500 w-27 h-23 rounded-2xl relative overflow-hidden">
                                      <Image 
                                        src="/news1.png" 
                                        width={108}
                                        height={96}
                                        className="object-top size-full object-cover pointer-events-none select-none"
                                        alt="Screenshots of the dashboard project showing desktop version"
                                        />
                                  </div>
                                  <div>
                                      <h1 className="text-black lg:w-70 hover:underline md:my-5 lg:my-0">Pembongkaran Bangunan Yang Terdampak Normalisasi, Pemkot Serang Lakukan Secara Bertahap</h1>
                                  </div>
                              </a>

                              <a href="#" className="flex justify-start space-x-5">
                                  <div className="bg-green-500 w-27 h-23 rounded-2xl relative overflow-hidden">
                                      <Image 
                                        src="/news2.png" 
                                        width={108}
                                        height={96}
                                        className="object-top size-full object-cover pointer-events-none select-none"
                                        alt="Screenshots of the dashboard project showing desktop version"
                                        />
                                  </div>
                                  <div>
                                      <h1 className="text-black lg:w-70 hover:underline md:my-5 lg:my-0">Pemkot Serang Masuki Tahap Perencanaan Pembentukan Satgas Premanisme Kota Serang.</h1>
                                  </div>
                              </a>
                          </div>
                      </div>
  );
}