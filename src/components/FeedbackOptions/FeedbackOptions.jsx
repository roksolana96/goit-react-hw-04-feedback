import PropTypes from 'prop-types';
import { Button } from "./FeedbackOptions.style";

export const FeedbackOptions = ({ options, onBtnClick }) => (
    <>
      {options.map(option => (
        <Button type="button" key={option} onClick={() => onBtnClick(option)}>
          <span>{option}</span>
        </Button>
      ))}
    </>
  );
  
  FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onBtnClick: PropTypes.func.isRequired,
  };