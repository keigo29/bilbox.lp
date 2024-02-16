
import '../App.css';
import '../index.css';
import Nav from'./layout/Nav';
import mv from'../images/mv.png';
export default function Header() {
  return (
    <div className="App">
      <header className="App-header">
      
      <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    
    <Nav />

    <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      {/* <!-- content - start --> */}
      <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
        <p class="mb-4 font-semibold text-sky-500 md:mb-6 md:text-lg xl:text-xl">我々にお手伝いさせてください！</p>

        <h1 class="mb-8 text-4xl font-bold max-md:leading-9 leading-5 text-black sm:text-5xl md:mb-12 md:text-5xl">HelpLinkで<br/>つながる助け合い</h1>

        <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
        ヘルプリンクは地域の方々の日常生活をサポートする<br/>
        元気な若者をマッチングし<br/>一緒に様々な活動や
        日常のお手伝いを行うサービスです。<br/>
お気軽にお問い合わせください
          </p>

        <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
          <a href="#" class="inline-block rounded-lg bg-sky-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-sky-600 focus-visible:ring active:bg-indigo-700 md:text-base">料金について</a>

          <a href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">お問い合わせ</a>
        </div>
      </div>
      
      <div className={`w-full`}>
        <img src={mv} loading="lazy"  class="h-full w-full object-cover object-center" />
      </div>
     
    </section>
  </div>
</div>





      </header>
    </div>
  );
}


