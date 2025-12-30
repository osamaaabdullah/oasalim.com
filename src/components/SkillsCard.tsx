import { ListCheck } from "lucide-react"

const SkillsCard = () => {
  const skills = ["AWS", "Azure", "Docker", "Express.js", "FastAPI", "Flask", "Git", "Google Cloud Platform", "Java", "JavaScript", "JUnit", "Mocktest", "Node.js", "Python", "React", "Selenium", "SQL", "Web Scraping"]
  const style = "bg-[#F2F2F2] p-1 rounded-full text-sm px-3 my-0.5 hover:scale-105 transition-transform duration-200"

  return (
    <div className="mx-auto bg-white p-3 rounded-2xl h-full">
      <p className="text-left mb-2 flex gap-1 text-[#7E7E7E]"><ListCheck size={17} className="my-auto"/>Skills</p>
      <div className="flex flex-wrap gap-2 my-auto">
        {
          skills.map(skill =>
            <span key={skill} className={style}>{skill}</span>
          )
        }
      </div>
    </div>
  )
}

export default SkillsCard
