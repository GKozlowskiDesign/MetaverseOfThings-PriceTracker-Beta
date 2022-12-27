import React from 'react'
const Hero = () => {
return (
<div>
    <div name="about" className='w-full h-100 bg-gradient-to-r from-black via-indigo-900 to-black'>
         <div class="w-full h-full  max-w-screen-lg p-6 mx-auto flex flex-col justify-center gap-2 ">
            <section className='pt-10 py-40 flex items-center h-100 justify-center'>
                <div className="mx-auto max-w-[27.5rem]">
                <div className="text-center">
                <div className="pt-2  flex items-center justify-center ">
                    <img className="h-30" src="https://github.com/gkozlowskidesign/React-MVoT-Website/blob/codespace-gkozlowskidesign-opulent-chainsaw-59jvrpj6p56fp7w5/src/assets/metaverseofthings_logo.png?raw=true" alt="MVoT"/> 
                </div>     
                    <h1 className="mt-2 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">Metaverse <br></br>
                    <span className='text-black'>of Things</span></h1>    
                </div>
                </div>
            </section> 
        </div>
    </div>
</div>
)};
export default Hero