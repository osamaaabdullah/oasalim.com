import { MoveRightIcon } from "lucide-react"
import { Link } from "react-router-dom"

const AboutCard = () => {
  return (
    <div className="bg-white pl-5 p-3 rounded-xl text-left mx-auto my-2">
        <h2 className="font-medium text-xl mb-2"> Hello, I am Osama</h2>
        <p className="text-justify"> A software developer from Canada interested in building apps that solves day to day problems.</p>
        <Link to={"/about"}><button className="bg-[#171717] text-white flex gap-2 px-3 py-2 rounded-full my-2">Learn more <MoveRightIcon className="my-auto" size={20}/></button></Link>
    </div>
  )
}

export default AboutCard
