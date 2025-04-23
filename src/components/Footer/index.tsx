import FooterIcons from "./footer-icons"
import FooterInformations from "./footer-informations"

const Footer = () => {
  return (
    <div className="bg-[#1F1F1F] px-5 py-12 md:px-27 text-white">
      <div className="grid grid-cols-1 gap-12 border-b border-white/50 pb-10 md:grid-cols-2">
        <FooterIcons />

        <FooterInformations />
      </div>

      <div className="mt-6 md:mt-8">
        <p className="text-center text-sm">@ 2025 Digital College</p>
      </div>
    </div>
  )
}

export default Footer
