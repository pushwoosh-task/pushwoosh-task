import fetch from 'isomorphic-fetch';
import {polyfill as promisePolyfill} from 'es6-promise';
promisePolyfill();

const url = 'https://hacker-news.firebaseio.com/v0';

export default store => next => action => {
  if(action.type == 'FETCH'){
    return fetch(`${url}${action.url}`)
    .then(resp => resp.json())
    .then(resp => store.dispatch(action.success(resp)));
  }
  return next(action);
};