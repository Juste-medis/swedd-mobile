import {combineReducers} from 'redux';
import * as TYPES from './types';

const bestCategoryReducer = (state = {best_categories: []}, action) => {
  switch (action.type) {
    case TYPES.ADD_BEST_CATEGORIE:
      let {best_categories} = state;
      if (action.payload.index === '') {
        best_categories = [];
      } else {
        best_categories.push({
          name: action.payload.index,
          data: action.payload.data,
        });
      }
      if (best_categories.length == 11) {
        const pub = best_categories.filter(ele => ele.name.match(/^p[0-9]$/g));
        const cat = best_categories.filter(ele => !ele.name.match(/^p[0-9]$/g));
        best_categories = [];
        best_categories.push(
          pub.shift(),
          cat.shift(),
          cat.shift(),
          pub.shift(),
          cat.shift(),
          cat.shift(),
          pub.shift(),
          cat.shift(),
          cat.shift(),
          pub.shift(),
          cat.shift(),
        );
      }
      return {best_categories};
    default:
      return state;
  }
};

const SearchReducer = (state = {search_list: []}, action) => {
  switch (action.type) {
    case TYPES.SET_SEARCH_LIST:
      let {search_list} = state;
      if (action.payload == '') {
        search_list = [];
      } else {
        search_list.push(action.payload);
      }
      return {search_list};
    default:
      return state;
  }
};

const SetPlayVideoReducer = (state = {session_select: {}}, action) => {
  switch (action.type) {
    case TYPES.SET_SELECTED_VIDEO:
      let {session_select} = state;
      session_select = action.payload;
      return {session_select};
    default:
      return state;
  }
};
const SetTempReducer = (state = {temp: {index: 0}}, action) => {
  switch (action.type) {
    case TYPES.TEMP_TYPE:
      let {temp} = state;
      temp = action.payload;
      return {temp};
    default:
      return state;
  }
};
const ProfilReducer = (
  state = {
    account: {
      id: 0,
      photourl: '',
      description: '',
      user_type: '',
      job: '',
      mail: '',
      first_name: '',
      last_name: '',
      address: '',
      filled_fiche: [],
      rejected_fiche: [],
      accepted_fiche: [],
      review_fiche: [],
      notifications: [],
      animators: [],
      beneficiaires: [],
      formations: [],
      kits: [],
    },
  },
  action,
) => {
  switch (action.type) {
    case TYPES.SET_ROFIL:
      let {account} = state;
      let setdef = Object.keys(action.payload);
      for (let si = 0; si < setdef.length; si++) {
        const key = setdef[si];
        account[key] = action.payload[key];
      }
      return {account};
    case TYPES.ADD_ROFIL_ITEM:
      account = state.account;
      let {key, data} = action.payload;
      let valcon = account[key];

      if (Array.isArray(valcon)) {
        if (account[key].find(el => el === data)) {
          if (action.payload.force !== 'add') {
            account[key] = account[key].filter(function (ele) {
              return ele !== data;
            });
          }
        } else {
          account[key].push(data);
        }
      } else {
        switch (typeof valcon) {
          case 'undefined':
            console.log('undefinis ninit');
            break;
          default:
            account[key] = data;
            break;
        }
      }
      return {account};
    default:
      return state;
  }
};

export default combineReducers({
  bestcategories: bestCategoryReducer,
  searchlist: SearchReducer,
  mysession_select: SetPlayVideoReducer,
  my_profil: ProfilReducer,
  my_temp: SetTempReducer,
});
