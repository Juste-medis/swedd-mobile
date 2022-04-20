import NetInfo from '@react-native-community/netinfo';
import Globals from '../Ressources/Globals';
import Neter from '../Ressources/Neter';
import Storer from './storer';
const baseUrl = Neter.uri1;
let Fetcher = {
  FetchInternet: function () {
    NetInfo.addEventListener(async state => {
      Globals.INTERNET = state.isInternetReachable;
      if (!Globals.INTERNET) {
        return false;
      }
      const fiches = await Storer.getData('@QuedFiche');
      /*
      if (fiches && fiches.length > 0) {
        fiches.forEach(async element => {
          if (Globals.INTERNET) {
            const posted = await this.PostFiche(element);
            if (posted) {
              console.log(posted);
              //const flated = posted.filter(mes => mes._date === element._date);
              //console.log(flated);
              //await Storer.storeData('@QuedFiche', flated);
            }
          }
        });
      }
      */
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
    let url = `${baseUrl}/api/beneficiaires?facilitateur=${data}&page=${page}`;
    console.log(url);
    let res = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const response = await res.json();
    return response;
  },
  Getformations: async function (data, page) {
    let url = `${baseUrl}/api/formations?facilitateur=${data}&page=${page}`;
    let res = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const response = await res.json();
    return response;
  },
  Getkits: async function (data, page) {
    let url = `${baseUrl}/api/kits?facilitateur=${data}&page=${page}`;
    let res = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const response = await res.json();
    return response;
  },
  GetMessages: async function (setdada) {
    //{type (notification ou message) }
    //=> {error,messages}
    const result = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          success:
            'Si vous avez saisit la bonne adresse mail, des instructions vous sont envoyées dans votre boîte Mail.',
        });
      }, 3000);
    });
    return await result;
  },
  GetFiches: async function (facilitateur, page, fichestate) {
    let url = `${baseUrl}/api/fiches?page=${page}&facilitateur=${facilitateur}&fichestate=${fichestate}`;
    let res = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const response = await res.json();
    return response;
  },
  Signout: async function (setdada) {
    const result = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: 1,
        });
      }, 3000);
    });
    return await result;
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
  PostFiche: async function (allrep, categorieFiche) {
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
      Fiche._categorieFiche = categorieFiche;

      let fiches = await Storer.getData('@QuedFiche');
      //sauvegarder dans la liste des non envoyé
      if (fiches) {
        fiches.push(Fiche);
      } else {
        fiches = [Fiche];
      }
      await Storer.storeData('@QuedFiche', fiches);
      return {
        success_offline: 'Fiche enrégistrée ! (connexion indisponible)',
      };
    }
  },
  AuthSignin: async function (setdada) {
    let url = baseUrl + '/api/login';
    let res = await fetch(url, {
      method: 'POST',
      body: setdada,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  },
  GetUserData: async function (setdada, tk) {
    let url = baseUrl + '/api/me';
    let res = await fetch(url, {
      method: 'GET',
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
