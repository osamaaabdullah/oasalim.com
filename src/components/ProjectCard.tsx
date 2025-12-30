import { FileBraces } from "lucide-react"
const groceryScoutSkills = ["Python", "FastAPI", "Postgres", "Pytest", "Next.js", "Tailwind CSS"]
const skillStyle = "bg-[#F2F2F2] p-1 rounded-full text-sm px-3 hover:scale-105 transition-transform duration-200"


const ProjectCard = () => {
  return (
    <div className="text-justify bg-white rounded-2xl mx-auto my-2 pl-5 p-3 pb-8">
        <p className="mb-4 flex gap-1 text-[#7E7E7E]"><FileBraces size={18} className="my-auto"/>Projects</p>
        <div className="flex gap-6">
            <a className="shrink-0">
                <img src="/grocery-scout-logo.svg" width={80} alt="Grocery Scout logo"/>
            </a>
            <div className="flex-col gap-2">
                <p className="text-xl font-medium mb-1">Grocery Scout</p>
                <div className="flex gap-2">
                    <a href="https://grocery-scout.com/" target="blank">
                        <button className="text-white bg-[#171717] p-2 rounded-xl hover:opacity-80">Website</button>
                    </a>
                    <a href="https://github.com/osamaaabdullah/Grocery-Scout" target="blank">
                        <button className="text-white bg-[#171717] p-2 rounded-xl hover:opacity-80">GitHub</button>
                    </a>
                </div>
            </div>
             <div className="hidden md:block">
                <p className="">Grocery Scout helps you compare grocery prices across retailers under Metro, Loblaw, and Walmart.</p>
                <div className="flex flex-wrap gap-3 mt-2 ">
                    {groceryScoutSkills.map((skill) => (
                        <span key={skill} className={skillStyle}>{skill}</span>
                    ))}
                </div>
            </div>
        </div>
        <div className="md:hidden">
            <p className="p-2">Grocery Scout helps you compare grocery prices across retailers under Metro, Loblaw, and Walmart.</p>
            <div className="p-2 flex flex-wrap gap-3">
                <span className="bg-[#F2F2F2] p-1 rounded-full text-sm px-3">Python</span>
                <span className="bg-[#F2F2F2] p-1 rounded-full text-sm px-3">FastAPI</span>
                <span className="bg-[#F2F2F2] p-1 rounded-full text-sm px-3">Postgres</span>
                <span className="bg-[#F2F2F2] p-1 rounded-full text-sm px-3">Pytest</span>
                <span className="bg-[#F2F2F2] p-1 rounded-full text-sm px-3">Next.js</span>
                <span className="bg-[#F2F2F2] p-1 rounded-full text-sm px-3">Tailwind CSS</span>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard