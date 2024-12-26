import React from 'react';
import eee from '../assets/ee.png';
import '../Components/Main.css';

function Navbar() {
    return(
        
        <div>
            

<nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={eee} class="h-8" alt="Islam logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Islam</span>
        </a>
        
        <div id="mega-menu" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                    <a href="#" class="block py-2 px-3 text-green-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-green-500 md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Asosiy</a>
                </li>
                <li>
                    <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" class="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        Fiqh <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
                    </button>
                    <div id="mega-menu-dropdown" class="absolute z-10  hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                        <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                            <ul class="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Library
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Resources
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Pro Version
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                            <ul class="space-y-4">
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Newsletter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Playground
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        License
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="p-4">
                            <ul class="space-y-4">
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Support Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Terms
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-gray-600  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-gray-700">Dua</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-gray-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-gray-700">Zikr</a>
                </li>
            </ul>
        </div>
        <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <a href="#" class="text-gray-700 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
            <a href="#" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Sign up</a>
            <button data-collapse-toggle="mega-menu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
    </div>
</nav>

{/* Navbar tugadi */}


<div>



<section className='fff'>
   
        <div class="fr  mb-4 text-4xl font-extrabold tracking-tight leading-none text-white v md:text-5xl lg:text-6xl"> 
        We believe that Islam is the true religion.


        <p class="fq text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        
        </div>
        
        <div className='fds'></div>
</section>



</div>
<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
{/* carusl tugadi */}
<div class="flex justify-center gas">
    <div className='dua rounded-xl'>
        <img class="rounded-xl" src="https://c7c8edde.rocketcdn.me/wp-content/uploads/shutterstock_85420666.jpg" alt="" />
    </div>
    <div>
<a href="#" class="block max-w-sm p-6 bg-green-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 mr-8 dark:text-white">Dua</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">
"Allahumma anta rabbi la ilaha illa anta, Khalaqtani wa ana abduka wa ana ala ahdika wa wadika ma astatat. Audhu bika min sharri ma sanatu, abu'u laka bi nimatika `alayya wa abu'u laka bi dhanbi, faghfir li fa innahu la yaghfirudh-dhunub illa anta"
"Allahumma la sahla illa ma ja'altahu sahla, wa 'anta taj'alul hazna idha shi'ta sahla" 
Morning
"As-bah-na wa as-ba-hal mulku lil-lahi rabbil-aa-la-mîn. Allahumma innî as'aluka khay-ra ha-zal-yawm, fat-ha-hu wa nas-ra-hu, wa nu-ra-hu wa bara-ka-ta-hu wa hu-da-hu" 
"Allahumma innee a3uzubika min alham wa alhuzn wa al3ajz wa alkusl wa albukhl wa aljubn wa galbah aldayn wa Galbah alrijaal" 
"Bismillahi tawakkaltu 'ala Allah, la hawla wa la quwwata illa billah" </p>
</a>
</div>
</div>


<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
{/* duo tugadi */}


















































        </div>
      
    )
}
    
    export default Navbar;