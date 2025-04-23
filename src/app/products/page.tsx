import FilterGroup from "@/components/FilterGroup"

const Products = () => {
  return (
    <div className="max-w-[1440px] mx-auto space-y-5 h-full">
      <div className="grid grid-cols-1 md:grid-cols-[308px_1fr] gap-8">
        <aside className="space-y-6">
          {/* Campo de ordenação */}
          <div className="w-[308px] h-[60px]">
            <label className="block text-[16px] text-dark-gray-2 mb-1">
              Ordenar por
            </label>
            <select className="w-full h-full border border-gray-300 px-4 text-dark-gray-2">
              <option value="asc">Menor preço</option>
              <option value="desc">Maior preço</option>
            </select>
          </div>
          {/* Filtro */}
          <div className="bg-white w-[308px] p-4 mt-10">
            <h3 className="text-[16px] text-dark-gray-2 font-semibold mb-2">
              Filtrar por
            </h3>
            <hr className="border-t border-white/50 mb-4" />
            <FilterGroup
              title="Tipo"
              inputType="checkbox"
              options={[
                {
                  text: "Camisetas",
                  value: "camisetas",
                },
                { text: "Tênis", value: "tenis" },
                { text: "Acessórios", value: "acessorios" },
              ]}
            />

            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={[
                { text: "Esporte e lazer", value: "esporte-e-lazer" },
                { text: "Casual", value: "casual" },
                { text: "Utilitário", value: "utilitario" },
                { text: "Corrida", value: "corrida" },
              ]}
            />

            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              options={[
                {
                  text: "Masculino",
                  value: "masculino",
                },
                { text: "Feminino", value: "feminino" },
                { text: "Unisex", value: "unisex" },
              ]}
            />

            <FilterGroup
              title="Estado"
              inputType="radio"
              options={[
                { text: "Novo", value: "novo" },
                { text: "Usado", value: "usado" },
              ]}
            />
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Products
