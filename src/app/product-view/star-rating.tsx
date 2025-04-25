import React from "react"
import { Star } from "lucide-react"

interface StarRatingProps {
  totalStars: number
  filledStars: number
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars, filledStars }) => {
  const stars = []

  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      i <= filledStars ? (
        <Star
          width={15}
          key={i}
          className="text-yellow-500 w-[20px]"
          fill="currentColor"
        />
      ) : (
        <Star width={15} key={i} className="text-gray-300 w-[20px]" />
      )
    )
  }

  return <div className="flex">{stars}</div>
}

export default StarRating
