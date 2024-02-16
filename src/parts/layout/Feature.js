import React from 'react';
import fone from '../../images/f-1.png';
import ftwo from '../../images/f-2.png';

export default function Feature() {
    return (
        <div id='feature'>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8 "  >
    <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
        <span class='text-sky-500'>
        BillBox
        </span>
        で出来ること</h2>

    <div class="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
      {/* <!-- quote - start --> */}
      <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
        <div class='subpixel-antialiased text-sky-500 font-bold text-4xl   shadow-sky-500/6\50'>01</div>
        <div class="text-center text-gray-600 ">“This is a section of some simple filler text, also known as placeholder text.”</div>
        <div class="w-40">
            <img src={fone} alt="" />
        </div>
        
      </div>
      {/* <!-- quote - end -->

      <!-- quote - start --> */}
      <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
      <div class='subpixel-antialiased text-sky-500 font-bold text-4xl  ' >02</div>
        <div class="text-center text-gray-600 ">“This is a section of some simple filler text, also known as placeholder text.”</div>
        <div class="w-24">
            <img src={ftwo} alt="" />
        </div>
        
      </div>
      {/* <!-- quote - end -->

      <!-- quote - start --> */}
      <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
      <div class='subpixel-antialiased text-sky-500 font-bold text-4xl '>03</div>
        <div class="text-center text-gray-600 ">“This is a section of some simple filler text, also known as placeholder text.”</div>
        <div class="w-24">
            <img src={ftwo} alt="" />
        </div>
       
      </div>
      {/* <!-- quote - end --> */}
    </div>
  </div>
</div>
        </div>
    )
}