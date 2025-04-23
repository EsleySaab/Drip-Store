type Option = {
  text: string
  value?: string
}

type FilterGroupProps = {
  title: string
  inputType: "checkbox" | "radio"
  options: Option[]
}

const FilterGroup = ({ inputType, options, title }: FilterGroupProps) => {
  return (
    <div className="mb-6">
      <h4 className="text-[14px] text-dark-gray-2 font-semibold mb-3">
        {title}
      </h4>

      <div className="space-y-2">
        {options.map((option, index) => (
          <label
            key={index}
            className="flex items-center gap-2 text-dark-gray-2 text-sm cursor-pointer"
          >
            <input
              type={inputType}
              name={title.toLowerCase().replace(/\s+/g, "-")}
              value={option.value || option.text}
              className="w-[22px] h-[22px] accent-primary"
            />
            {option.text}
          </label>
        ))}
      </div>
    </div>
  )
}

export default FilterGroup
