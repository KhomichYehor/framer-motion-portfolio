import React from 'react';
import Image from 'next/image';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';

const Contact = () => {
  return (
    <div
      className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8"
      id="contact"
    >
      <div className="flex justify-center items-center">
        <ul className="space-y-4">
          <li className="flex items-center">
            <Image src={phone} alt="phone" className="h-[110px] w-auto mr-6 gradient-pulse" />
            <a className="text-xl hover:text-orange-400 cursor-pointer transition duration-300" href="tel:+380637101580">+380-63-710-15-80</a>
          </li>
          <li className="flex items-center">
            <Image src={mail} alt="phone" className="h-[110px] w-auto mr-6 gradient-pulse" />
            <a className="text-xl hover:text-orange-400 cursor-pointer transition duration-300" href="mailto:eee.houmich@gmail.com">eee.houmich@gmail.com</a>
          </li>
        </ul>
      </div>
      <div className="bg-white/10 p-6 rounded-xl max-w-[550px]">
        <h2 className="text-5xl font-bold text-orange-400 mb-4">
          Let`s connect
        </h2>
        <p className="text-white/70 mb-6">
          Send me a message and lets shedule a call!
        </p>
        <form className="space-y-4" action='https://getform.io/f/bmdpqvxa' method='POST'>
          <div className='grid md:grid-cols-2 gap-4'>
            <input type='text' name='name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300' placeholder='First Name' />
            <input type='text' name='name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300' placeholder='Last Name' />
            <input type='email' name='email' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300' placeholder='Email' />
            <input type='phone' name='phone' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300' placeholder='Phone' />
          </div>
          <textarea className=' w-full resize-none bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300' placeholder='Your message' >

          </textarea>
          <button className='bg-orange-700 hover:bg-orange-400 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl transition duration-300'>Send message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
