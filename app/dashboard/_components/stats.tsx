import Image from 'next/image';
export function Stats (){
return (

<div className=" lg:flex justify-center mx-auto lg:space-x-8 md:grid md:space-y-8">
                  <div className="flex justify-around space-x-8">
                      <div className="bg-[#0D1B48] rounded-2xl w-67 h-29">
                          <div className="flex justify-start space-x-5 pt-7 pl-5">
                              <Image 
                                src="/photo_3844184 1.png" 
                                width={60}
                                height={60}
                                className="object-contain pointer-events-none select-none"
                                alt="Screenshots of the dashboard project showing desktop version"
                                />
                              <div className="text-white/70">
                                  <h1 className="text-xl font-bold">
                                      178+
                                  </h1>
                                  <h1 className="text-sm">
                                      Jumlah Postingan
                                  </h1>
                              </div>
                          </div>
                      </div>

                      <div className="bg-[#0D1B48] rounded-2xl w-67 h-29">
                          <div className="flex justify-start space-x-5 pt-8 pl-5">
                              <Image 
                                src="/bar-chart_887028 1.png" 
                                width={60}
                                height={60}
                                className="object-contain pointer-events-none select-none"
                                alt="Screenshots of the dashboard project showing desktop version"
                                />
                              <div className="text-white/70">
                                  <h1 className="text-xl font-bold">
                                      99+
                                  </h1>
                                  <h1 className="text-sm">
                                      Statistik Kunjungan
                                  </h1>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="flex justify-around space-x-8">
                      <div className="bg-[#0D1B48] rounded-2xl w-67 h-29">
                          <div className="flex justify-start space-x-5 pt-7 pl-5">
                              <Image 
                                src="/chat_5264035 1.png" 
                                width={60}
                                height={60}
                                className="object-contain pointer-events-none select-none"
                                alt="Screenshots of the dashboard project showing desktop version"
                                />
                              <div className="text-white/70">
                                  <h1 className="text-xl font-bold">
                                      55
                                  </h1>
                                  <h1 className="text-sm">
                                      Komentar Terbaru
                                  </h1>
                              </div>
                          </div>
                      </div>

                      <div className="bg-[#0D1B48] rounded-2xl w-67 h-29">
                          <div className="flex justify-start space-x-5 pt-7 pl-5">
                              <Image 
                                src="/menu_10469578 1.png" 
                                width={60}
                                height={60}
                                className="object-contain pointer-events-none select-none"
                                alt="Screenshots of the dashboard project showing desktop version"
                                />
                              <div className="text-white/70">
                                  <h1 className="text-xl font-bold">
                                      3+
                                  </h1>
                                  <h1 className="text-sm">
                                      Berita Terbaru
                                  </h1>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
)
}