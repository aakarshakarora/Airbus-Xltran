import NavBar from "./NavBar";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';
import { MdLocalGroceryStore } from 'react-icons/md';
import { GiHealing } from 'react-icons/gi';
import { SiBitcoinsv } from 'react-icons/si';
import { Button } from 'react-bootstrap';

function Example() {
	const location = useLocation();
	return (
		<>
			<NavBar />
			<div name='build' className='w-full mt-24'>
				<div className='max-w-[1240px] mx-auto text-white relative'>
					<div className='text-black px-4 py-12'>
						<h1 className='uppercase text-center'>Build Your {location.state.name} Application</h1>
						<h3 className='py-5 text-center'>Choose your desired example to start with</h3>
					</div>
					<div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-2 sm:pt-20 text-black'>
						<div className='bg-white rounded-xl shadow-2xl'>
							<div className='p-8'>
								<div className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'><MdLocalGroceryStore /></div>
								<h3 className='font-bold text-2xl my-6'>Groceries</h3>
								<p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
							</div>
							<div className='bg-slate-100 py-4 flex justify-content-center'>
								<Button className="w-[200px]" variant="success">Start Building</Button>
							</div>
						</div>
						<div className='bg-white rounded-xl shadow-2xl'>
							<div className='p-8'>
								<div className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'><GiHealing /></div>
								<h3 className='font-bold text-2xl my-6'>BMI</h3>
								<p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
							</div>
							<div className='bg-slate-100 py-4 flex justify-content-center'>
								<Button className="w-[200px]" variant="success">Start Building</Button>
							</div>
						</div>
						<div className='bg-white rounded-xl shadow-2xl'>
							<div className='p-8'>
								<div className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'><SiBitcoinsv /></div>
								<h3 className='font-bold text-2xl my-6'>Bitcoin</h3>
								<p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
							</div>
							<div className='bg-slate-100 py-4 flex justify-content-center'>
								<Button className="w-[200px]" variant="success">Start Building</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</>
	);
}

export default Example;