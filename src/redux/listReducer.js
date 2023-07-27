const initialState = {
    listData: [],
    loading: false,
    error: null,
  };
  
  const listReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_LIST_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_LIST_SUCCESS':
        return { ...state, loading: false, listData: action.payload, error: null };
      case 'FETCH_LIST_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default listReducer;
  