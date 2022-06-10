import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function FilterSelect({ title, items, selectValue }) {
  const [value, setValue] = React.useState([]);

  const handleChange = (event) => {
    setValue(event.target.value)
    selectValue(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: [100, 100, 200, 220, 220] }} size="small">
      <InputLabel id="demo-select-small">{title}</InputLabel>
      <Select
        labelId={title}
        id={title}
        value={value}
        label={title}
        IconComponent={FilterListIcon}
        onChange={handleChange}
        multiple
      >
        {
        items.map( (value) =>
                (
                    <MenuItem value={value}>{value}</MenuItem>
                )
         )
        }
      </Select>
    </FormControl>
  );
}