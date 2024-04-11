import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from "../../assets/hero.png"
import car from "../../assets/car.png"
import bag from "../../assets/bag.png"
import veedu from "../../assets/veedu.png"
import plane from "../../assets/plane.png"
import lap from "../../assets/lap.png"
import bar from "../../assets/bar.png"
import mail from "../../assets/mail.png"
import tick from "../../assets/tick.png"
import profileboy from "../../assets/Profileboy.png"
import profilegirl from "../../assets/Profilegirl.png"
import profile from "../../assets/Profile.png"
import star from "../../assets/star.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"




const Home = () => {
  return (
    <main>
      <div className='h-screen bg-blue-100'>
          <Navbar />
          <div className='grid grid-cols-2'>
              <div className='pl-24 pt-20'>
                  <h1 className='text-6xl font-bold font-serif'>Protecting </h1>
                  <h1 className='text-6xl font-bold font-serif'>Your Tomorrows</h1>
                  <h1 className='text-6xl font-bold font-serif'>Today</h1>
                  <p className='pt-5 text-md'>Protect your loved ones and secure your legacy with [BlockInsure]. Our reliable life insurance solutions offer peace of mind and financial security, tailored to your unique needs.</p>
                  <button className='border-2 mt-5 hover:bg-green-500  hover:duration-300  bg-blue-400 rounded-xl font-semibold px-2 py-2 '>Make a Claim !</button>
              </div>
              <div className='pl-20'>
                <img src={Hero} alt='img' width={550}></img>
              </div>
          </div>   
      </div>

      <div className='flex justify-evenly mt-10 mb-28'>
          <div className='bg-white border-2 px-20 py-20 my-5 shadow-2xl'>
              <img width={150} alt='img' src={car}></img>
              <h1 className='text-xl font-bold text-slate-800'>Auto Coverage</h1>
          </div>
          <div className=' border-2 px-20 py-20 my-5 shadow-2xl' >
              <img width={150} alt='img' src={plane}></img>
              <h1 className='text-xl font-bold text-slate-800' >Travel Insurance</h1>
          </div>
          <div className=' border-2 px-20 py-20 my-5 shadow-2xl' >
              <img width={150} alt='img' src={veedu}></img>
              <h1 className='text-xl font-bold text-slate-800 pt-7' >Home Insurance</h1>
          </div>
          <div className=' border-2 px-20 py-20 my-5 shadow-2xl' >
              <img width={150}  alt='img' src={bag}></img>
              <h1 className='text-xl font-bold text-slate-800' >Life Insurance</h1>
          </div>
      </div>


      <div className='pb-20'>
          <div className='grid grid-cols-2'>
              <div className='px-36'>
                  <img src={lap}  alt='img' width={450}></img>
              </div>
              <div className="">
                   <h1 className='text-5xl font-semibold text-slate-600 font-serif pt-4'>Our Insurance</h1>
                   <h1 className='text-5xl font-semibold text-slate-600 font-serif'>Services</h1>
                   <p className='pr-32 py-7'>Discover seamless claims and decentralized insurance solutions, revolutionizing protection for what matters most.</p>
                   <div className='bg-blue-950 grid grid-cols-4 rounded-2xl mb-5 mr-32'>
                      <div className='pl-2 py-2'>
                        <img src={bar}  alt='img' width={90} ></img>
                      </div>
                      <div className='col-span-3'>
                        <h1 className='text-white text-xl font-semibold py-2'>Affordable Coverage</h1>
                        <p className='text-white text-md mr-3 pb-2 '>Things on a very small scale behave like nothing that you have any direct experience</p>
                      </div>
                    </div>
                    <div className=' grid grid-cols-4 rounded-2xl mb-5 mr-32'>
                      <div className='pl-2 py-2'>
                        <img src={tick}  alt='img' width={90} ></img>
                      </div>
                      <div className='col-span-3 '>
                        <h1 className=' text-xl font-semibold py-2 text-black'>Balanced coverage</h1>
                        <p className=' text-md  mr-3 pb-2 text-black'>Things on a very small scale behave like nothing that you have any direct experience</p>
                      </div>
                    </div>
                    <div className=' grid grid-cols-4 rounded-2xl mb-5 mr-32'>
                    <div className='pl-2 py-2'>
                        <img src={mail}  alt='img' width={90} ></img>
                      </div>
                      <div className='col-span-3'>
                        <h1 className='text-black text-xl font-semibold py-2'> Comprehensive coverage</h1>
                        <p className='text-black text-md mr-3 pb-2'>Things on a very small scale behave like nothing that you have any direct experience</p>
                      </div>
                    </div>
              </div>
          </div>
      </div>


      <div >
        <div className='flex justify-center '>
          <button className='text-black font-semibold border-2 px-3 py-1  rounded-3xl bg-blue-100'>Testimonial</button>
        </div>
        <h1 className=' capitalize text-5xl font-bold flex justify-center py-7'>What customer Say</h1>
        <p className='text-md font-semibold flex justify-center'>Incredible transparency and efficiency! Their blockchain-based system truly revolutionizes insurance</p>
        
        <div className='flex gap-20 px-20 pt-10 pb-20'>
            <div className='border-2 shadow-2xl '>
              <div className='flex justify-center pt-5'>
              <img width={200}  alt='img' src={profileboy}></img>
              </div>
              <h1 className='font-bold text-xl flex justify-center'>Emman</h1>
              <p className='flex justify-center'>Director, Producer</p>
              <div className='flex justify-center py-5'>
              <img  width={150}  alt='img' src={star}></img>
              </div>
              <div className='px-24 pb-5'>
                <p >I never thought insurance could be this hassle-free. Their decentralized approach is a game-changer.</p>
              </div>
            
            </div>

            <div className='border-2 shadow-2xl'>
              <div className='flex justify-center pt-5 '>
              <img width={200} alt='img'  src={profilegirl}></img>
              </div>
              <h1 className='font-bold text-xl flex justify-center'>Siri</h1>
              <p className='flex justify-center'>Director, Producer</p>
              <div className='flex justify-center py-5'>
              <img  width={150}  alt='img' src={star}></img>
              </div>
              <div  className='px-24 pb-5'>
              <p>I never thought insurance could be this hassle-free. Their decentralized approach is a game-changer.</p>
              </div>
            </div>

            <div className='border-2 shadow-2xl'>
              <div className='flex justify-center pt-5'>
              <img width={200}  alt='img' src={profile}></img>
              </div>
              <h1 className='font-bold text-xl flex justify-center'>Kiran</h1>
              <p className='flex justify-center'>Director, Producer</p>
              <div className='flex justify-center py-5'>
              <img  width={150}   alt='img' src={star}></img>
              </div>
              <div  className='px-24 pb-5'>
              <p>I never thought insurance could be this hassle-free. Their decentralized approach is a game-changer.</p>
              </div>
            </div>
        </div> 
      </div>


      <div className='text-center bg-blue-100 pt-32 '>
        <h1 className='text-5xl font-bold font-serif'>Contact us now and let us </h1>
        <h1 className='text-5xl font-bold font-serif pb-14' >provide the perfect insurance</h1>
        <div className='pb-32' >
           <input className='border-2 py-2 pl-2 pr-20' placeholder='Enter Mail Address '></input>
           <button className='border-2 rounded-lg px-2 py-2 border-blue-400 bg-blue-400 ml-3 text-lg font-semibold'>subscribe</button>
        </div>
      </div>

      <footer className='bg-white grid grid-cols-4 pt-16 pb-16'>
        <div className='col-span-2 pl-32' >
          <h1 className='text-xl font-bold pb-5' >Get In Touch </h1>
          <p>Connect with us </p>
          <div className='flex pt-5 '>
            <img src={facebook} alt='img'  width={40} ></img>
            <img src={instagram} alt='img'  width={40} className='ml-5'></img>
            <img src={twitter}  alt='img' width={40} className='ml-5'></img>
          </div>
        </div>

        <div>
          <h1 className='text-xl font-bold pb-5'>Company Info</h1>
          <p className='pb-2'>About Us </p>
          <p className='pb-2' >Carrier </p>
          <p className='pb-2' >Blog </p>
        </div>

        <div>
          <h1 className='text-xl font-bold pb-5' >Features </h1>
          <p className='pb-2' >Business Marketing </p>
          <p className='pb-2' >Use Analytics </p>
          <p className='pb-2' >Unlimited support </p>
        </div>

      </footer>
      <div className='bg-blue-100 py-8 text-center font-bold'>
          Made with love by GPS.
      </div>
    </main>
  )
}

export default Home