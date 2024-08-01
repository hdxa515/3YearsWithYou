import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from './components/Image';
import RevealOnScroll from './components/RevealOnScroll';

function Memories() {
  const bgColor = 'bg-zinc-300'; 

  
  return (
    <div className={`font-playwrite flex flex-col min-h-screen ${bgColor} pb-24`}>


      <div>
        <img src="/3YearsWithYou/assets/flower1.png" alt="" className='absolute w-fit h-screen flex justify-end items-end ml-[72%] animate-fade animate-once animate-duration-[5000ms] animate-delay-[1500ms]'/>

        <div className='text-5xl text-black flex justify-center mt-32 mb-20 animate-fade animate-once animate-duration-[7000ms] '>
          3 Years With You
        </div>


        <div className="flex flex-col mx-auto text-2xl justify-center items-center text-center leading-loose animate-fade animate-once animate-duration-[5000ms]  animate-delay-[3000ms] animate-ease-in-out">

          <div className='py-4'>
            In this long journey with you, <br /> we have reached the<span className='text-teal-500 text-3xl'> 3rd anniversary</span> of our love.
          </div>

          <div className='py-4'>
            We have shared countless smiles, heartfelt hugs,<br /> and even a few tears together.
          </div>

          <div className='flex flex-row py-4'>
            This is a special memory lane for you, <span className='text-teal-500 text-3xl'>my love...</span> 
          </div>

          <div className='py-8 pt10 text-3xl leading-loose font-bold animate-fade animate-once animate-duration-[5000ms]  animate-delay-[5000ms] animate-ease-in-out'>
            I love you Bassi🤍 <br />
            Happy anniversary!
          </div>
        </div>
        
      </div>

    <div className="w-screen mt-28 ">
      <div className="space-y-0">

        <RevealOnScroll className="w-full flex flex-row ">
          <img 
            src="/3YearsWithYou/assets/2.0.jpg" 
            className="rounded-lg shadow-lg w-screen h-fit" 
            alt="Memorable moment" 
          />
          <div className="text-amber-950 text-4xl font-normal z-10 absolute leading-loose p-10" >
            <span className='font-extrabold'>
            2021-2022 <br />
            </span>
            The year that all the wonders began.
          </div>
          <div className='absolute pt-[20%] ml-16'>
          <RevealOnScroll className="delay-1000 flex-col text-xl leading-loose text-amber-950">
            <span className='font-bold'>
            2021-08-01 <br />
            </span>
            The day we first said "I Love You"... <br />
            The day all the magic began <br />
            The day we continued our journey <br />
            from the <span className='text-amber-600 font-bold animate-pulse animate-infinite animate-ease-linear'> previous life ,<br />
            into forever.....</span> <br />
            <span className='pt-8 font-bold '>
            The year ,<br />
             <span className='ml-10'>that all the wonders began.</span>
            </span>
          </RevealOnScroll>
          </div>
        </RevealOnScroll>
      </div>

      <div>
      <RevealOnScroll className="w-full flex flex-row ">
          <img 
            src="/3YearsWithYou/assets/8.jpg" 
            className="rounded-lg shadow-lg w-screen h-fit" 
            alt="Memorable moment" 
          />
          <div className="text-white text-4xl font-normal z-10 absolute leading-loose p-10 " >
            2022-2023 <br />
            A year for bonds that were meant to grow stronger.
          </div>
          <div className='absolute pt-[20%] ml-16'>
          <RevealOnScroll className="delay-1000 flex-col text-xl leading-loose text-white">
            We loved... <br />
            We laughed... <br />
            We cried... <br />
            <span className='text-zinc-400 font-bold animate-pulse animate-infinite animate-ease-linear ml-12'>
              ... TOGETHER ...
            </span> <br />
            <span className='pt-8 font-bold '>
            We learned that ,<br />
             <span className='ml-10'>we were made for <span className='text-2xl text-zinc-400 animate-pulse animate-infinite animate-ease-linear'>eachother</span></span>
            </span>
          </RevealOnScroll>
          </div>
        </RevealOnScroll>
      </div>

      <div>
        <RevealOnScroll className="w-full flex flex-row ">
          <img 
            src="/3YearsWithYou/assets/16.jpg" 
            className="rounded-lg shadow-lg  w-screen h-fit" 
            alt="Memorable moment" 
          />
          <div className="text-white text-4xl font-normal z-10 absolute leading-loose m-10 bg-black bg-opacity-65 rounded-3xl " >
            2023-2024 <br />
            A year that wasn't just for the two of us, <br />
            but for our families to come together as one.
          </div>
          <div className='absolute'>
          <RevealOnScroll className="delay-1000 flex-col text-xl leading-loose text-white  mt-64 ml-16 p-4  bg-black bg-opacity-55 rounded-3xl">
            It was never just the two of us,<br />
            They stood by our side <br />always🤍.<br />
            Now they are <br />
            <span className='text-zinc-400 font-bold animate-pulse animate-infinite animate-ease-linear ml-12'>
              ONE FAMILY...
            </span> <br />
          </RevealOnScroll>
          </div>
        </RevealOnScroll>
      </div>
    </div>

    <div>
      <div className='grid grid-cols-3 gap-0'>
        <RevealOnScroll>
          <img src="/3YearsWithYou/assets/3.jpg" alt="" />
        </RevealOnScroll>
        <RevealOnScroll>
          <img src="/3YearsWithYou/assets/2.1.jpg" alt="" />
        </RevealOnScroll>
        <RevealOnScroll>
          <img src="/3YearsWithYou/assets/4.jpg" alt="" />
        </RevealOnScroll>
        <RevealOnScroll>
          <img src="/3YearsWithYou/assets/7.jpg" alt="" />
        </RevealOnScroll>
        <RevealOnScroll>
          <img src="/3YearsWithYou/assets/6.0.jpg" alt="" />
        </RevealOnScroll>
        <RevealOnScroll>
          <img src="/3YearsWithYou/assets/15.jpg" alt="" />
        </RevealOnScroll>
        <RevealOnScroll>
          <img src="/3YearsWithYou/assets/17.0.jpg" alt="" />
        </RevealOnScroll><RevealOnScroll className="relative flex bg-black bg-opacity-30">
          <img src="/3YearsWithYou/assets/17.1.jpg" alt="" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 flex justify-center items-center text-3xl font-bold text-white bg-black bg-opacity-40 leading-loose">
            <div className="flex flex-col justify-center items-center text-center">
              and <br />
              a <br />
              many <br />
              more <br />
              to <br />
              go
            </div>
          </div>
        </RevealOnScroll>


        <RevealOnScroll>
          <img src="/3YearsWithYou/assets/13.2.jpg" alt="" />
        </RevealOnScroll>
        <RevealOnScroll>
          <img src="/3YearsWithYou/assets/1.jpg" alt="" />
        </RevealOnScroll>
        <RevealOnScroll>
          <img src="/3YearsWithYou/assets/9.jpg" alt="" />
        </RevealOnScroll>
        <RevealOnScroll>
          <img src="/3YearsWithYou/assets/12.jpg" alt="" />
        </RevealOnScroll>
        <RevealOnScroll>
          <img src="/3YearsWithYou/assets/13.1.jpg" alt="" />
        </RevealOnScroll>
        <RevealOnScroll>
          <img src="/3YearsWithYou/assets/5.0.jpg" alt="" />
        </RevealOnScroll>
        <RevealOnScroll>
          <img src="/3YearsWithYou/assets/13.0.jpg" alt="" />
        </RevealOnScroll>
        
      </div>
    </div>

    <div className='h-screen '>
      <div className='flex justify-center items-center mt-40'>
        <div className="flex flex-col space-y-4 ">
          <div className="text-bl text-4xl font-bold leading-loose flex flex-col justify-center items-center">
            <RevealOnScroll className="animate-fade animate-once animate-duration-[5000ms] animate-delay-[100]">
            Memories <br />
            </RevealOnScroll>
            <RevealOnScroll className="animate-fade animate-once animate-duration-[5000ms] animate-delay-[2000ms]">
            of Three Wonderful Years...
            </RevealOnScroll>
          </div>
          <RevealOnScroll className="text-black text-xl font-normal leading-loose flex flex-col justify-center items-center animate-fade animate-once animate-duration-[5000ms] animate-delay-[4000ms]">

            <span>
              Thank you , <br />
            </span>
            <span>
              for all loving memories , <br />
            </span>
            <span>
              and all your love and support.
            </span>
          </RevealOnScroll>
          <RevealOnScroll className="animate-fade animate-once animate-duration-[5000ms] animate-delay-[6000ms] text-xl font-normal leading-loose flex flex-col justify-center items-center">

            <span>
              We got so many anniversaries ahead of us. <br />
            </span>
            <span>
              and I need you & your love <br />
            </span>
            <span>
              at all those beautiful moments.
            </span>
          </RevealOnScroll>
          <RevealOnScroll className="animate-fade animate-once animate-duration-[5000ms] animate-delay-[8000ms] text-4xl font-bold leading-loose flex flex-col justify-center items-center">
            <span>
            I love you Bassi... <br />
            </span>
            <span>
            ... FOREVER
            </span>
          </RevealOnScroll>
        </div>
      </div>

    </div>

    </div>
  );
}

export default Memories;
