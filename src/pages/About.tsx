import SkillsCard from "../components/SkillsCard"
import SocialMediaCard from "../components/SocialMediaCard"

const About = () => {
  return (
    <div>
      <div className="bg-white p-3 rounded-2xl mx-auto my-2">
        <h2 className="font-medium text-xl mb-2"> Hello, I am Osama</h2>
        <h1 className="text-2xl font-bold my-2">I am passionate about developing <span className="underline">Apps</span> that makes life easier.</h1>
        <p className="my-3">A <span className="font-bold">software developer</span> from Canada</p>
        <p className="text-justify p-3"> Interested in building apps that solves day to day problems.</p>
      </div>
      <SkillsCard/>
      <SocialMediaCard/>
    </div>
  )
}

export default About
