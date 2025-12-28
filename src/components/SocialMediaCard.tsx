import { Link } from "lucide-react"

const SocialMediaCard = () => {
  return (
    <div className="bg-white rounded-xl text-justify p-3 mx-auto my-2">
        <p className="mb-2 flex gap-1 text-[#7E7E7E]"><Link className="my-auto" size={17}/>Links</p>
        <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/osama-abdullah-bin-salim-241b79306" target="blank">
                <img className="rounded-2xl" src="/linkedin-logo.svg" width={90}/>
            </a>
            <a href="https://github.com/osamaaabdullah" target="blank">
                <img className="rounded-2xl" src="/github-logo.svg" width={90}/>
            </a>
            <a href="https://www.behance.net/osamaaabdullah" target="blank">
                <img className="rounded-2xl" src="/behance-logo.svg" width={90}/>
            </a>
        </div>
    </div>
  )
}

export default SocialMediaCard
