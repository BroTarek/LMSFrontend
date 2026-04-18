"use client"
import Link from "next/link";


const Page = () => {
  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <main className="min-h-screen flex flex-col md:flex-row editorial-gradient">
        {/* Left Column: The Scholarly Canvas */}
        <div className="hidden md:flex md:w-5/12 lg:w-1/2 p-12 lg:p-24 flex-col justify-between relative overflow-hidden bg-primary-container text-on-primary">
          <div className="z-10">
            <div className="text-3xl font-extrabold tracking-tighter mb-16">
              Yanfaa
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Preserving the{" "}
              <span className="text-on-primary-container">Legacy</span> of
              Knowledge.
            </h1>
            <p className="text-lg lg:text-xl text-on-primary-container/80 max-w-md font-light leading-relaxed">
              Join a distinguished global community of researchers, curators,
              and mentors dedicated to scholarly integrity.
            </p>
          </div>
          <div className="z-10 mt-auto">
            <div className="flex gap-12 items-center">
              <div>
                <div className="text-3xl font-bold">1.2M+</div>
                <div className="text-sm uppercase tracking-widest text-on-primary-container/60 font-semibold mt-1">
                  Archives
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold">14k</div>
                <div className="text-sm uppercase tracking-widest text-on-primary-container/60 font-semibold mt-1">
                  Mentors
                </div>
              </div>
            </div>
          </div>
          {/* Subtle Decorative Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img
              className="w-full h-full object-cover grayscale"
              alt="Close-up of aged library bookshelves with leather bound books in a warm, scholarly atmosphere"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS0nnlMOhPwYU8667pPMHx_BhQ1FyR9acPQ9COuRnM1v-t-Kvut01vM3gF7a54qq-CnJb7D1JhOYmJBi1ywNNqvMQmmHnSybuDAuaoNdC2LgohcQ6jgTpfZs2sen2wiAnUl1gSSwwgVPMCUKgBhkLS4UQkOIP9NlJD1Xt8lU3a1b8CpbeEQGEQ-ukUjhbZxgvT2DHAwzRL_N3AR18UF7kSpkvycIjAgK5pEvA3RTMoY6w5aYfkJO45qwkl9RIG7U8u9--JGA2gtOQl"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container via-primary-container to-transparent opacity-90"></div>
        </div>

        {/* Right Column: Registration Logic */}
        <div className="w-full md:w-7/12 lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-24 bg-surface-bright">
          <div className="w-full max-w-md">
            <div className="md:hidden text-2xl font-extrabold tracking-tighter text-primary-container mb-12">
              Yanfaa
            </div>
            <div className="mb-10">
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-primary mb-3">
                Create Account
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                Begin your journey within our curated academic ecosystem.
              </p>
            </div>

            {/* Social Registration */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-surface-container-lowest wisdom-slate-shadow border border-outline-variant/20 hover:bg-surface-container-low transition-all duration-300 group">
                <img
                  className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all"
                  alt="Google colorful brand logo icon"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6mnMG0c53kkSi74X8ha4T-fWYJDuSahmqRtv7QzPfNLR8PuFWJBLCELRc38_bia5hh2g_d5KNFHUrwSbXcjbzf0QrFiHNLWcidH-wnvbbqXhmod8yd6Td_s5WorE1R1u2jA8IfdegsTYAUWuPggxwtDPsOfdBsSoecQ6LkR0lFdpxkHZZAUL7arzT3nEo3zDMnyI24d1TclAee1s3pwzNp8p5VWXr09pVv4IXJhEP-ikhiBF1I9yaqwsHE5I8gFFEf9Jq4IRJ2UK9"
                />
                <span className="text-sm font-semibold text-primary">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-surface-container-lowest wisdom-slate-shadow border border-outline-variant/20 hover:bg-surface-container-low transition-all duration-300 group">
                <img
                  className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all"
                  alt="LinkedIn professional networking brand logo icon"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjdWFVLFHUZbdOskQcUulser6wHC1R8qnBWdSkFOC25XWV0R7-54Dp7HHKOABjv08G3HyylN3bX_Zz9soyEk_D3SrM05a0bIS2C0cM14rtBZ-ZWHfcNuyevAB03-aY5WSKlyzN3fLtZf3m6hfV2y39Wbb0CVZVdEkROoPDbHbXKCxJGHIGu6Vz8y984RIz-rOSsu5ic97k15NYvCClIpbIYGltFLCMHO_XZgYKdja2Bu3SHYL3OdXGsVcFG1Yn_xCXaKf_hhDRrIn7"
                />
                <span className="text-sm font-semibold text-primary">LinkedIn</span>
              </button>
            </div>

            <div className="relative flex items-center mb-8">
              <div className="flex-grow border-t border-outline-variant/20"></div>
              <span className="flex-shrink mx-4 text-xs font-bold uppercase tracking-widest text-outline">
                Or via email
              </span>
              <div className="flex-grow border-t border-outline-variant/20"></div>
            </div>

            {/* Form Fields */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5">

                        <label
                            className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-4">Role</label>
                        <div className="relative">
                            <span
                                className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 text-lg">supervised_user_circle</span>
                            <select
                                className="w-full pl-14 pr-10 py-4 bg-surface-container-lowest rounded-full border-none ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-primary-container/40 transition-all outline-none text-on-surface appearance-none">
                                <option disabled={true}  defaultValue={''}>Select your role</option>
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                                <option value="admin">Admin</option>
                            </select>
                            <span
                                className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-on-surface-variant/40 pointer-events-none">expand_more</span>
                        </div>
                        
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-4">
                  Full Name
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 text-lg">
                    person
                  </span>
                  <input
                    className="w-full pl-14 pr-6 py-4 bg-surface-container-lowest rounded-full border-none ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-primary-container/40 transition-all outline-none text-on-surface"
                    placeholder="Dr. Julian Thorne"
                    type="text"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-4">
                  Academic Email
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 text-lg">
                    school
                  </span>
                  <input
                    className="w-full pl-14 pr-6 py-4 bg-surface-container-lowest rounded-full border-none ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-primary-container/40 transition-all outline-none text-on-surface"
                    placeholder="j.thorne@university.edu"
                    type="email"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-4">
                  Password
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 text-lg">
                    lock
                  </span>
                  <input
                    className="w-full pl-14 pr-14 py-4 bg-surface-container-lowest rounded-full border-none ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-primary-container/40 transition-all outline-none text-on-surface"
                    placeholder="••••••••••••"
                    type="password"
                  />
                  <button
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-on-surface-variant/40 hover:text-primary transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-lg">
                      visibility
                    </span>
                  </button>
                </div>
              </div>

              <div className="pt-4">
                <button
                  className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-full wisdom-slate-shadow hover:scale-[1.01] active:scale-95 transition-all duration-300"
                  type="submit"
                >
                  Join Yanfaa
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-on-surface-variant text-sm font-medium">
              Already a member?
              <Link
                className="text-primary-container font-extrabold hover:underline underline-offset-4 decoration-2 ml-1"
                href="#"
              >
                Sign In
              </Link>
            </p>

            <p className="mt-16 text-center text-[10px] text-outline leading-loose uppercase tracking-widest px-8">
              By joining, you agree to our{" "}
              <Link className="hover:text-primary" href="#">
                Research Integrity Protocol
              </Link>{" "}
              and{" "}
              <Link className="hover:text-primary" href="#">
                Global Privacy Standards
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default Page;