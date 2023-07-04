import React from 'react'
import 'flowbite';
const Navigation = () => {
return (

<div class="w-full grid grid-col-3 flex rounded-xl bg-black items-center  jusitfy-center mx-auto p-10 sm:p-10 lg:p-20">
<aside class="flex items-center flex-col gap-10 p-4  mb-10  bg-gray-900 ring-2 ring-gray-600 rounded-xl text-gray-700">
{/* Navigation */}
{/* Navigation Icon (Logout)*/}
<button class="hover:bg-indigo-600 p-2  bg-purple-900  ring-2 ring-gray-600 text-indigo-200 text-center justify-center rounded-lg mx-auto cursor-pointer">
		<div class="text-center justify-center content-center mx-auto">
			<a href="https://metaverseot.xyz/" class=" justify-center items-center w-full focus:text-white">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
				<path stroke-linecap="round" stroke-linejoin="round" 
				d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 
				21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
				</svg>
			</a>
		</div>
</button>	
{/* Navigation Icon (Trade)*/}
<button class="hover:bg-indigo-600 p-2  bg-purple-600  ring-2 ring-gray-600 text-indigo-200 text-center justify-center rounded-lg mx-auto cursor-pointer">
	<div class="text-center justify-center content-center mx-auto">
		<a href="/" class=" justify-center w-full hover:text-white focus:text-white">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
			<path stroke-linecap="round" 
			stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 
			1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 
			19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 
			1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 
			4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 
			1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
		</svg>
		</a>
	</div>
</button>
{/* Navigation Icon (Trade)*/}
<button class="hover:bg-indigo-600 p-2  bg-purple-600  ring-2 ring-gray-600 text-indigo-200 text-center justify-center rounded-lg mx-auto cursor-pointer">
	<div class="text-center justify-center content-center mx-auto">
		<a href="/Education" class=" justify-center w-full hover:text-white focus:text-white">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  			<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 
			0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 
			00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 
			0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 
			0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 
			0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
		</svg>
		</a>
	</div>
</button>
{/* Navigation Icon (Trade)*/}
<button class="hover:bg-indigo-600 p-2  bg-purple-600  ring-2 ring-gray-600 text-indigo-200 text-center justify-center rounded-lg mx-auto cursor-pointer">
	<div class="text-center justify-center content-center mx-auto">
		<a href="/Trending" class=" justify-center w-full hover:text-white focus:text-white">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  			<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
		</svg>
		</a>
	</div>
</button>
</aside>
</div>
)};
export default Navigation
            
   
   
            
