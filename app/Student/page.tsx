import CourseWithProgress from '@/components/CourseWithProgress'
import React from 'react'

const page = () => {
  return (
    <main className="pt-24 pb-32 max-w-screen-2xl mx-auto px-6">
        {/* <!-- Profile Header Section --> */}
        <section className="mb-12">
            <div
                className="bg-surface-container-low rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-12 items-start relative overflow-hidden">
                {/* <!-- Abstract Texture Background --> */}
                <div
                    className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none bg-gradient-to-l from-primary-container to-transparent">
                </div>
                <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
                    <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-xl shadow-primary-container/10">
                        <img alt="Alex Johnson" className="w-full h-full object-cover"
                            data-alt="close-up portrait of a young male student in a library setting, thoughtful expression, warm studio lighting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqHFpbqX0wHDmYpzSxPV1KQ8ev1aD5ey21FHw3d43YgpAVjWeAraVvfB2IlgwbXAp8X0B1rPULsIlIC8wm3piVGAwPgrXU8UxOpgc8TgHY2Woku2myf5nARBl9sb-RsrOMjp9rvjSiUIEK_KQ49PLdXnbqLVH6J6maVuETjFwJtO0PJHU8hJ9_kxQb2rpPfl4-A2hvNo9tZ1tQP29PIkCpm13_i7dyz8KBSUkX8PhGDu7HV8Je2XjQKZO5d4UNEAmq3-1ztKdDLwJU" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary p-3 rounded-2xl text-on-primary">
                        <span className="material-symbols-outlined text-xl"
                            style={{fontVariationSettings: 'FILL 1' }}>verified</span>
                    </div>
                </div>
                <div className="flex-grow z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Alex Johnson</h1>
                    <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed mb-8">
                        Dedicated linguistics scholar focusing on the intersection of Semitic languages and digital
                        archival methods. Currently exploring modern research methodologies in classNameical literature.
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-surface-container-lowest p-6 rounded-3xl">
                            <span className="block text-3xl font-extrabold text-primary mb-1">05</span>
                            <span
                                className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant opacity-70">Enrolled
                                Courses</span>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-3xl">
                            <span className="block text-3xl font-extrabold text-primary mb-1">12</span>
                            <span
                                className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant opacity-70">Completed
                                Lessons</span>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-3xl">
                            <span className="block text-3xl font-extrabold text-primary mb-1">4.8</span>
                            <span
                                className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant opacity-70">Learning
                                Streak</span>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-3xl">
                            <span className="block text-3xl font-extrabold text-primary mb-1">18h</span>
                            <span
                                className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant opacity-70">Study
                                Hours</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Main Content Grid --> */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* <!-- Left: Enrolled Courses --> */}
            <div className="lg:col-span-8">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-2">Enrolled Courses</h2>
                        <div className="h-1.5 w-12 bg-primary-container rounded-full"></div>
                    </div>
                    
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* <!-- Course Card 1 --> */}
                   
                   {Array.from({length:4}).map((_,i)=>(
                    <CourseWithProgress key={i}/>
                   ))}
                    
                </div>
            </div>
            
            
        </div>
    </main>
  )
}

export default page