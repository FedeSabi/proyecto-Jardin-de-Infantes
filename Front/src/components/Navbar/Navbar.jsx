
import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import {FaTimes} from 'react-icons/fa'
import {CiMenuFries} from 'react-icons/ci'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = ()=> setClick(!click)
    
    const content = <>
    <div className='lg:hidden block absolute top-16 w-full left-0 rigth-0 bg-slate-900 transition'>
           <div>
             <h1>Jardin Nubes de Algodon</h1>
           </div>
           <ul className='text-center text-xl p-20'>
               <Link  spy={true} smooth={true} className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-f' to='Contacto'>
               <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate800 hover:rounded'>Contacto</li>
               </Link>
               <Link spy={true} smooth={true} to='Inicio'>
               <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate800 hover:rounded'>Inicio</li>
               </Link>
               <Link spy={true} smooth={true} to='Instalaciones'>
               <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate800 hover:rounded'>Instalaciones</li>
               </Link>
               <Link spy={true} smooth={true} to='Matricula'>
               <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate800 hover:rounded'>Matricula</li>
               </Link>
               <Link spy={true} smooth={true} to='Nosotros'>
               <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate800 hover:rounded'>Nosotros</li>
               </Link>
               <Link spy={true} smooth={true} to='Servicios'>
               <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate800 hover:rounded'>Servicios</li>
               </Link>
           </ul>  
    </div>
    </>
    return(
        <nav>
            <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1'>
                <div className='flex items-center flex-1'>
                    <span className='text-3xl font-bold'>Logo</span>
                </div>
                <div className='lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden'>
                    <div className='flex-10'>
                        <ul className='flex gap-8 mr-16 text-[18px]'>
                           <Link spy={true} smooth={true} className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-f' to='Contacto'>
                                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-f'>Contacto</li>
                            </Link>
                            <Link spy={true} smooth={true} className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-f' to='Inicio'>
                                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-f'>Inicio</li>
                            </Link>
                            <Link spy={true} smooth={true} className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia' to='Instalaciones'>
                                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia'>Instalaciones</li>
                            </Link>
                            <Link spy={true} smooth={true} className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia' to='Matricula'>
                                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia'>Matricula</li>
                            </Link>
                            <Link spy={true} smooth={true} className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-f' to='Nosotros'>
                                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia'>Nosotros</li>
                            </Link>
                            <Link spy={true} smooth={true} className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-f' to='Servicios'>
                                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia'>Servicios</li>
                            </Link>     
                         </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className='block sm:hidden transition' onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>

            </div>
           
        </nav>
    )
}

export { Navbar }