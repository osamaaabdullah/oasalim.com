import SkillsCard from "../components/SkillsCard"
import SocialMediaCard from "../components/SocialMediaCard"

const About = () => {
  return (
    <div>
      <div className="bg-white p-3 rounded-2xl mx-auto my-2">
        <img className="rounded-full h-40 w-40 mx-auto my-2" src="/Osama.jpg" alt="Profile Picture"/>
        <h2 className="font-medium text-xl mb-2"> Hello, I am Osama</h2>
        <h1 className="text-2xl font-bold my-2 text-black">I am passionate about developing <span className="underline">Apps</span> that makes life easier.</h1>
        <p className="my-3">A <span className="font-bold">software developer</span> from Canada</p>
        <p className="text-center p-3"> Interested in building apps that solves day to day problems.</p>
      </div>
      <div className="md:flex gap-6 my-auto">
        <div className="flex-2 mt-8"><SkillsCard/></div>
        <div className="flex-1 mt-8"><SocialMediaCard/></div>
      </div>
    </div>
  )
}

export default About
