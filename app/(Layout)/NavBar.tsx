import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav
        className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-[20px] shadow-[0px_12px_32px_rgba(0,51,102,0.06)]">
        <div className="flex items-center justify-between px-8 py-4 max-w-screen-2xl mx-auto">
            <div className="flex items-center gap-8">
                <Link className="text-2xl font-extrabold tracking-tighter text-[#003366] dark:text-blue-500"
                    href="/">Yanfaa</Link>
                <div className="hidden md:flex items-center gap-6">
                    <Link className="text-[#003366] dark:text-blue-400 font-bold border-b-2 border-[#003366] pb-1"
                        href="/Course">Course</Link>
                    <Link className="text-slate-600 dark:text-slate-400 font-medium hover:text-[#003366] transition-all duration-300"
                        href="#">Mentors</Link>
                    <Link className="text-slate-600 dark:text-slate-400 font-medium hover:text-[#003366] transition-all duration-300"
                        href="#">Learning Paths</Link>
                    <Link className="text-slate-600 dark:text-slate-400 font-medium hover:text-[#003366] transition-all duration-300"
                        href="/Student">Student</Link>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 mr-4">
                    <span
                        className="material-symbols-outlined text-slate-600 cursor-pointer hover:bg-slate-100/50 p-2 rounded-full transition-all">language</span>
                    <span
                        className="material-symbols-outlined text-slate-600 cursor-pointer hover:bg-slate-100/50 p-2 rounded-full transition-all">shopping_cart</span>
                </div>
                <Link href="/Login"
                    className="px-5 py-2 text-sm font-semibold text-[#003366] hover:bg-slate-100/50 rounded-full transition-all">Login</Link>
                <Link href={"/Registeration"}
                    className="px-6 py-2.5 bg-[#003366] text-white text-sm font-bold rounded-full hover:shadow-lg active:scale-95 transition-all">Get
                    Started</Link >
            </div>
        </div>
    </nav>
  )
}

export default NavBar