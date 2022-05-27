import NavBar from "./NavBar";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';
import { MdQuiz } from 'react-icons/md';
import { GiHealing } from 'react-icons/gi';
import { SiBitcoinsv } from 'react-icons/si';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Example() {
	const location = useLocation();
	window.scrollTo(0, 0)
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
								<div className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'><MdQuiz /></div>
								<h3 className='font-bold text-2xl my-6'>Quiz App</h3>
								<p className='text-gray-600 text-xl'>Quiz a Wiz!! Let's Play Knowledge game!!</p>
							</div>
							<div className='bg-slate-100 py-4 flex justify-content-center'>
								<Button className="w-[200px]" variant="success"><Link to="/form3" style={{color:"white"}}>Start Building</Link></Button>
							</div>
						</div>
						<div className='bg-white rounded-xl shadow-2xl'>
							<div className='p-8'>
								<div className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'><GiHealing /></div>
								<h3 className='font-bold text-2xl my-6'>BMI</h3>
								<p className='text-gray-600 text-xl'>Health is Wealth !!
Let's create BMI App</p>
							</div>
							<div className='bg-slate-100 py-4 flex justify-content-center'>
								<Button className="w-[200px]" variant="success"><Link to="/form1" style={{color:"white"}}>Start Building</Link></Button>
							</div>
						</div>
						<div className='bg-white rounded-xl shadow-2xl'>
							<div className='p-8'>
								<div className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'><SiBitcoinsv /></div>
								<h3 className='font-bold text-2xl my-6'>Bitcoin</h3>
								<p className='text-gray-600 text-xl'>Are you fascinated about Crypto??
Let's Create Crypto-Convertor App</p>
							</div>
							<div className='bg-slate-100 py-4 flex justify-content-center'>
								<Button className="w-[200px]" variant="success"><Link to="/form2" style={{color:"white"}}>Start Building</Link></Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Example;