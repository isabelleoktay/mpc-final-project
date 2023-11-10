// RadioSelect.js
import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const RadioSelect = ({ label, options, selectedValue, onChange }) => {
  return (
    <div className="mb-4">
      <FormControl component="fieldset">
        <Typography variant="h6" gutterBottom>
          {label}
        </Typography>
        <RadioGroup 
          aria-label={label} 
          name={label} 
          value={selectedValue} 
          onChange={(event) => onChange(event.target.value)}
          InputProps={{
            className: 'border rounded w-full p-2 mb-4',
          }}
          InputLabelProps={{
            className: 'text-gray-700',
          }}>
          {options.map((option) => (
            <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
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
