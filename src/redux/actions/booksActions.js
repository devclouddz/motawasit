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
  furthercoming
) => async (dispatch, getState) => {
  let data;

  if (!category && !featured && !translate && !furthercoming) {
    data = await axios
      .get(`${process.env.REACT_APP_API}/books?website=منشورات المتوسط`, {
        headers,
      })
      .then(res => {
        return res;
      })
      .catch(err => {});
  } else if (!category && featured && !translate && !furthercoming) {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&featured=${featured}`,
        { headers }
      )
      .then(res => {
        return res;
      })
      .catch(err => {});
  } else if (!category && featured && translate && !furthercoming) {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&featured=${featured}&translate=${translate}`,
        { headers }
      )
      .then(res => {
        return res;
      })
      .catch(err => {});
  } else if (category && !featured && !translate && !furthercoming) {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&category=${category}`,
        { headers }
      )
      .then(res => {
        return res;
      })
      .catch(err => {});
  } else if (!category && !featured && !translate && furthercoming) {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&furthercoming=${furthercoming}`,
        { headers }
      )
      .then(res => {
        return res;
      })
      .catch(err => {});
  } else if (!category && !featured && translate && !furthercoming) {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&translate=${translate}`,
        { headers }
      )
      .then(res => {
        return res;
      })
      .catch(err => {});
  } else if (category && !featured && translate && !furthercoming) {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&category=${category}&translate=${translate}`,
        { headers }
      )
      .then(res => {
        return res;
      })
      .catch(err => {});
  } else if (!category && !featured && translate && furthercoming) {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&furthercoming=${furthercoming}&translate=${translate}`,
        { headers }
      )
      .then(res => {
        return res;
      })
      .catch(err => {});
  }

  //   if (furthercoming) {

  //     data = await axios
  //       .get(
  //         `${
  //           process.env.REACT_APP_API
  //         }/books?website=منشورات المتوسط&furthercoming=${furthercoming.toString()}`,
  //         //   { website: 'المتوسط' },
  //         { headers }
  //       )
  //       .then(res => {
  //         return res;
  //       })
  //       .catch(err => {
  //       });
  //   } else if (featured && !category) {

  //     data = await axios
  //       .get(
  //         `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&featured=${featured}&translate=${translate}`,
  //         //   { website: 'المتوسط' },
  //         { headers }
  //       )
  //       .then(res => {
  //         return res;
  //       })
  //       .catch(err => {
  //       });
  //   } else if (translate || category) {
  //     data = await axios
  //       .get(
  //         `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&category=${category}&translate=${translate}`,
  //         //   { website: 'المتوسط' },
  //         { headers }
  //       )
  //       .then(res => {
  //         return res;
  //       })
  //       .catch(err => {
  //       });
  //   } else {

  //     data = await axios
  //       .get(
  //         `${process.env.REACT_APP_API}/books?website=منشورات المتوسط`,
  //         //   { website: 'المتوسط' },
  //         { headers }
  //       )
  //       .then(res => {
  //         return res;
  //       })
  //       .catch(err => {
  //       });
  //   }
  return data;
};

export const getBooksBySerie = serie => async (dispatch, getState) => {
  let data;
  data = await axios
    .get(
      `${process.env.REACT_APP_API}/books?serie=${serie}`,
      //   { website: 'المتوسط' },
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
      //   { website: 'المتوسط' },
      { headers }
    )
    .then(res => {
      return res;
    })
    .catch(err => { return err });
  return data;
};
