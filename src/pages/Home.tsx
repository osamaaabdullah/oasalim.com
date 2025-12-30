import AboutCard from "../components/AboutCard"
import ProjectCard from "../components/ProjectCard"
import SocialMediaCard from "../components/SocialMediaCard"

const Home = () => {
  return (
    <>
      <div className="md:flex gap-2">
        <div className="flex-3 my-2"><AboutCard/></div>
        <div className="flex-1 my-2"><SocialMediaCard/></div>
      </div>
        <ProjectCard/>
    </>
  )
}

export default Home
