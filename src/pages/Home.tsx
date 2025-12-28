import AboutCard from "../components/AboutCard"
import ProjectCard from "../components/ProjectCard"
import SocialMediaCard from "../components/SocialMediaCard"

const Home = () => {
  return (
    <>
      <div className="md:flex gap-2">
        <AboutCard/>
        <SocialMediaCard/>
      </div>
        <ProjectCard/>
    </>
  )
}

export default Home
