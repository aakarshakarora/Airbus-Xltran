import React from 'react'
import { Link } from 'react-scroll'
import bgImg from '../assets/hero-bg.png'

const Hero = () => {
	return (
		<div name='home' className='h-screen bg-zinc-200 flex flex-col justify-between'>
			<div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
				<div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
					<p className='text-2xl'>Build Native Apps</p>
					<h1 className='py-3 text-5xl md:text-7xl font-bold'>Xltran</h1>
					<p className='text-2xl'>Click the below button to start building your app with us.</p>
					<button className='py-3 px-6 sm:w-[60%] my-4'><Link to="build" smooth={true} offset={-200} duration={500}>Start Building</Link></button>
				</div>
				<div>
					<img src={bgImg} className='w-auto img-fluid shadow-4' alt='cross-platform' />
				</div>
			</div>
		</div>
	)
}

export default Hero