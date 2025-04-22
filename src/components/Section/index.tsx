import React from "react"

interface SectionProps {
  title: string
  titleAlign?: "left" | "center"
  link?: {
    text: string
    href: string
  }
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({
  title,
  titleAlign = "left",
  link,
  children,
}) => {
  return (
    <div className="mb-8">
      <div
        className={`flex ${
          titleAlign === "center" ? "justify-center" : "justify-start"
        } items-center mb-4`}
      >
        <h2 className="text-dark-gray-2 text-2xl font-semibold mx-6 md:mx-0">
          {title}
        </h2>
        {link && (
          <a href={link.href} className="ml-4 text-primary text-lg">
            {link.text}
          </a>
        )}
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Section
