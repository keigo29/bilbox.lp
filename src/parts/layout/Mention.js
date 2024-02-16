import menone from '../../images/men01.png'
import mentwo from '../../images/men02.png'
export default function Mention() {
    return (
        <div id="mention" >
         <div class="bg-white py-6 sm:py-8 lg:py-12">
           <h1 class="text-3xl font-bold title-font text-sky-600 mb-12 text-center">HelpLinkの特徴</h1>
  <div class="mx-auto max-w-screen-xl px-4 md:px-8 ">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12 my-10">
      <div>
        <div class="h-70  ">
          <img src={menone} loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
        </div>
      </div>

      <div class="md:pt-8">
      <p class="text-center
         font-bold text-sky-500 md:text-left text-4xl">01</p>

        <h1 class="my-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">家事のお手伝い</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
        重い物の持ち運びや高い所の掃除など、高齢になってから毎日の家事に負担や危険を感じるようなこともサポートいたします。

          
        </p>

    
      </div>
    </div>
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12 my-10">
      

      <div class="md:pt-8">
        <p class="text-center
         font-bold text-sky-500 md:text-left text-4xl">02</p>
         {/* <div className={`bg-gradient-to-r from-cyan-500 to-blue-500 h-0.5 rounded-lg w-2/12`}/>　<div/> */}
        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">不用品整理のお手伝い</h1>
        
        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
        フリマアプリ代行販売やゴミ・不用品ののお手伝い、そして不用品買取など、便利でスムーズなライフサポートを提供しています。

          
        </p>

    
      </div>
      <div>
        <div class="h-70  ">
          <img src={mentwo} loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
        </div>
        
      </div>
      
    </div>
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12 my-10">
      <div>
        <div class="h-70  ">
          <img src={menone} loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
        </div>
      </div>

      <div class="md:pt-8">
      <p class="text-center
         font-bold text-sky-500 md:text-left text-4xl">01</p>

        <h1 class="my-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">外出のお手伝い</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
        外出のお手伝い、通院のサポート、買い物代行、外食の付き添いなど、安心して日常を楽しんでいただけるサービスを提供しています。

          
        </p>

    
      </div>
    </div>
  </div>
</div>
</div>
    )}

