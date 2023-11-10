// MultiSelect.js
import React, { useState } from 'react';
import { FormControl, FormGroup, FormControlLabel, Checkbox, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const MultiSelect = ({ options, selectedValues, onChange }) => {
  const [otherInputVisible, setOtherInputVisible] = useState(false);
  const [otherInputValue, setOtherInputValue] = useState('');

  const handleCheckboxChange = (value) => {
    // Toggle the selected value
    const updatedSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((selected) => selected !== value)
      : [...selectedValues, value];

    onChange(updatedSelectedValues);

    // Show/hide the other input based on the "other" option
    setOtherInputVisible(updatedSelectedValues.includes('other'));
  };

  const handleOtherInputChange = (event) => {
    setOtherInputValue(event.target.value);
  };

  return (
    <FormControl>
      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                checked={selectedValues.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
                name={option.label}
              />
            }
            label={option.label}
          />
        ))}
        {otherInputVisible && (
          <TextField
            id="other-input"
            label="Other (please elaborate)"
            variant="outlined"
            fullWidth
            value={otherInputValue}
            onChange={handleOtherInputChange}
            className="mb-4"
            InputProps={{
              className: 'border rounded w-full p-2',
            }}
            InputLabelProps={{
              className: 'text-gray-700',
            }}
          />
        )}
      </FormGroup>
    </FormControl>
  );
};

MultiSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiSelect;
