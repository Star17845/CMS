import Image from 'next/image';
import { Clock, Ellipsis, MessageCircleMore, Paperclip } from 'lucide-react';

export function KontenTerbit (){
return (

<div className="my-8.25 bg-white w-90 h-172.75 rounded-2xl shadow-md object-center">
                <div className="bg-[#0D1B48] w-90 h-12.5 rounded-t-2xl">
                    <div className="flex justify-between p-3.25">
                        <h1 className="text-white font-semibold text-md">Konten Terbit</h1>
                        <button className="hover:bg-gray-300 px-1 rounded-xl">
                            <Ellipsis className='size-6 stroke-gray-500'/>
                        </button>
                    </div>
                </div>
                <div>
                    <div className="border-3 border-gray-200 rounded-2xl m-3 h-fit">
                        <div className="m-2">
                            <div className="flex justify-between">
                                <h1 className="text-[#223759] font-semibold">Layanan Publik</h1>
                                <div className="flex justify-evenly mr-2">
                                    <Clock/>
                                    <h1 className="text-black font-thin">12 Hari</h1>
                                </div>
                            </div>
                            <div className="flex justify-between mt-2">
                                <h1 className="text-black text-sm max-w-55 font-thin">Setelah Relokasi Pedagang, Pemkot Serang Siagakan  Satpol PP di Pasar Rau</h1>
                                <div className="bg-green-200 rounded-xl size-21.25 overflow-hidden">
                                    {/* <img src="Assets/news3.png" className="h-full pointer-events-none select-none"> */}
                                    <Image 
                                        src="/news3.png" 
                                        width={90}
                                        height={85}
                                        className="h-full pointer-events-none select-none"
                                        alt="Screenshots of the dashboard project showing desktop version"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-start space-x-10">
                                <div className="flex">
                                    <Paperclip/>
                                    <h1 className="text-black">5</h1>
                                </div>

                                <div className="flex">
                                    <MessageCircleMore/>
                                    <h1 className="text-black">8</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="outline-[#067C89] outline-2 h-10 m-3 rounded-xl outline-dashed text-3xl text-[#067C89] text-center hover:outline-0 hover:border-2 hover:border-[#067C89] hover:bg-[#067C89] hover:text-white active:bg-white active:text-[#067C89] select-none transition duration-150">
                    +
                </div>
            </div>
)
}