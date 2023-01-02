import { useCallback, useEffect, useReducer } from 'react';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

const fetchReducer = (state, { type, payload }) => {
  switch (type) {
    case 'REQUEST':
      return { ...state, isLoading: true, error: null };

    case 'SUCCESS':
      return { ...state, isLoading: false, data: payload };

    case 'FAIL':
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};

const useFetch = () => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = useCallback(async () => {
    try {
      dispatch({ type: 'REQUEST', payload: '' });
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await res.json();
      dispatch({ type: 'SUCCESS', payload: json });
    } catch (error) {
      dispatch({ type: 'FAIL', payload: error });
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return state;
};
