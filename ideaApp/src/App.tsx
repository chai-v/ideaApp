import { Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className='bg-custom-gradient'>
      <Header/>
      <div className='container mx-auto px-4 py-8 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='flex flex-col items-center justify-center text-center md:text-left'>
            <p className='text-cream text-xl md:text-3xl lg:text-4xl font-semibold mb-4'>Whether you are a</p>
            <span className="text-darkpurple text-3xl md:text-5xl lg:text-7xl font-bold"><Typewriter
              options={{
                strings: ['STUDENT', 'TEACHER', 'ALUMNI'],
                autoStart: true,
                loop: true,
              }}
            /></span>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='w-full md:w-9/12 p-6 gap-4 text-md bg-cream text-darkpurple rounded-md flex flex-col items-center text-center'>
              <p className='mb-2'><span className='text-purple font-bold text-xl md:text-2xl'>Connect</span> with likeminded people.</p> 
              <p className='mb-2'><span className='text-purple font-bold text-xl md:text-2xl'>Share</span> innovative ideas.</p>
              <p className='mb-2'><span className='text-purple font-bold text-xl md:text-2xl'>Collaborate</span> to make something extraordinary.</p>
              <Link to={'/signup'}>
                <button className='bg-purple text-cream font-semibold text-lg md:text-xl p-2 rounded-md mt-4'>
                    Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
          <div className='m-2 md:m-4 p-4 bg-darkpurple rounded-md'>
            <h1 className='text-cream text-lg md:text-xl font-bold'>Connect</h1>
            <p className='text-cream text-sm md:text-base'>Connect with fellow students and faculty from all branches. Why stop there? Connect with your very own alumni to grow your network.</p>
          </div>
          <div className='m-2 md:m-4 p-4 bg-darkpurple rounded-md'>
            <h1 className='text-cream text-lg md:text-xl font-bold'>Share</h1>
            <p className='text-cream text-sm md:text-base'>Share your innovative ideas. Whether it is a startup, technical project, or research project, gain feedback and insights from your college peers.</p>
          </div>
          <div className='m-2 md:m-4 p-4 bg-darkpurple rounded-md'>
            <h1 className='text-cream text-lg md:text-xl font-bold'>Collaborate</h1>
            <p className='text-cream text-sm md:text-base'>Find passionate and talented peers on campus based on your requirements to bring your idea to life.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
