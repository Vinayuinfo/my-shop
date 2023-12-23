import StarRatings from 'react-star-ratings';

export type RatingProps = {
  rating?: number;
  starSize?: number;
  starSpacing?: number;
  fillColor?: string;
  emptyColor?: string;
  onChange?: (starCount: number) => void;
  rate?: number
};

function Rating({
  rating = 0,
  starSize = 11,
  starSpacing = 1,
  fillColor = '#DD506A',
  emptyColor = '#D9D9D9',
  onChange,
}: RatingProps) {
  return (
    <div className="-mt-1 flex">
      <StarRatings
        rating={rating}
        starDimension={`${starSize}px`}
        starRatedColor={fillColor}
        starHoverColor={fillColor}
        starEmptyColor={emptyColor}
        numberOfStars={5}
        starSpacing={`${starSpacing}px`}
        name="rating"
        rate={''}
        changeRating={onChange}
      />
    </div>
  );
}

export default Rating;
