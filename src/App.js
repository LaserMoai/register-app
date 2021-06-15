/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import Table from './Table';
import Form from './Form';

const employees = {
  set: (value) => localStorage.setItem('employees', JSON.stringify(value)),
  read: () => JSON.parse(localStorage.getItem('employees')),
}


function App() {
  const currentEmployees = employees.read();
  const initialData = currentEmployees ?? [
    {
      id: 0,
      lastName: 'Ардаков',
      firstName: 'Игорь',
      patronymicName: 'Герасимович',
      position: 'developer',
      birthDate: new Date(2000, 0, 1),
      gender: 'male',
      hiringDate: new Date(2020, 0, 1),
      dismissalDate: new Date(2020, 0, 1),
      privileged: true,
    },
    {
      id: 1,
      lastName: 'Донченко',
      firstName: 'Иван',
      patronymicName: 'Андреевич',
      position: 'developer',
      birthDate: new Date(2000, 0, 1),
      gender: 'male',
      hiringDate: new Date(2020, 0, 1),
      dismissalDate: new Date(2020, 0, 1),
      privileged: true,
    },
    {
      id: 2,
      lastName: 'Кулагина',
      firstName: 'Юлия',
      patronymicName: 'Анатольевна',
      position: 'developer',
      birthDate: new Date(2000, 0, 1),
      gender: 'female',
      hiringDate: new Date(2020, 0, 1),
      dismissalDate: new Date(2020, 0, 1),
      privileged: true,
    },
    {
      id: 3,
      lastName: 'Бирюков',
      firstName: 'Евгений',
      patronymicName: 'Евгеньевич',
      position: 'developer',
      birthDate: new Date(2000, 0, 1),
      gender: 'male',
      hiringDate: new Date(2020, 0, 1),
      dismissalDate: new Date(2020, 0, 1),
      privileged: true,
    },
    {
      id: 4,
      lastName: 'Васильев',
      firstName: 'Валерий',
      patronymicName: 'Валентинович',
      position: 'developer',
      birthDate: new Date(2000, 0, 1),
      gender: 'male',
      hiringDate: new Date(2020, 0, 1),
      dismissalDate: new Date(2020, 0, 1),
      privileged: true,
    },
    {
      id: 5,
      lastName: 'Девин',
      firstName: 'Игорь',
      patronymicName: 'Владимирович',
      position: 'developer',
      birthDate: new Date(2000, 0, 1),
      gender: 'male',
      hiringDate: new Date(2020, 0, 1),
      dismissalDate: new Date(2020, 0, 1),
      privileged: false,
    },
    {
      id: 6,
      lastName: 'Гришина',
      firstName: 'Ольга',
      patronymicName: 'Константиновна',
      position: 'developer',
      birthDate: new Date(2000, 0, 1),
      gender: 'female',
      hiringDate: new Date(2020, 0, 1),
      dismissalDate: null,
      privileged: true,
    },
    {
      id: 7,
      lastName: 'Карсева',
      firstName: 'Полина',
      patronymicName: 'Алексеевна',
      position: 'developer',
      birthDate: new Date(2000, 0, 1),
      gender: 'female',
      hiringDate: new Date(2020, 0, 1),
      dismissalDate: null,
      privileged: true,
    },
  ];

  const [data, setData] = useState(initialData);
  const [editedEntryId, setEditedEntryId] = useState(null);

  if (!currentEmployees) {
    employees.set(data);
  }

  const submitEntry = (entry) => {
    if (editedEntryId != null) {
      const index = data.findIndex(item => item.id === editedEntryId);
      setData(oldData => {
        const dataCopy = [...oldData];
        dataCopy[index] = entry;
        employees.set(dataCopy);
        return dataCopy;
      });
      setEditedEntryId(null);
    } else {
      setData(oldData => {
        const dataCopy = [...oldData];
        dataCopy.push({ ...entry, id: data.length });
        employees.set(dataCopy);
        return dataCopy;
      });
    }
  }

  const editedEntry = (editedEntryId !== null) && data.find(item => item.id === editedEntryId);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div css={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Paper elevation={5} css={{padding: '1em 2em', margin: '1em 0'}}>
          <Table data={data} editedEntryId={editedEntryId} onEditedEntrySelection={setEditedEntryId} />
          <Form editedEntry={editedEntry} onEntrySubmission={submitEntry} onEditCancellation={() => setEditedEntryId(null)} />
        </Paper>
      </div>
    </MuiPickersUtilsProvider >
  );
}

export default App;
