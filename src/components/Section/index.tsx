import React from "react"

interface SectionProps {
  title: string
  titleAction?: React.ReactNode
  link?: {
    text: string
    href: string
  }
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({
  title,
  link,
  children,
  titleAction,
}) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        <h2 className="text-dark-gray-2 text-2xl font-semibold mx-6 md:mx-0">
          {title}
        </h2>
        {titleAction}
      </div>
      {link && (
        <a href={link.href} className="ml-4 text-primary text-lg">
          {link.text}
        </a>
      )}
      <div>{children}</div>
    </div>
  )
}

export default Section
