import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>

            <div className="bg-background text-on-background min-h-screen flex items-center justify-center p-4 md:p-8">
                {/* {<!-- Login Shell: Asymmetric Editorial Layout -->} */}
                <main
                    className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden bg-surface-container-lowest rounded-3xl shadow-ambient">
                    {/* <!-- Brand/Visual Anchor Side (5 Columns) --> */}
                    <div
                        className="hidden md:flex md:col-span-5 relative bg-primary-container overflow-hidden items-center justify-center p-16">
                        <div className="absolute inset-0 z-0 opacity-40">
                            <img className="w-full h-full object-cover"
                                data-alt="atmospheric photo of a classNameic library with soft natural light filtering through high windows onto wooden bookshelves"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpojoR5KSY0nAMq-oBfATL_QTHWTomW5T6GoLtVAS9NI-c_xHjoNPtBh-QHYb3CfPdZKUwabD2dTijHk3QyPAmFAJ7BtndFDoesNNu0hUebpZLleOs72rt_myd4pzwTAALpEgG9tXJv6FbOsvA4RRFmZheNQK0LlkmwpR6LHHVgpmAjsISZBSLgf3OSTX7xRYyzvmKH3J5NY8XiHsOIr1Svqo_wB7W1Z5qXotn6T1iMkC0Mi3-YPQ44lj9l2So4bYYAo430jJscfU5" />
                        </div>
                        {/* <!-- Spotlight Gradient Overlay --> */}
                        <div
                            className="absolute inset-0 bg-gradient-to-tr from-primary-container via-primary-container/80 to-transparent z-10">
                        </div>
                        <div className="relative z-20 text-white max-w-sm">
                            <div className="mb-8">
                                <span className="text-4xl font-extrabold tracking-tighter text-on-primary-container">Yanfaa</span>
                            </div>
                            <h2 className="text-4xl font-extrabold text-editorial-anchor leading-tight mb-6">Preserving the legacy of
                                scholarly wisdom.</h2>
                            <p className="text-lg text-on-primary-container font-medium opacity-90 leading-relaxed">
                                Access the global archive of curated research, mentorship, and academic excellence.
                            </p>
                            <div className="mt-16 flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    <img className="w-10 h-10 rounded-full border-2 border-primary-container object-cover"
                                        data-alt="portrait of a distinguished senior academic researcher in a professional setting"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC01EWmXFIZSgAeTG8oBkFXvxokmwynoPERUWfehAR-rPE-C267OYHzWkQ69vsDdELrh1QIgSDF4XCvURMfkvcxO6ji2SlNWPln1zVXOoN_BAEOtuElnyO2HvrLtjg6v33dfX6Pz86H4LDE5C2S2M_YZqXvcQpflPN8KVtsmwyeHPPP7_enyyv-zbLuZUGOcPCep7mf5Lta-bKHhWfpijNuVPAig5uWBp2Ex0Qii2yfov6eMIijL0aBBQ3kGHR3BhMs8xTSZO4gRPy" />
                                    <img className="w-10 h-10 rounded-full border-2 border-primary-container object-cover"
                                        data-alt="professional woman in modern workspace with soft natural lighting"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcenhV_NMMsS4cUI2eMAmKCuAqFn81UnbIoNexVsw8lh9hj7zTtM8WwHTLVp3nH-1r9oNvgksGpwUBevbvLdd2NpyEEnRhpdiY3m2vh1KemiLM7EnZIKhAPqMYmGhe_YLBYEsgBytZuU244KfxGN5W9-H9SIbIvl4LyZHt-9Njbid-B1Zw-aRQX1O1ncqK2dM35nfdTxxeEPUGfJEJKdSbsMJWiyUi_QmLulC47Dg_4fCm6CQiQgx4UX4xX6POmq6LWIeRsGDhyWee" />
                                    <img className="w-10 h-10 rounded-full border-2 border-primary-container object-cover"
                                        data-alt="smiling young scholar in an academic environment"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsVaFkPJRYpyDbDtyIy0jaBASQyYnZxitRAMhbgVlU_B5OLRxjRj1woy0cQZjWvIy3GtucijnxjVMN252oSM88LIICx7MGeF-N948uXvvQ_nfl1MhErsw9aWLAre_F5gW9HBjkMKwzC1v6MU-gYucY6n3mEBOjF0eLNQzOx0PPR3LJYmup052RqoPxGgdPidkHeA0YOPs_-EzFzzH4Kd9MnWBswX4m-YGdoGhdDSagcOiCvFlsNStkeqmRsebIvBTIsh3Qj61lgWa5" />
                                </div>
                                <span className="text-sm font-semibold tracking-wide text-on-primary-container">Joined by 12k+
                                    Scholars</span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Authentication Form Side (7 Columns) --> */}
                    <div className="col-span-1 md:col-span-7 flex flex-col justify-center p-8 md:p-24 bg-surface-container-lowest">
                        {/* <!-- Mobile Brand Header --> */}
                        <div className="md:hidden mb-12">
                            <span className="text-2xl font-extrabold tracking-tighter text-primary">Yanfaa</span>
                        </div>
                        <div className="max-w-md w-full mx-auto">
                            <header className="mb-10">
                                <h1 className="text-4xl font-extrabold text-primary text-editorial-anchor mb-3">Welcome Back</h1>
                                <p className="text-on-surface-variant text-lg">Please authenticate to access your scholarly dashboard.
                                </p>
                            </header>
                            <form className="space-y-6">
                                {/* <!-- Email Input --> */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary tracking-wide uppercase opacity-70"
                                        htmlFor="email">Scholarly Email</label>
                                    <div className="relative">
                                        <span
                                            className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">mail</span>
                                        <input
                                            className="w-full pl-12 pr-4 py-4 bg-surface-container-low ghost-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-on-surface"
                                            id="email" name="email" placeholder="name@institution.edu" type="email" />
                                    </div>
                                </div>
                                {/* <!-- Password Input --> */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-bold text-primary tracking-wide uppercase opacity-70"
                                            htmlFor="password">Security Token</label>
                                        <a className="text-sm font-bold text-primary hover:underline underline-offset-4 transition-all"
                                            href="#">Forgot Password?</a>
                                    </div>
                                    <div className="relative">
                                        <span
                                            className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock</span>
                                        <input
                                            className="w-full pl-12 pr-12 py-4 bg-surface-container-low ghost-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-on-surface"
                                            id="password" name="password" placeholder="••••••••••••" type="password" />
                                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary"
                                            type="button">
                                            <span className="material-symbols-outlined">visibility</span>
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- Remember Me --> */}
                                <div className="flex items-center gap-3">
                                    <input
                                        className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer"
                                        id="remember" name="remember" type="checkbox" />
                                    <label className="text-sm font-medium text-on-surface-variant cursor-pointer"
                                        htmlFor="remember">Maintain session on this device</label>
                                </div>
                                {/* <!-- Submit Button --> */}
                                <button
                                    className="w-full py-4 px-6 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-full text-lg shadow-ambient hover:opacity-90 active:scale-[0.98] transition-all"
                                    type="submit">
                                    Sign In to Archive
                                </button>
                            </form>
                            {/* <!-- Divider --> */}
                            <div className="relative my-10">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-outline-variant opacity-30"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span
                                        className="px-4 bg-surface-container-lowest text-on-surface-variant font-medium uppercase tracking-widest">or
                                        continue with</span>
                                </div>
                            </div>
                            {/* <!-- Social Logins --> */}
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    className="flex items-center justify-center gap-3 py-3 px-4 bg-surface-container-lowest ghost-border rounded-full hover:bg-surface-container-low transition-all font-bold text-on-surface">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            fill="#4285F4"></path>
                                        <path
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.65l-3.57-2.77c-1.01.68-2.33 1.09-3.71 1.09-2.85 0-5.27-1.92-6.13-4.51H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            fill="#34A853"></path>
                                        <path
                                            d="M5.87 14.16c-.22-.68-.35-1.4-.35-2.16s.13-1.48.35-2.16V7.00H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 5.00l3.69-2.84z"
                                            fill="#FBBC05"></path>
                                        <path
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.00l3.69 2.84c.86-2.59 3.28-4.51 12-4.51z"
                                            fill="#EA4335"></path>
                                    </svg>
                                    Google
                                </button>
                                <button
                                    className="flex items-center justify-center gap-3 py-3 px-4 bg-surface-container-lowest ghost-border rounded-full hover:bg-surface-container-low transition-all font-bold text-on-surface">
                                    <svg className="w-5 h-5" fill="#0077b5" viewBox="0 0 24 24">
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                                        </path>
                                    </svg>
                                    LinkedIn
                                </button>
                            </div>
                            {/* <!-- Footer CTA --> */}
                            <footer className="mt-12 text-center">
                                <p className="text-on-surface-variant font-medium">
                                    New to the institution?
                                    <Link className="text-primary font-bold hover:underline underline-offset-4 ml-1" href="/Registeration">Sign Up</Link>
                                </p>
                            </footer>
                        </div>
                    </div>
                </main>
                {/* <!-- Support Link Floating --> */}
                <div className="fixed bottom-8 right-8">
                    <button
                        className="w-12 h-12 bg-surface-container-high text-primary rounded-full flex items-center justify-center shadow-ambient hover:bg-surface-container-highest transition-all group">
                        <span className="material-symbols-outlined">help_outline</span>
                        <span
                            className="absolute right-14 bg-primary text-on-primary text-xs font-bold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Help
                            Center</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default page