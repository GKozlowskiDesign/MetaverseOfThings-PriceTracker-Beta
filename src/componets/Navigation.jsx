import React from 'react'
import 'flowbite';
const Navigation = () => {
return (
<div class="w-full flex  bg-black items-center  jusitfy-center mx-auto">
	<aside class="flex flex-col items-center  bg-black text-gray-700">
	
{/* Navigation Top Icon */}
		<div class="h-16 flex items-center w-full">
			<a class="w-full mx-auto" href="https://metaverseot.xyz/">
			<img
			class="w-10 mx-auto"
			src="https://github.com/gkozlowskidesign/MetaverseOfThings---REACT-Website/blob/Branch_1-7-2023/MVOT%20LOGO%20copy.png?raw=true"
			alt="MetaverseOfThings Logo" />
			</a>
		</div>
{/* Navigation */}
			
{/* Home Navigation Icon */}
	{/* Navigation Icon (Home)*/}
	<p className='text-xs text-center invisible lg:hidden'>Home</p>
	<button class="hover:bg-indigo-600 p-2 bg-gray-900 ring-2 ring-gray-600 text-gray-600 text-center justify-center rounded-lg mx-auto cursor-pointer">
			<div class="text-center justify-center content-center mx-auto">
			<a
			href="/"
			class=" justify-center items-center w-full
					focus:text-orange-500">
				<svg xmlns="http://www.w3.org/2000/svg" 
				fill="none" viewBox="0 0 24 24" 
				stroke-width="1.5" 
				stroke="currentColor" 
				class="w-8 h-8">
  				<path stroke-linecap="round" 
				stroke-linejoin="round" 
				d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 
				12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
				1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 
				0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
				</svg>
			</a>
			</div>
			</button>
{/* Dashboard Navigation Icon */}
		{/* Navigation Icon (Trade)*/}
	<p className='text-xs invisible lg:hidden'>Trade</p>
			<button class="hover:bg-indigo-600 p-2 bg-gray-900 ring-2 ring-gray-600 text-gray-600 text-center justify-center rounded-lg mx-auto cursor-pointer">
			<div class="text-center justify-center content-center mx-auto">
			<a
			href="/tokens"
			class=" justify-center w-full hover:text-white
				focus:text-orange-500">
				<svg xmlns="http://www.w3.org/2000/svg" 
				fill="none" viewBox="0 0 24 24" 
				stroke-width="1.5" 
				stroke="currentColor" 
				class="w-8 h-8">
  				<path stroke-linecap="round" 
				stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 
				0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 
				0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
				</svg>
			</a>
			</div>
			</button>
{/* Learning Navigation Icon */}
		{/* Navigation Icon (Learn)*/}
			<p className='text-xs  invisible lg:hidden'>Learn</p>
			<button class="hover:bg-indigo-600 p-2 bg-gray-900 ring-2 ring-gray-600 text-gray-600 text-center justify-center rounded-lg mx-auto cursor-pointer">
			<div class="text-center justify-center content-center mx-auto">
			<a
			href="/blog"
			class=" justify-center items-center w-full focus:text-orange-500">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" 
				viewBox="0 0 24 24" stroke-width="1.5" 
				stroke="currentColor" 
				class="w-8 h-8">
  				<path stroke-linecap="round" stroke-linejoin="round"
				d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 
				21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
				</svg>
			</a>
			</div>
			</button>

{/* Chart Navigation Icon */}
	{/* Navigation Icon (Logout)*/}
			<p className='text-xs invisible lg:hidden'>Logout</p>
			<button class="hover:bg-indigo-600 p-2 bg-gray-900 ring-2 ring-gray-600 mr-6 text-gray-600 text-center justify-center rounded-lg mx-auto cursor-pointer">
			<div class="text-center justify-center content-center mx-auto">
			<a
			href="https://metaverseot.xyz/"
			class=" justify-center items-center w-full focus:text-orange-500">
				<svg xmlns="http://www.w3.org/2000/svg" 
				fill="none" viewBox="0 0 24 24" 
				stroke-width="1.5" 
				stroke="currentColor" 
				class="w-8 h-8">
				<path stroke-linecap="round" stroke-linejoin="round" 
				d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 
				21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
				</svg>
			</a>
			</div>
			</button>	
</aside>
{/* Navigation Title Text */}
		<div class="mx-auto flex flex-col">
			<section className='visible lg:invisible ml-4'>
			<h1 className="mb-2 text-[3rem] font-bold font-extrabold text-transparent text-3xl sm:text-5xl bg-clip-text bg-gradient-to-r from-purple-700 to-pink-300">
			M<span className='bg-clip-text bg-gradient-to-r from-purple-700 to-pink-300'>VoT</span>
			</h1>
			</section>

			<section className='invisible lg:visible'>
			<h1 className="mb-2 text-[3rem] font-bold font-extrabold text-transparent text-3xl sm:text-5xl bg-clip-text bg-gradient-to-r from-purple-700 to-pink-300">Metaverse <br></br>
			<span className='bg-clip-text bg-gradient-to-r from-purple-700 to-pink-300'>of Things</span>
			</h1>
			</section>
		</div>
</div>)};
export default Navigation
            
   
   
            
