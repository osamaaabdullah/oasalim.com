import { MoveRightIcon } from "lucide-react"
import { Link } from "react-router-dom"

const AboutCard = () => {
  return (
    <div className="bg-white pl-5 p-3 rounded-xl text-left mx-auto h-full flex gap-8">
        <div className="flex-2 my-auto">
          <h2 className="font-medium text-xl mb-2"> Hello, I am Osama</h2>
          <p className="text-justify"> A software developer from Canada interested in building apps that solves day to day problems.</p>
          <Link to={"/about"}><button className="bg-[#171717] text-white flex gap-2 mt-5 md:mt-10 px-3 py-2 rounded-full my-2 hover:scale-105 transition-transform duration-200 hover:opacity-70">Learn more <MoveRightIcon className="my-auto" size={20}/></button></Link>
        </div>
        <div className="hidden md:block md:flex-1 my-auto">
          <img className="rounded-full h-40 w-40" src="/Osama.jpg" alt="Profile Picture"/>
        </div>
    </div>
  )
}

export default AboutCard
