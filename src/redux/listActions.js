import axios from 'axios';

export const fetchListData = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_LIST_REQUEST' });

    try {
      const response = await axios.get('https://example-api.com/list');
      const data = response.data; // Assuming the response data is an array of items

      dispatch({ type: 'FETCH_LIST_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_LIST_FAILURE', payload: error.message });
    }
  };
};
