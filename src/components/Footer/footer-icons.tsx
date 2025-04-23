import Image from "next/image"
import logoFooter from "@/assets/logo-footer.svg"
import facebookIcon from "@/assets/facebook.svg"
import instagramIcon from "@/assets/instagram.svg"
import twitterIcon from "@/assets/twitter.svg"

const FooterIcons = () => {
  return (
    <div className="space-y-5">
      <Image
        src={logoFooter}
        alt="Logo Digital Store"
        width={170}
        height={30}
        className="md:w-[253px] h-[44px]"
      />
      <p className="text-sm max-w-[300px] md:max-w-[320px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </p>
      <div className="flex space-x-6 pt-2">
        <Image
          src={facebookIcon}
          alt="Facebook"
          width={11}
          height={20}
          className="cursor-pointer"
        />
        <Image
          src={instagramIcon}
          alt="Instagram"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <Image
          src={twitterIcon}
          alt="Twitter"
          width={22}
          height={18}
          className="cursor-pointer"
        />
      </div>
    </div>
  )
}

export default FooterIcons
