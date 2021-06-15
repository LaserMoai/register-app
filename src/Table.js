/** @jsxImportSource @emotion/react */
import React from 'react';
import { Box, Paper, TableContainer, TableCell, TableHead, Table as MuiTable, TableRow, TableBody, IconButton } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import 'moment/locale/ru';

import positions from './positions';


const Table = ({ data, onEditedEntrySelection, editedEntryId }) => {
  moment.locale('ru');
  return (
    <Box mb={5}>
      <TableContainer component={Paper} elevation={2}>
        <MuiTable>
          <TableHead>
            <TableRow>
              <TableCell>Фамилия</TableCell>
              <TableCell align="right">Имя</TableCell>
              <TableCell align="right">Отчество</TableCell>
              <TableCell align="right">Должность</TableCell>
              <TableCell align="right">Дата рождения</TableCell>
              <TableCell align="right">Пол</TableCell>
              <TableCell align="right">Дата приема на работу</TableCell>
              <TableCell align="right">Дата увольнения</TableCell>
              <TableCell align="right">Наличие прав</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} css={{ backgroundColor: (row.id === editedEntryId) && grey[100] }}>
                <TableCell>{row.lastName}</TableCell>
                <TableCell align="right">{row.firstName}</TableCell>
                <TableCell align="right">{row.patronymicName}</TableCell>
                <TableCell align="right">{positions.find(item => (item.position === row.position)).positionName}</TableCell>
                <TableCell align="right">{row.birthDate && moment(row.birthDate).format('D MMM YYYY')}</TableCell>
                <TableCell align="right"><span css={{ fontSize: '2em' }}>{(row.gender === 'male') ? '♂' : '♀'}</span></TableCell>
                <TableCell align="right">{row.hiringDate && moment(row.hiringDate).format('D MMM YYYY')}</TableCell>
                <TableCell align="right">{row.dismissalDate && moment(row.dismissalDate).format('D MMM YYYY')}</TableCell>
                <TableCell align="right">{row.privileged ? 'Есть' : 'Нет'}</TableCell>
                <TableCell align="right">
                  <IconButton size="small" aria-label="Редактировать" onClick={() => onEditedEntrySelection(row.id)} >
                    <EditIcon css={{ color: (row.id === editedEntryId) && '#3f51b5' }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Box>
  );
}

export default Table;