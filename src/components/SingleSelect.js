// SingleSelect.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

const SingleSelect = ({ label, options, selectedValue, onChange }) => {
  return (
    <div className="mb-4">
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="single-select-label">{label}</InputLabel>
        <Select
          labelId="single-select-label"
          id="single-select"
          value={selectedValue}
          onChange={(event) => onChange(event.target.value)}
          label={label}
          displayEmpty={true}
          InputProps={{
            className: 'border rounded w-full p-2 mb-4',
          }}
          InputLabelProps={{
            className: 'text-gray-700',
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
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
