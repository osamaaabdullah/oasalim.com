import { ArrowUpRight, Link } from "lucide-react"

const SocialMediaCard = () => {
  return (
    <div className="bg-white rounded-xl text-justify p-3 mx-auto flex-col grow h-full">
        <p className="mb-2 flex gap-1 text-[#7E7E7E]"><Link className="my-auto" size={17}/>Links</p>
        <div className="py-4 my-auto md:mx-auto w-fit grid md:grid-cols-2 grid-cols-4 md:justify-center gap-3">
            <a href="https://www.linkedin.com/in/osama-abdullah-bin-salim-241b79306" target="blank" className="shrink-0 relative group">
                <img className="rounded-2xl group-hover:opacity-70 group-hover:scale-105 transition-transform duration-200" src="/linkedin-logo.svg" width={75}/>
                <div className="absolute inset-0 rounded-2xl bg-black opacity-0 group-hover:opacity-40 transition-opacity group-hover:scale-105 transition-transform duration-200"></div>
                <div className="absolute top-6 right-6 md:top-6 md:right-5 hidden group-hover:block text-white">
                    <ArrowUpRight size={30}/>
                </div>
            </a>
            <a href="https://github.com/osamaaabdullah" target="blank" className="shrink-0 relative group">
                <img className="rounded-2xl group-hover:opacity-70 group-hover:scale-105 transition-transform duration-200" src="/github-logo.svg" width={75}/>
                <div className="absolute inset-0 rounded-2xl bg-black opacity-0 group-hover:opacity-40 transition-opacity group-hover:scale-105 transition-transform duration-200"></div>
                <div className="absolute top-6 right-6 md:top-6 md:right-5 hidden group-hover:block text-white">
                    <ArrowUpRight size={30}/>
                </div>
            </a>
            <a href="https://www.behance.net/osamaaabdullah" target="blank" className="shrink-0 relative group">
                <img className="rounded-2xl group-hover:opacity-70 group-hover:scale-105 transition-transform duration-200" src="/behance-logo.svg" width={75}/>
                <div className="absolute inset-0 rounded-2xl bg-black opacity-0 group-hover:opacity-40 transition-opacity group-hover:scale-105 transition-transform duration-200"></div>
                <div className="absolute top-6 right-6 md:top-6 md:right-5 hidden group-hover:block text-white">
                    <ArrowUpRight size={30}/>
                </div>
            </a>
        </div>
    </div>
  )
}

export default SocialMediaCard
