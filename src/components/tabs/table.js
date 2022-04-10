import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#4C452B',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor : '#b6aa637a',
    fontSize : '18px'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(criteria, improvement, performance, hierarchy, certification) {
  return { criteria, improvement, performance, hierarchy, certification };
}

const rows = [
  createData('Freshwater use', '25% reduction by 2025', 'Yes', 'Publicly disclosed', 'Alliance for Water Stewardship'),
  createData('Wastewater reduction', '', '', '', ''),
  createData('Energy efficiency ', '', '', '', ''),
  createData('Move towards renewable energy', '', '', '', ''),
  createData('Monitor air emissions that occur in densely populated areas.', '', '', '', ''),
  createData('Proportion of solid waste going to the landfill', '', '', '', ''),
  createData('Proportion of material recycled', '', '', '', '')
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right">TARGET (% IMPROVEMENT BY YEAR)</StyledTableCell>
            <StyledTableCell align="right">MEASURE ANNUAL PERFORMANCE</StyledTableCell>
            <StyledTableCell align="right">REPORTING HIERARCHY</StyledTableCell>
            <StyledTableCell align="right">THIRD PARTY CERTIFICATION</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.criteria}>
              <StyledTableCell component="th" scope="row">
                {row.criteria}
              </StyledTableCell>
              <StyledTableCell align="right">{row.improvement}</StyledTableCell>
              <StyledTableCell align="right">{row.performance}</StyledTableCell>
              <StyledTableCell align="right">{row.hierarchy}</StyledTableCell>
              <StyledTableCell align="right">{row.certification}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}