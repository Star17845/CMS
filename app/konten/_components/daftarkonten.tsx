import Image from 'next/image';
import { Ellipsis, Pencil, Plus } from 'lucide-react';

export function DaftarKonten (){
return (

<div className="my-8.25 bg-white w-90 h-172.75 rounded-2xl shadow-md">
                <div className="bg-[#0D1B48] w-90 h-12.5 rounded-t-2xl">
                    <div className="flex justify-between p-3.25">
                        <h1 className="text-white font-semibold text-md">Daftar Konten</h1>
                        <button className="hover:bg-gray-300 px-1 rounded-xl">
                            <Ellipsis className='size-6 stroke-gray-500'/>
                        </button>
                    </div>
                </div>

                <div className="outline-[#067C89] outline-2 h-10 m-3 rounded-xl outline-dashed text-3xl text-[#067C89] text-center hover:outline-0 hover:border-2 hover:border-[#067C89] hover:bg-[#067C89] hover:text-white active:bg-white active:text-[#067C89] select-none transition duration-150">
                    +
                </div>

                <div className="border-3 bg-[#0D1B48] rounded-2xl m-3 h-fit">
                        <div className="m-2 space-y-1">
                            <div className="flex justify-between">
                                <div className="space-y-1">
                                    <h1 className="text-white font-semibold">Pemerintah</h1>
                                    <h1 className="text-white text-sm max-w-55 font-thin">250 Ribu Peserta PBI di Banten Dinonaktifkan, PDIP: Warga Miskin Jangan Jadi Korban</h1>
                                </div>
                                <div className="bg-green-200 rounded-xl size-21.25 overflow-hidden">
                                    <Image 
                                        src="/News4.png" 
                                        width={90}
                                        height={85}
                                        className="object-top size-full object-cover pointer-events-none select-none"
                                        alt="Screenshots of the dashboard project showing desktop version"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between space-x-10">
                                    <div className="bg-green-400 rounded-full size-6.5 border-2 border-white overflow-hidden">
                                        <Image 
                                            src="/premium_photo-1689568126014-06fea9d5d341.jpeg" 
                                            width={26}
                                            height={26}
                                            className="object-top size-full object-cover pointer-events-none select-none"
                                            alt="Screenshots of the dashboard project showing desktop version"
                                        />
                                    </div>
                                    <div className="flex justify-between space-x-7">
                                        <button className="bg-white rounded-full size-6.5 hover:bg-gray-300">
                                            <Pencil className="size-4 mx-auto stroke-[#067C89]"/>
                                        </button>

                                        <button className="bg-white rounded-full size-6.5 hover:bg-gray-300">
                                            <Plus className="size-4 mx-auto stroke-[#067C89]"/>
                                        </button>   
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
)
}