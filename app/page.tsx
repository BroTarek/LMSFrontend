import CategoriesPill from "@/components/CategoriesPill";
import CourseCard from "@/components/CourseCard";
import StatsItem from "@/components/StatsItem";


export default function Home() {

  const Categories: string[] = ["All", "Graphic Design", "Digital Marketing", "Business Management", "Content Creation", "Programming & Dev", "Personal Skills"]
  const Stats = [{
    value: 250000,
    describtion: "Active Learners"
  }, {
    value: 800,
    describtion: "Educational Courses"
  }, {
    value: 120,
    describtion: "Expert Mentors"
  }, {
    value: 1200000,
    describtion: "Minutes Watched"
  }
  ]
  return (
    <main className="pt-24">
      {/* <!-- Hero Section --> */}
      <section className="relative px-8 py-20 max-w-screen-2xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 text-left">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-primary tracking-tight leading-tight mb-6">
              Invest in yourself <br />and learn new skills
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              Subscribe now to the Yanfaa platform and get unlimited access to hundreds of educational courses
              in various fields with a selection of experts and creators.
            </p>
            <div className="flex flex-row gap-4 justify-start">
              <button
                className="px-10 py-4 bg-primary-container text-white rounded-full font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                Start Learning Journey
              </button>
              <button
                className="px-8 py-4 border-2 border-outline-variant/30 text-primary rounded-full font-bold text-lg hover:bg-surface-container-low transition-all">
                Browse Courses
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl -rotate-3">
              <img className="w-full h-full object-cover"
                data-alt="Young professional diverse students collaborating in a modern sunlit university library setting with warm academic atmosphere"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR4I-u_V-9CausWzGSUA7Vz6IEUzW6fElvCDt_-BazQWXg2LcqFz0VDS8PKbnn8AS50E7RiCAwilpOvpDyQI7U6_zJ2lUFYZLbg3INKpd8z2V5va9m3hTZ4eV5Y4eNun8hYgArTIPfjq8wcuHAkqTBXrsWx4hqwBsXdrcDoQJcibUvCUG54tvMkmg_9ZYpQPKmAXMHNvguICE5HjLFh8S1UKHCWOgRwIFCvfuYZofTWfk4fVBgX9gRjxbMSKuX3YfWKZkPIZp-9AL9" />
            </div>
            <div
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 animate-bounce">
              <div
                className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-white">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold">Currently Active</p>
                <p className="text-lg font-extrabold text-primary">15,400+ Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Stats Bar --> */}
      <section className="bg-surface-container-low py-12">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Stats.map((stat,i)=>(<StatsItem value={stat.value} describtion={stat
              .describtion
            } key={i} />))}
            
          </div>
        </div>
      </section>
      {/* <!-- Categories Pill Section --> */}
      <section className="py-16 px-8 max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {Categories.map((category, i) => (<CategoriesPill title={category} key={i} />))}
        </div>
      </section>
      {/* <!-- Most Viewed Section --> */}
      <section className="py-12 px-8 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-extrabold text-primary tracking-tight">Most Viewed</h2>
          <a className="text-primary font-bold hover:underline" href="#">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Course Card 1 --> */}

          {Array.from({ length: 9 }).map((_, i) => (
            <CourseCard key={i} />
          ))}
        </div>
      </section>
      {/* <!-- Recently Added Section --> */}
      <section className="py-12 px-8 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-extrabold text-primary tracking-tight">Recently Added</h2>
          <a className="text-primary font-bold hover:underline" href="#">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Recent Card 1 --> */}
          {Array.from({ length: 9 }).map((_, i) => (
            <CourseCard key={i} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <button
            className="px-12 py-4 bg-primary text-white rounded-full font-bold text-lg hover:shadow-xl active:scale-95 transition-all">
            More Courses
          </button>
        </div>
      </section>
    </main>
  );
}
