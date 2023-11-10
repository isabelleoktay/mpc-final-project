// SingleSelect.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

const SingleSelect = ({ label, options, selectedValue, onChange }) => {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id="single-select-label">{label}</InputLabel>
      <Select
        labelId="single-select-label"
        id="single-select"
        value={selectedValue}
        onChange={(event) => onChange(event.target.value)}
        label={label}
        displayEmpty={true}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SingleSelect.propTypes = {
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

export default SingleSelect;
