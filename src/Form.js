/** @jsxImportSource @emotion/react */
import React from 'react';
import { Typography, TextField, InputLabel, Select, MenuItem, FormControl, FormLabel, RadioGroup, FormControlLabel, FormHelperText, Radio, Checkbox, Button, Box, Grid } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { useFormik } from 'formik';
import * as yup from 'yup';
import moment from 'moment';
import 'moment/locale/ru';

import positions from './positions';

const Form = ({ editedEntry, onEntrySubmission, onEditCancellation }) => {
  moment.locale('ru');

  const formik = useFormik({
    initialValues: {
      lastName: '',
      firstName: '',
      patronymicName: '',
      position: '',
      birthDate: null,
      gender: 'male',
      hiringDate: null,
      dismissalDate: null,
      privileged: false,
    },
    validationSchema: yup.object({
      lastName: yup
        .string()
        .required('Введите значение'),
      firstName: yup
        .string()
        .required('Введите значение'),
      patronymicName: yup
        .string(),
      position: yup
        .string()
        .oneOf(
          positions.map((item) => item.position),
          'Некорректная должность'
        )
        .required('Введите значение'),
      birthDate: yup
        .date()
        .required('Введите значение')
        .nullable(),
      gender: yup
        .string()
        .oneOf(
          ['male', 'female'],
          'Некорректный пол'
        ),
      hiringDate: yup
        .date()
        .required('Введите значение')
        .nullable(),
      dismissalDate: yup
        .date()
        .test(
          'afterHiringDate',
          'Не должна быть раньше даты приёма',
          function (value) {
            return (!this.parent.hiringDate || !value || (value.getTime() >= this.parent.hiringDate.getTime()));
          })
        .nullable(),
      privileged: yup
        .boolean()
        .required('Введите значение'),
    }),
    onSubmit: (values, { resetForm }) => {
      onEntrySubmission(values);
      resetForm();
    },
  });

  if (editedEntry && (formik.values.id !== editedEntry.id)) {
    formik.setValues(editedEntry);
  }

  return (
    <Box display='flex' justifyContent='center'>
      <form
        autoComplete="off"
        onSubmit={(event) => {
          event.preventDefault();
          formik.handleSubmit();
        }}
        css={{
          width: 750,

          '.MuiGrid-item': {
            display: 'flex',
            justifyContent: 'center',
            '@media (min-width: 960px)': {
              display: 'block',
            }
          }
        }}
      >
        <Box display={{ xs: 'flex', md: 'block' }} justifyContent='center'>
          <Typography
            variant="h4"
            css={{ paddingBottom: '.8em' }}>
            {editedEntry ? 'Редактирование сотрудника' : 'Новый сотрудник'}
          </Typography>
        </Box>

        <Grid container spacing={1} css={{ paddingBottom: '1.5em' }}>
          <Grid item xs={12} md={4}>
            <TextField
              name="lastName"
              label="Фамилия"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              name="firstName"
              label="Имя"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              name="patronymicName"
              label="Отчество"
              value={formik.values.patronymicName}
              onChange={formik.handleChange}
              error={formik.touched.patronymicName && Boolean(formik.errors.patronymicName)}
              helperText={formik.touched.patronymicName && formik.errors.patronymicName}
            />
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <FormControl error={formik.touched.position && Boolean(formik.errors.position)} css={{ marginTop: '1em !important' }}>
              <InputLabel id="position-label">Должность</InputLabel>
              <Select
                labelId="position-label"
                name="position"
                value={formik.values.position}
                onChange={formik.handleChange}
                css={{ minWidth: 200, marginBottom: '1em' }}
              >
                {positions.map((item) => <MenuItem value={item.position} key={item.position}>{item.positionName}</MenuItem>)}
              </Select>
              <FormHelperText>{formik.touched.position && formik.errors.position}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="D MMMM YYYY"
              openTo="year"
              margin="normal"
              label="Дата рождения"
              value={formik.values.birthDate}
              onChange={val => {
                formik.setFieldValue("birthDate", val);
              }}
              error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
              helperText={formik.touched.birthDate && formik.errors.birthDate}
              required
              css={{ maxWidth: 225 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl
              component="fieldset"
              error={formik.touched.gender && Boolean(formik.errors.gender)}
              css={{ marginTop: '1em !important' }}
            >
              <FormLabel component="legend">Пол</FormLabel>
              <RadioGroup
                aria-label="Пол"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
              >
                <FormControlLabel value="male" control={<Radio />} label="Мужской" />
                <FormControlLabel value="female" control={<Radio />} label="Женский" />
              </RadioGroup>
              <FormHelperText>{formik.touched.gender && formik.errors.gender}</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={1} css={{ paddingBottom: '1.5em' }}>
          <Grid item xs={12} md={4}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="D MMMM YYYY"
              margin="normal"
              label="Дата приема на работу"
              value={formik.values.hiringDate}
              onChange={val => {
                formik.setFieldValue("hiringDate", val);
              }}
              error={formik.touched.hiringDate && Boolean(formik.errors.hiringDate)}
              helperText={formik.touched.hiringDate && formik.errors.hiringDate}
              required
              css={{ maxWidth: 225 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="D MMMM YYYY"
              margin="normal"
              label="Дата увольнения"
              value={formik.values.dismissalDate}
              onChange={val => {
                formik.setFieldValue("dismissalDate", val);
              }}
              error={formik.touched.dismissalDate && Boolean(formik.errors.dismissalDate)}
              helperText={formik.touched.dismissalDate && formik.errors.dismissalDate}
              minDate={formik.values.hiringDate || new Date('1900-01-01')}
              css={{ maxWidth: 225 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl error={formik.touched.privileged && Boolean(formik.errors.privileged)} css={{ marginTop: '1.5em !important' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="privileged"
                    checked={formik.values.privileged}
                    onChange={formik.handleChange}
                    color="primary"
                  />
                }
                label="Наличие прав"
              />
              <FormHelperText>{formik.touched.privileged && formik.errors.privileged}</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="center">
          <Button type="submit" variant="contained" color="primary">
            {editedEntry ? 'Изменить' : 'Добавить'}
          </Button>
          {editedEntry && (
            <Button variant="contained" color="default" onClick={() => { onEditCancellation(); formik.resetForm(); }} css={{ marginLeft: '1em !important' }}>
              Отменить редактирование
            </Button>
          )}
        </Box>
      </form>
    </Box >
  );
}

export default Form;

