const FooterInformations = () => {
  return (
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
          Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
        </p>
        <p className="text-sm">(85) 3051-3411</p>
      </div>
    </div>
  )
}
 
export default FooterInformations