import React from 'react';
import { Box, Typography } from '@mui/material';
import '../App.css';

export type FeeClassification = {
  name: string;
  description: string;
  unitPrice: number;
  numOfPeople: number;
  totalPrice: number;
}

type DetailProps = {
  classification: FeeClassification;
  onNumOfPeopleChange: (num: number) => void;
}

function getStyles(){
    const style = {
      classificationName: {
        height: '30px',
        width: '100px',
        float: 'left',
        clear: 'both'
      },
      description: {
        height: '30px',
        width: '150px',
        float: 'left'
      },
      unitPrice: {
        height: '30px',
        width: '100px',
        float: 'left'
      },
      numPeople: {
        height: '30px',
        width: '100px',
        float: 'left'
      }
    }
  return style;
}
const Detail: React.FC<DetailProps> = props => {
    const styles  = getStyles();
    const onNumOfPeopleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
      const num = Number(e.target.value);
      props.onNumOfPeopleChange(num);
    }
  
    const { name, description, unitPrice, numOfPeople } = props.classification;
    return (
      <Box >
        <Typography sx={styles.classificationName}>{name}</Typography>
        <Typography sx={styles.description}>{description}</Typography>
        <Typography sx={styles.unitPrice}>{unitPrice}円</Typography>
        <Typography sx={styles.numPeople}>
          <select
            value={numOfPeople}
            onChange={e => onNumOfPeopleChange(e)}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <span>名</span>
        </Typography>
      </Box>
    );
  }
  
  export default Detail;