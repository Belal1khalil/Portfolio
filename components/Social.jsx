import Link  from "next/link"
import { FaGithub , FaLinkedinIn , FaTiktok , FaFacebook , FaInstagram} from "react-icons/fa";
const Social = () => {
    const socials = [
        {icon : <FaLinkedinIn/> , path: "https://www.linkedin.com/in/belal-khalil-8aa501373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        {icon : <FaGithub/> , path: "https://github.com/Belal1khalil" },
        {icon : <FaFacebook/> , path: "https://www.facebook.com/belal.khalil.235235" },
        {icon : <FaInstagram/> , path: "https://www.instagram.com/belal.khalill?igsh=aWZqMDg4ZXA0Nzl6" },
        {icon : <FaTiktok/> , path: "https://www.tiktok.com/@belalkhalil29?_t=ZS-8yIG9b6ZD3x&_r=1" }
    ]
  return (
    <div className="flex gap-6">
      {socials.map((item , index) => {
        return (
          <Link key={index} href={item.path} className="w-9 h-9 border border-emerald-500 rounded-full flex justify-center items-center text-emerald-500 text-base hover:bg-emerald-500 hover:text-black hover:transition-all duration-500">
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
