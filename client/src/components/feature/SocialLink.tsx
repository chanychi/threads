import { Social as SocialProps} from "@/interfaces/hero.d";

const SocialLink = ({ icon, url }: SocialProps) => {
  return (
    <>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img
        src={icon}
        alt="icon/social"
        className="w-8 h-8 flex items-center cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110"
      />
    </a>
    </>
  )
}

export default SocialLink