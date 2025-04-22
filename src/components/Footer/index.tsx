import Image from "next/image"
import logoFooter from "@/assets/logo-footer.svg"
import facebookIcon from "@/assets/facebook.svg"
import instagramIcon from "@/assets/instagram.svg"
import twitterIcon from "@/assets/twitter.svg"

const Footer = () => {
  return (
    <div className="bg-[#1F1F1F] px-5 py-12 md:px-27 md:py-18 text-white">
      <div className="grid grid-cols-1 gap-12 border-b border-white/50 pb-10 md:grid-cols-2">
        <div className="space-y-5">
          <Image
            src={logoFooter}
            alt="Logo Digital Store"
            width={170}
            height={30}
            className="md:w-[253px] h-[44px]"
          />
          <p className="text-sm max-w-[300px] md:max-w-[320px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
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

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-3 md:mb-5">Informação</h3>
            <ul className="space-y-2 text-sm">
              <li>Sobre Drip Store</li>
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe conosco</li>
              <li>Meus Pedidos</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 md:mb-5">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 md:mb-5">Contato</h3>
            <p className="text-sm leading-relaxed mb-5">
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </p>
            <p className="text-sm">(85) 3051-3411</p>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-8">
        <p className="text-center text-sm">@ 2025 Digital College</p>
      </div>
    </div>
  )
}

export default Footer
