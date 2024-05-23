import menone from '../../images/men01.png'
import mentwo from '../../images/men02.png'
export default function Mention() {
    return (
        <div id="mention" >
         <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8 ">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12 my-10">
      <div>
        <div class="h-70  ">
          <img src={menone} loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
        </div>
      </div>

      <div class="md:pt-8">
      <p class="text-center
         font-bold text-green-500 md:text-left text-4xl">01</p>

        <h1 class="my-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">クラウド管理で自動書類整理</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
          アプリ内で作成した・書類データはクラウド内にて保存されます。<br />アプリからダウンロード書類を探す際に要していた<br />

          
        </p>

    
      </div>
    </div>
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12 my-10">
      

      <div class="md:pt-8">
        <p class="text-center
         font-bold text-green-500 md:text-left text-4xl">02</p>
         {/* <div className={`bg-gradient-to-r from-cyan-500 to-blue-500 h-0.5 rounded-lg w-2/12`}/>　<div/> */}
        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">サンプルテキスト</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
          サンプルテキストサンプルテキストサンプルテキストサンプルテキスト サンプルテキストサンプルテキストサンプルテキストサンプルテキスト<br /><br />

          
        </p>

    
      </div>
      <div>
        <div class="h-70  ">
          <img src={mentwo} loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    )}

