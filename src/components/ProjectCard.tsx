import { FileBraces } from "lucide-react"

const ProjectCard = () => {
  return (
    <div className="text-justify bg-white rounded-2xl mx-auto my-2 pl-5 p-3">
        <p className="mb-4 flex gap-1 text-[#7E7E7E]"><FileBraces size={18} className="my-auto"/>Projects</p>
        <div className="flex gap-6">
            <a>
                <img src="/grocery-scout-logo.svg" width={80}/>
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
        </div>
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
  )
}

export default ProjectCard