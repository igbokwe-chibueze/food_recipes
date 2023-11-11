import { clock } from "../assets/icons";
import PropTypes from 'prop-types'; // Import PropTypes

const Cards = ({ imgURL, food, chef, time  }) => {
  return (
    <div className="card hover:shadow-lg">
        <img src={imgURL} alt="stew" className="h-32 sm:h-48 w-full object-cover" />
        <div className="m-4">
          <span className="font-bold">{food}</span>
          <span className="block text-gray-500 text-sm">{chef}</span>
        </div>
        <div className="badge">
          <img className="inline-block w-5" src={clock} alt="clock" />
          <span>{time}</span>
        </div>
    </div>
  )
}

Cards.propTypes = {
    imgURL: PropTypes.string.isRequired, // imgURL should be a required string
    food: PropTypes.string.isRequired, // food should be a required string
    chef: PropTypes.string.isRequired, // chef should be a required string
    time: PropTypes.number.isRequired, // time should be a required number
};

export default Cards