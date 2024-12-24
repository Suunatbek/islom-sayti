import React from "react";
import bi from '../assets/501.jpg';
import i from '../assets/511.jpg';
import b from '../assets/515.jpg';
import './Main.css';

function Navbar() {
    return(
        <div>
             <navbar>   
        <div class="text">



            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">_UMMAT</span>
                </a>
                <div class="flex md:order-2">
                  <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span class="sr-only">Qidiruv</span>
                  </button>
                  <div class="relative hidden md:block">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                      <span class="sr-only">Search icon</span>
                    </div>
                    
                  </div>
                  <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                      <span class="sr-only">Open main menu</span>
                      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                      </svg>
                  </button>
                </div>
                  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div class="relative mt-3 md:hidden">
                      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                      </div>
                      
                    </div>
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                      <li>
                        <a href="#" class="block py-2 px-3 text-white bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500" aria-current="page">Bo'lim</a>
                      </li>
                      <li>
                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:hover:text-violet-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Shaxsiy</a>
                      </li>
                      <li>
                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet -700 md:p-0 dark:text-white md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Yordam</a>
                      </li>
                     
                    </ul>
                  </div>
                  
                </div>
               
              </nav>
            
  
  
     </div>
        <div class="text1">
            <h1 class="color1 mt-2 text-8xl text-violet-900">S</h1>
            <h2 class="color2 mt-2 text-5xl text-violet-900">h</h2>
            <h1 class="color3 mt-9 text-5xl text-violet-900 ">_UMMAT</h1>
            <h3 class="color4  text-2xl text-violet-900 mt-20  ml-28 absolute">solih_ummat_</h3>
        </div>
        <div class="igm1 justify-around rounded-xl mt-8">
           
            <div class="a w-80 rounded-3xl"><img src={bi} alt="" /></div>
            <div class="a w-80 rounded-3xl w "><img src={i} alt="" /></div>
            <div class="a w-80 rounded-3xl"><img src={b} alt="" /></div>
        </div>
        <div class="text3 bg-violet-300 mt-10">
            <h1 class="color5 p-4 text-5xl  text-violet-950">Bizning Kitob Do'konimizda</h1>
        </div>
    </navbar> 
    <header>
        <div class="text4">
            <div class="btn1 mt-10 text-4xl">
                <div class="btn m-8"><a href="img1/index.html">Islomiy kitoblar</a></div>
                <div class="btn m-8"><a href="img2/index.html">Psixologik kitoblar</a></div>
                <div class="btn m-8"><a href="img3/index.html">Fikrlashga oid kitoblar</a></div>
                <div class="btn m-8"><a href="img4/index.html">Odob axloqiy kitoblar</a></div>
            </div>
            <div class="k ">
                <div class="w-60 bg-gradient-to-l from-violet-300 to-violet-100 text-violet-600 border border-violet-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                    <div class="col-span-2 text-lg font-bold capitalize rounded-md">
                      Tavsif title
                    </div>
                    <div class="col-span-2 rounded-md">
                      Bu turdagi kitoblarni inson o'qir ekan kishining tafakkuri, aqlan rivojlanishi va ongi, kundalik hayotimizdagi odamlardan ancha ilgarilab ketadi.Bu esa inson uchun eng oliy ne'mat...
                      
                    </div>
                    <div class="col-span-1">
                      <button class="rounded-md bg-violet-300 hover:bg-violet-600 hover:text-violet-200 duration-300 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </button>
                    </div>
                    
                  
                    </div>
            </div>
            <div class="btn2 mt-10 text-4xl">
                <div class="btn m-8"><a href="img5/index.html">Nafs haqida kitoblar</a></div>
                <div class="btn m-8"><a href="img6/index.html">Romanlar asarlar</a></div>
                <div class="btn m-8"><a href="img7/index.html">Fantastik kitoblar</a></div>
                <div class="btn m-8"><a href="img8/index.html">Tadbirkorlik kitoblar</a></div>
            </div>
        </div>
            <div class="text5 bg-violet-300">
                <h2 class="p-4 text-5xl text-violet-950">Bizdagi qulayliklar</h2>
            </div>
        <div class="text6">
            <div class="btn4">
            <div class="serial bg-gradient-to-l from-violet-300 to-violet-100 text-violet-600 border border-violet-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                <a href="https://www.ubuy.uz/uz/category/grocery-gourmet-food/beverages-16310231"> Turli xil ichimliklar</a>
            </div>
             <div class="serial oy bg-gradient-to-l from-violet-300 to-violet-100 text-violet-600 border border-violet-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                <a href="https://uzum.uz/uz/product/kitoblar-darsliklar-estetika-782300?skuid=1882385">Kitoblar uchun xatcho'plar</a>
             </div>
              <div class="serial bg-gradient-to-l from-violet-300 to-violet-100 text-violet-600 border border-violet-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                <a href="https://yaponamama.uz/uz/bukhara/categories/drinks">Turli xil yeguliklar</a>
              </div>
            </div>
        </div>
    </header>
    <main>
        <div class="text7 bg-violet-300 mt-10">
            <h1 class="p-4 text-5xl text-violet-950">Islomiy anjomlar</h1>
        </div>



       <div class="text11 mt-14">


        <div class="text8">
            <div class="btn5 text-2xl ">
                <p class="m-4 bg-gradient-to-l from-violet-300 to-violet-100 text-violet-600 border border-violet-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md"><a href="http://www.iptd-uzbekistan.uz/production/izobrazitelnaya-produktsiya/plakatlar/">Deteraktiv plakatlar</a></p>
                <br />
                <p class=" m-4 bg-gradient-to-l from-violet-300 to-violet-100 text-violet-600 border border-violet-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md"><a href="https://ildizkitoblari.uz/products/plakatlar/qalbimda-quron--jadvali">Qur'on jadvali</a></p>
                <br />
                <p class=" m-4 bg-gradient-to-l from-violet-300 to-violet-100 text-violet-600 border border-violet-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md"><a href="https://t.me/s/lavhuz/73">Lavh</a></p>
                <br />
            </div>
            <div class="btn6 text-2xl">
               <p class="m-4 bg-gradient-to-l from-violet-300 to-violet-100 text-violet-600 border border-violet-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md"> <a href="https://www.olx.uz/oz/moda-i-stil/podarki/q-suvenir/">Suvenerlar</a></p>
                
                <p class="m-4 bg-gradient-to-l from-violet-300 to-violet-100 text-violet-600 border border-violet-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md"><a href="https://uzum.uz/uz/product/tungi-chiroq-485460">Tungi chiroqlar</a></p>
                <br />
                <p class="m-4 bg-gradient-to-l from-violet-300 to-violet-100 text-violet-600 border border-violet-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md"><a href="https://uzum.uz/uz/product/antiqa-stol-chirogi-1038587">Antiqa buyumlar</a></p>
            </div>
        </div>



        <div class="text9 bg-gradient-to-l from-violet-300 to-violet-100 text-violet-600 border border-violet-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md h-full mt-14">
           


            <div class="btn8">
              <h1 class="justify-center flex text-2xl text-violet-950">Tavsif</h1>
              
                <div  class="text-violet-950">
                Men Isrofilov Sunnatbek.Yoshim 15 da.Kelajakdagi
                  qiziqishlarim menda 13 yoshimdan paydo bo'la 
                   boshlagan.Men 11 yoshimda
                  Shifokor bo'lishga maqsad qo'ygandim.Lekin 2024-10-16 kunidan boshlab 
                  meni O'zbekistonga endi kirib kelayotgan, dasturlashning o'zgacha nomi bo'lmish
                   "IT" sohasidagi kursga qo'ydilar. Yolg'on bo'lmasin  boshida qiziqishim 0% ga teng
                   edi.Ammo men balki qiziqishim ortar degan umid bilan o'qidim lekin,yo'lning oxiri ko'rinar
                    ekan menda bu sohaga borgan sari qiziqish tushdi.O'sha vaqtlar taxminan "BOOTSRAP" mavzusini o'tayotgan
                     edik.Hatto vaziyat shunday darajaga keldiki kursni yi'g'ishtirish fikri ham keldi.Alhamdulillah 
                      hozirgi kunda bu kursga qatnashayotganimga 6 oy dan oshdi men esa shu kungacha o'rganganlarimni
                       70% dan foydalanib, 2-saytimni tayyorlab bo'ldim. Bu boshqalar  uchun oddiy ish bo'lishi
                        mumkin, lekin men uchun 6 oy  davomida o'rganganlarim uchun bu natija men uchun  eng zo'r
                        natija demakdir.Men bu tavsifni yozishimdan  maqsad inson bir narsaga bog'lanib qolar ekan ayrilish  qiyin.Undan ayrilolmayapsizmi unda u bilan birlashing  shundagina o'z maqsadingizga erishasiz... 
                    </div>
            </div>
        </div>
       </div>
        


    </main>
  
   
      

<footer class="bg-white dark:bg-violet-950">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 class="mb-11 text-sm font-semibold text-gray-900 uppercase dark:text-white">_UMMAT</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-8">
                    <a href="#" class=" hover:underline">Shaxsiy</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Bo'lim</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Tur</a>
                </li>
                <li class="mb-5">
                    <a href="#" class="hover:underline">Brend</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Blogger</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Server xizmadi</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Twitter</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Facebook</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Instagram</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Yordam</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Ma'lumot</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Sayt haqida savol</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Saytda &amp; muammo bormi?</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Yuklab oling</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">iOS</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Android</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Windows</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">MacOS</a>
                </li>
            </ul>
        </div>

   
    </div>
    <div class="px-4 py-6 bg-violet-100 dark:bg-violet-900 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024 <a href="http://127.0.0.1:5500/S.H_UMMAT_/index.html">_UMMAT™</a>. Yaqinda Server Yangilandi.
        </span>
        <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
              
        </div>
        
      </div>
      
    </div>
   



        

    </footer>
        </div>
    )
}

export default Navbar;