import img1 from './assets/img/icon-a.png'
import iconmenu from './assets/img/icon-menu.png'
function App() {

  return (
    <div className="bg-cyan-800 h-screen pt-8">
      <div className="flex justify-between bg-white w-11/12 py-1 rounded-3xl mx-[4%] px-1">
        <img src={img1} alt="icon" className='size-10 rounded-full bg-green-300 p-1.5'/>
        <div className='text-xl font-medium my-1 text-blue-950  '>D-SCHOOL</div>
        <img src={iconmenu} alt="menu icon" className='size-8 mr-2 my-1'/>
      </div>
      <div className='flex pl-[4%] mt-6'>
        <p className='text-white font-mono border-[1px] border-white rounded-2xl font-light text-xs px-3.5 py-1.5 '>COURSE</p>
        <p className='text-white font-mono border-[1px] border-white rounded-2xl font-light text-xs px-3.5 py-1.5 ml-1'>BEGINNER</p>
      </div>
      <div className='flex flex-col mt-7 ml-[5%] md:mt-14'>
        <span className='text-6xl font-semibold text-white opacity-90 font-sans'>Visual</span>
        <span className='text-6xl font-semibold text-white opacity-90 font-sans ml-11 pl-1 mt-9'>Design</span>
        <span className='text-6xl font-semibold text-white opacity-90 font-sans mt-9'>+Branding</span>
      </div>
      <div>
        <p className='text-white text-xl px-5 mt-8 ml-[5%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, earum ut? Et perferendis recusandae similique omnis a ut quod quasi aut.</p>
      </div>
      <div className='fixed bottom-4 mt-14 w-11/12 mx-[4%] md:w-1/4 mx-[4%]'>
      <button type='button' className='text-cyan-700 bg-yellow-300   w-full  py-1.5 font-bold text-xl rounded-3xl md:py-3'>Add to Cart</button>

      </div>
    </div>
  )
}

export default App