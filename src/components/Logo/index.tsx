import Image from "next/image"
import logo from "../../assets/logo-header.svg"

const Logo = () => {
  return (
    <Image
      width={138}
      height={24}
      className="w-[138px] h-[24px] md:w-[253px] md:h-[44px]"
      src={logo}
      alt="Logo Drip Store"
    />
  )
}

export default Logo
