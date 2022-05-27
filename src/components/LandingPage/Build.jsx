import React from 'react';

import { DiAndroid } from 'react-icons/di';
import { SiIos } from 'react-icons/si';
import { GoBrowser } from 'react-icons/go';
import { ArrowSmRightIcon } from '@heroicons/react/outline';

import supportImg from '../assets/build-bg.png'

const Support = () => {
	return (
		<div name='build' className='w-full mt-24'>
			<div className='w-full h-[700px] bg-gray-900/90 absolute'>
				<img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
			</div>

			<div className='max-w-[1240px] mx-auto text-white relative'>
				<div className='px-4 py-12'>
					<h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Build Your Application</h2>
					<h3 className='text-5xl font-bold py-6 text-center'>Choose your desired platform</h3>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
					<div className='bg-white rounded-xl shadow-2xl'>
						<div className='p-8'>
							<div className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'><DiAndroid /></div>
							<h3 className='font-bold text-2xl my-6'>Android</h3>
							<p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
						</div>
						<div className='bg-slate-100 pl-8 py-4'>
							<p className='flex items-center text-indigo-600'>Build Android Application<ArrowSmRightIcon className='w-5 ml-2' /></p>
						</div>
					</div>
					<div className='bg-white rounded-xl shadow-2xl'>
						<div className='p-8'>
							<div className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'><GoBrowser /></div>
							<h3 className='font-bold text-2xl my-6'>Web</h3>
							<p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
						</div>
						<div className='bg-slate-100 pl-8 py-4'>
							<p className='flex items-center text-indigo-600'>Build Web Application<ArrowSmRightIcon className='w-5 ml-2' /></p>
						</div>
					</div>
					<div className='bg-white rounded-xl shadow-2xl'>
						<div className='p-8'>
							<div className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'><SiIos /></div>
							<h3 className='font-bold text-2xl my-6'>IOS</h3>
							<p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
						</div>
						<div className='bg-slate-100 pl-8 py-4'>
							<p className='flex items-center text-indigo-600'>Build Desktop Application<ArrowSmRightIcon className='w-5 ml-2' /></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Support;
