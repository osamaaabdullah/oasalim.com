const SkillsCard = () => {
  const skills = ["AWS", "Azure", "Docker", "Express.js", "FastAPI", "Flask", "Git", "Google Cloud Platform", "Java", "JavaScript", "JUnit", "Mocktest", "Node.js", "Python", "React", "Selenium", "SQL", "Web Scraping"]
  const style = "bg-[#F2F2F2] p-1 rounded-full text-sm px-3 my-0.5"

  return (
    <div className="flex flex-wrap mx-auto my-4 bg-white p-3 rounded-2xl gap-2">
      {
        skills.map(skill =>
          <span key={skill} className={style}>{skill}</span>
        )
      }
    </div>
  )
}

export default SkillsCard
