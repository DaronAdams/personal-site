import React from 'react'

const Aboutme = () => {
  return (
    <div>
        <section id="aboutme">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="max-w-md">
                    <span>
                        <h1 className="text-3xl font-bold text-white inline">About</h1>
                        <h1 className='text-3xl font-bold text-secondary inline'> Me</h1>
                    </span>
                    <p className="py-6 text-slate-400">Hello! I started my programming journey way back editing MySpace and Tumblr themes and have stuck with it ever since. These days I'm mainly focused on Web development or any thing that interest me really. 
                    </p>
                    <p className=" text-slate-400">I have experience with making scalable apis, desktop applications, and even my very own chess engine. I have had the wonderful experience of interning at Lowe's and this upcoming summer I will be joining the Amazon Web Services team.</p>
                    </div>
                </div>  
                </div>
        </section>
    </div>
  )
}

export default Aboutme