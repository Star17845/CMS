import { Image, LayoutGrid, Link, Redo, Smile, Undo, WandSparkles } from 'lucide-react';
import { SelectParagraph } from './fonttoggle/selectparagraph';
import { BoldFont } from './fonttoggle/BoldFont';
import { ItalicFont } from './fonttoggle/ItalicFont';
import { UnderlineFont } from './fonttoggle/UnderlineFont';
import { SelectJustify } from './fonttoggle/selectjustify';

export function Deskripsi (){
return (

<div>
                    <div className="bg-white w-fill h-fit border-2 border-gray-200 rounded-t-xl p-3 lg:flex md:grid space-x-5">
                        <div className="flex justify-between">

                            <div className=" flex justify-center space-x-2">
                                <button>
                                    <Undo className="size-7 hover:bg-accent px-1 rounded-sm hover:outline-5 hover:outline-accent"/>
                                </button>
                                <button>
                                    <Redo className="size-7 hover:bg-accent px-1 rounded-sm hover:outline-5 hover:outline-accent"/>
                                </button>
                                
                            </div>

                            <div className="flex justify-center ml-3">
                                <button>
                                    {/* <svg viewBox="-51.2 -51.2 614.40 614.40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000" transform="rotate(0)" className="size-7 hover:bg-gray-300 px-0.5 rounded-sm">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.024"></g>
                                            <g id="SVGRepo_iconCarrier"> <title>ai</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd"> 
                                                <g id="icon" fill="#000000" transform="translate(64.000000, 64.000000)"> <path d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z" id="Combined-Shape"> </path> 
                                                </g> 
                                            </g> 
                                        </g>
                                    </svg> */}
                                </button>
        
                                <button>
                                    <WandSparkles className="size-7 hover:bg-accent px-1 rounded-sm hover:outline-5 hover:outline-accent"/>
                                </button>
                            </div>

                        </div>
                        
                        <div className="flex justify-between space-x-1">

                            <SelectParagraph/>

                            <div className="flex justify-center">
                                <BoldFont/>
        
                                <ItalicFont/>
        
                                <UnderlineFont/>
        
                            </div>

                        </div>
                        <div className="flex justify-between">

                            <div className=" flex justify-center space-x-2">
                                <button>
                                    <Link className="size-7 hover:bg-accent px-1 rounded-sm hover:outline-5 hover:outline-accent"/>
                                </button>
        
                                <button>
                                    <Image className="size-7 hover:bg-accent px-1 rounded-sm hover:outline-5 hover:outline-accent"/>
                                </button>
        
                                <button>
                                    <Smile className="size-7 hover:bg-accent px-1 rounded-sm hover:outline-5 hover:outline-accent"/>
                                </button>

                            <SelectJustify/>
                            </div>

                            {/* <button className="select bg-white rounded-lg px-1 text-black w-15 text-sm h-7">
                                <svg fill="#000000" viewBox="0 0 24 24" id="tag-add" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" className="icon line-color size-5">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path id="secondary" d="M18,15v6m3-3H15" style="fill: none; stroke: #000000; strokeLinecap: round; strokeLinejoin: round; strokeWidth: 2;"></path><path id="primary" d="M12,21H7a1,1,0,0,1-1-1V9l6-6,6,6v2" style="fill: none; stroke: #000000; strokeLinecap: round; strokeLinejoin: round; strokeWidth: 2;"></path>
                                    </g>
                                </svg>    
                            </button>

                            <button>
                                <svg fill="#000000" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg"  className="jam jam-stamp size-6 hover:bg-gray-300 px-0.5 rounded-sm">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M18 18v-2H2v2h16zM7 14V9a5 5 0 1 1 6 0v5h5a2 2 0 0 1 2 2v4H0v-4a2 2 0 0 1 2-2h5zm4 0V8.001l.799-.6a3 3 0 1 0-3.598 0l.799.6V14h2z"></path>
                                    </g>
                                </svg>
                            </button>

                            <button className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6 hover:bg-gray-300 px-0.5 rounded-sm">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </button> */}

                        </div>
                    </div>
                    <textarea className="border-x-2 border-b-2 border-gray-200 rounded-b-xl p-5.5 w-full text-black h-52.5 bg-linear-to-b from-gray-200 to-white resize-none" placeholder="Tulis deskripsi"></textarea>
                </div>
)
}