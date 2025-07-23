import * as t from '../types';
import axios from 'axios';
import { serialize } from 'object-to-formdata';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const multipart = {
  'Content-Type': 'multipart/form-data',
};

export const getBooks = (
  category,
  featured,
  translate,
  furthercoming,
  page = 1
) => async (dispatch, getState) => {
  let url = `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&page=${page}`;
  if (category) url += `&category=${category}`;
  if (featured) url += `&featured=${featured}`;
  if (translate) url += `&translate=${translate}`;
  if (furthercoming) url += `&furthercoming=${furthercoming}`;

  const data = await axios
    .get(url, { headers })
    .then(res => res)
    .catch(err => {});

  return data;
};

export const getBooksBySerie = serie => async (dispatch, getState) => {
  let data;
  data = await axios
    .get(
      `${process.env.REACT_APP_API}/books?serie=${serie}`,
      { headers }
    )
    .then(res => {
      return res;
    })
    .catch(err => {});
  return data;
};

export const postBook = payload => async (dispatch, getState) => {
  const formData = serialize(payload);

  let data;
  data = await axios
    .post(`${process.env.REACT_APP_API}/uploadFile`, formData, { multipart })
    .then(res => {
      return res;
    })
    .catch(err => {});
  return data;
};

export const getBook = id => async (dispatch, getState) => {
  const data = await axios
    .get(
      `${process.env.REACT_APP_API}/books/${id}`,
      { headers }
    )
    .then(res => {
      return res;
    })
    .catch(err => { return err });
  return data;
};
