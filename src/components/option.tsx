import React, {  } from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

const Option = ({select, setSelect}:{
    select: string;
    setSelect: (_:string)=> void
}) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.target.value;
        setSelect(selectedValue)
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup
                aria-label="checkboxes"
                name="checkboxesGroup"
                value={select}
                onChange={handleChange}
            >
                <div style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column',color:'black'}}>
                    <FormControlLabel value="all" control={<Radio />} label="All " />
                    <FormControlLabel value="income" control={<Radio />} label="Income" />
                    <FormControlLabel value="expense" control={<Radio />} label="Expense" />
                </div>
            </RadioGroup>
        </FormControl>
    );
};

export default Option;
