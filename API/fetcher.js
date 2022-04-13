import NetInfo from '@react-native-community/netinfo';
import Globals from '../Ressources/Globals';
import Neter from '../Ressources/Neter';
import Storer from './storer';
const baseUrl = Neter.uri1;
let Fetcher = {
  FetchInternet: function () {
    NetInfo.addEventListener(state => {
      Globals.INTERNET = state.isInternetReachable;
      Storer.getData('@w_req').then(reqo => {
        if (reqo) {
          this.Handle_Update();
        }
      });
    });
  },
  GetCollecteurs: async function (data, page) {
    let url = `${baseUrl}/api/collecteurs?facilitateur=${data}&page=${page}`;
    let res = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const response = await res.json();
    return response;
  },
  GetBeneficiaires: async function (data, page) {
    let url = `${baseUrl}/api/facilitateur?facilitateur=${data}&page=${page}`;
    let res = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const response = await res.json();
    return response;
  },
  PostBeneficiaire: async function (setdada) {
    let url = baseUrl + '/api/fiches';
    let res = await fetch(url, {
      method: 'post',
      body: setdada,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  },
  PostFiche: async function (allrep) {
    //{ficheid,beneficiaire:{nom,prenom,...},collecteur:{nom,prenom,...},...}
    //=>{error,success}
    if (Globals.INTERNET) {
      let url = baseUrl + '/api/fiches';
      let res = await fetch(url, {
        method: 'post',
        body: JSON.stringify(allrep),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await res.json();
    } else {
      let Fiche = allrep;
      Fiche._date = Date.now();
      Fiche._unsynced = true;

      let fiches = await Storer.getData('@QuedFiche'),
        afiches = await Storer.getData('@OfflineFiche');
      //sauvegarder dans la liste des non envoyé
      if (fiches) {
        fiches.push(Fiche);
      } else {
        fiches = [Fiche];
      }
      //sauvegarder dans la liste des fiches offlines
      if (afiches) {
        afiches.push(Fiche);
      } else {
        afiches = [Fiche];
      }
      await Storer.storeData('@QuedFiche', fiches);
      Storer.storeData('@OfflineFiche', afiches);

      return {
        success_offline: 'Fiche enrégistrée ! (connexion indisponible)',
      };
    }
  },
  AuthSignup: async function (setdada) {
    let url = baseUrl + '/api/users';
    let res = await fetch(url, {
      method: 'post',
      body: JSON.stringify(setdada),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  },
  AuthSignin: async function (setdada) {
    let url = baseUrl + '/api/users/login';
    let res = await fetch(url, {
      method: 'POST',
      body: setdada,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  },
  GetUserData: async function (setdada) {
    let url = baseUrl + '/api/users/login';
    let res = await fetch(url, {
      method: 'POST',
      body: setdada,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  },
  GetSection: async function (setdada) {
    let url = baseUrl + '/api/users/login/';
    let res = await fetch(url, {
      method: 'POST',
      body: setdada,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  },
  GetChallenges: async function (setdada) {
    let url = baseUrl + '/api/challenge/results';
    let res = await fetch(url, {
      method: 'POST',
      body: setdada,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  },
  PutSection: async function (setdada) {
    let url = 'http://217.160.170.119:8000/api/speech/uploadfile/';
    let res = await fetch(url, {
      method: 'POST',
      body: setdada,
      redirect: 'follow',
      headers: {
        Accept: 'application/json',
        'Content-Type': false,
      },
    });
    return await res.json();
  },
  CheckAuth: async function (setdada, tk) {
    let url = baseUrl + '/auth/users/current/' + setdada;
    let res = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      body: tk,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return await res.json();
  },
};
export default Fetcher;
