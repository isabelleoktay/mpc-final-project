// RadioSelect.js
import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import PropTypes from 'prop-types';

const RadioSelect = ({ label, options, selectedValue, onChange }) => {
  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label={label} name={label} value={selectedValue} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

RadioSelect.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioSelect;
