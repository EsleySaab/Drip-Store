const OrderBy = () => {
  return (
    <div className="md:w-[308px] w-full md:h-[60px] mt-4">
      <label className="hidden md:block text-[16px] text-dark-gray-2 mb-1 font-semibold">
        Ordenar por
      </label>
      <select className="w-full md:h-full h-[60px] border border-gray-300 px-4 text-dark-gray-2">
        <option value="asc">Menor preço</option>
        <option value="desc">Maior preço</option>
      </select>
    </div>
  )
}

export default OrderBy
