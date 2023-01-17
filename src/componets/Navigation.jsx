import React from 'react'
import 'flowbite';
const Navigation = () => {
return (
<div class="w-full flex rounded-xl bg-black items-center  jusitfy-center mx-auto p-10 sm:p-10 lg:p-20">
	<aside class="flex flex-col gap-4 p-4  mb-10 items-center  bg-gray-900 ring-2 ring-gray-600 rounded-xl text-gray-700">

{/* Navigation */}
			

	{/* Navigation Icon (Home)*/}
	<button class="p-2 blur  bg-gray-600  ring-2 ring-gray-600 text-indigo-200 text-center justify-center rounded-lg mx-auto cursor-default">
			<div class="text-center justify-center content-center mx-auto">
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
				0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
				</svg>
			</div>
			</button>



		{/* Navigation Icon (Trade)*/}
			<button class="hover:bg-indigo-600 p-2  bg-purple-600  ring-2 ring-gray-600 text-indigo-200 text-center justify-center rounded-lg mx-auto cursor-pointer">
			<div class="text-center justify-center content-center mx-auto">
			<a
			href="/tokens"
			class=" justify-center w-full hover:text-white
			focus:text-white">
			<svg xmlns="http://www.w3.org/2000/svg" 
			fill="none" 
			viewBox="0 0 24 24" 
			stroke-width="1.5" 
			stroke="currentColor" 
			class="w-8 h-8">
			<path stroke-linecap="round" 
			stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 
			1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 
			19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 
			1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 
			4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 
			1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"></path>
			</svg>
			</a>
			</div>
			</button>



		{/* Navigation Icon (Learn)*/}
		<button class="blur p-2  bg-gray-600  ring-2 ring-gray-600 text-indigo-200 text-center justify-center rounded-lg mx-auto cursor-default">
			<div class="text-center justify-center content-center mx-auto">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" 
				viewBox="0 0 24 24" stroke-width="1.5" 
				stroke="currentColor" 
				class="w-8 h-8">
  				<path stroke-linecap="round" stroke-linejoin="round"
				d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 
				21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
				</svg>
			</div>
			</button>


	{/* Navigation Icon (Logout)*/}
	<button class="hover:bg-indigo-600 p-2  bg-purple-600  ring-2 ring-gray-600 text-indigo-200 text-center justify-center rounded-lg mx-auto cursor-pointer">
			<div class="text-center justify-center content-center mx-auto">
			<a
			href="/"			
			class=" justify-center items-center w-full 
			focus:text-white">
			<svg xmlns="http://www.w3.org/2000/svg" 
				fill="none" viewBox="0 0 24 24" 
				stroke-width="1.5" 
				stroke="currentColor" 
				class="w-8 h-8">
				<path stroke-linecap="round" stroke-linejoin="round" 
				d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 
				21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
				</svg>
			</a>
			</div>
			</button>	



		{/* Navigation Icon (Home)*/}
		<button class="blur p-2 bg-gray-600 ring-2 ring-gray-600 text-gray-600 text-center justify-center rounded-lg mx-auto cursor-default">
				<div class="text-center justify-center content-center mx-auto">
		
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
					0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
					</svg>
			
				</div>
				</button>


		{/* Navigation Icon (Home)*/}
		<button class="blur p-2 bg-gray-600 ring-2 ring-gray-600 text-gray-600 text-center justify-center rounded-lg mx-auto cursor-default">
				<div class="text-center justify-center content-center mx-auto">
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
					0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
					</svg>
			
				</div>
				</button>
	
	</aside>
{/* Navigation Title Text */}
</div>



)};
export default Navigation
            
   
   
            
