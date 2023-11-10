// TextInput.js
import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const TextInput = ({ id, label, value, onChange }) => {
  return (
    <TextField
      id={id}
      label={label}
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      InputProps={{
        className: 'border rounded w-full p-2 mb-4',
      }}
      InputLabelProps={{
        className: 'text-gray-700',
      }}
    />
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
