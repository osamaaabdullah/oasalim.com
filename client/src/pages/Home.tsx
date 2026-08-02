import AboutCard from "../components/AboutCard"
import Education from "../components/Education"
import Experience from "../components/Experience"
import GoalsCard from "../components/GoalsCard"
import ProjectCard from "../components/ProjectCard"
import SocialMediaCard from "../components/SocialMediaCard"

const Home = () => {
  return (
    <>
      <div className="md:flex gap-2">
        <div className="flex-3 my-4"><AboutCard/></div>
        <div className="flex-1 my-4"><SocialMediaCard/></div>
      </div>
        <div className="mb-8"><ProjectCard/></div>
        <div className="mb-8"><Education/></div>
        <div className="mb-8"><Experience/></div>
        <div className="mb-8"><GoalsCard/></div>
    </>
  )
}

export default Home
