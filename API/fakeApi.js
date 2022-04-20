import {generateRandom, randomDate} from '../Helpers/Utils';
import {
  arrondissements,
  collecteurs,
  communes,
  descriptions,
  formations,
  kits,
} from '../Ressources/Data/properties';
import Globals from '../Ressources/Globals';
import Neter from '../Ressources/Neter';
import Storer from './storer';

async function resolveresponse(obj) {
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve(obj);
    }, 3000);
  });
}
let Fetcher = {
  RessetPassword: async function (setdada) {
    const result = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          success_message:
            'Si vous avez saisit la bonne adresse mail, des instructions vous sont envoyées dans votre boîte Mail.',
        });
      }, 3000);
    });
    return await result;
  },
  ChangePassPassu: async function (setdada) {
    //{new_pass,password_conf,password}
    //=>{error,success}
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
  PostFiche: async function (setdada) {
    //{ficheid,beneficiaire:{nom,prenom,...},collecteur:{nom,prenom,...},...}
    //=>{error,success}
    if (Globals.INTERNET) {
    } else {
      let Fiche = JSON.parse(setdada);
      Fiche._date = Date.now();
      Fiche._unsynced = true;

      let fiches = await Storer.getData('@QuedFiche');
      let afiches = await Storer.getData('@OfflineFiche');
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
  PostBeneficiaire: async function (setdada) {
    //{ficheid,beneficiaire:{nom,prenom,...},collecteur:{nom,prenom,...},...}
    //=>{error,success}
    //if (Globals.INTERNET) {
    if (false) {
      //a supprimmer
    } else {
      let Fiche = JSON.parse(setdada);
      Fiche._date = Date.now();
      Fiche._unsynced = true;

      let fiches = await Storer.getData('@QuedFiche');
      let afiches = await Storer.getData('@OfflineFiche');
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
  GetFiches: async function (data) {
    //{fichestate (all,review,rejected,accepted) }
    //=> {error,fiches}
    //if (Globals.INTERNET) {
    if (false) {
      //a supprimmer
    } else {
      let afiches = await Storer.getData('@OfflineFiche');
      afiches = afiches || [];
      switch (data.fichestate) {
        case 'review':
          //todo : get plutot a base de propriété mes et de fichestate
          afiches = afiches.filter((mes, index) => index > 3 && index < 9);
          break;
        case 'rejected':
          //todo : get plutot a base de propriété mes et de fichestate
          afiches = afiches.filter((mes, index) => index > 0 && index < 4);
          break;
        case 'accepted':
          //todo : get plutot a base de propriété mes et de fichestate
          afiches = afiches.filter((mes, index) => index > 8 && index < 13);
          break;
        default:
          afiches = afiches;
          break;
      }
      return {
        fiches: afiches,
      };
    }
  },
  /*
   Storer.getData("@SAVED_NOTES").then((dati) => {
              if (dati) {
                let notes = dati.find((e) => e.id == id);
                notes.content = notes.content.filter((e) => e.id != note.id);
                dati = dati.filter((e) => e.id != id);
                dati.push(notes);
                Storer.storeData("@SAVED_NOTES", dati);
              }
              ToastAndroid.show(
                Globals.STRINGS.suceffully_delete,
                ToastAndroid.LONG
              );
              navigation.pop();
            });
*/ GetMessages: async function (setdada) {
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
  /**
 GetCollecteurs: async function (data, cache) {
    //=> {error,collecteurs}
    let result = {};
    if (cache) {
      let cachedData = await Storer.getData('@Collecteurs');
      if (cachedData) {
        result = cachedData;
      }
    } else {
      result = await resolveresponse({
        collecteurs: Array.apply(null, Array(30)).map(function (x, i) {
          return {
            id: i + 1,
            new: 1,
            name: collecteurs[generateRandom(collecteurs.length)],
            description: descriptions[generateRandom(descriptions.length)],
            urlPhoto: 'https://picsum.photos/200',
          };
        }),
      });
    }
    return result;
  },
   */
  GetCollecteurs: async function (data, cache) {
    //=> {error,collecteurs}
    return await resolveresponse({
      collecteurs: Array.apply(null, Array(30)).map(function (x, i) {
        return {
          id: i + 1,
          new: 1,
          name: collecteurs[generateRandom(collecteurs.length)],
          description: descriptions[generateRandom(descriptions.length)],
          urlPhoto: 'https://picsum.photos/200',
        };
      }),
    });
  },
  GetBeneficiaires: async function (data, cache) {
    //=> {error,beneficiaires}
    return await resolveresponse({
      beneficiaires: Array.apply(null, Array(30)).map(function (x, i) {
        return {
          id: i + 1,
          new: 1,
          name: collecteurs[generateRandom(collecteurs.length)],
          description: descriptions[generateRandom(descriptions.length)],
          urlPhoto: 'https://picsum.photos/200',
        };
      }),
    });
  },
  Getformations: async function (data, cache) {
    //=> {error,formations}
    return await resolveresponse({
      formations: Array.apply(null, Array(30)).map(function (x, i) {
        return {
          id: i + 1,
          libelle: formations[generateRandom(formations.length)],
          dateDebut: randomDate(new Date(2022, 0, 1), new Date()),
          dateFin: randomDate(new Date(2022, 0, 1), new Date()),
          formationCentres: [
            `${arrondissements[generateRandom(arrondissements.length)].label},${
              communes[generateRandom(communes.length)].label
            }`,
          ],
        };
      }),
    });
  },
  Getkits: async function (data, cache) {
    //=> {error,kits}
    return await resolveresponse({
      kits: Array.apply(null, Array(30)).map(function (x, i) {
        return {
          id: i + 1,
          libelle: kits[generateRandom(kits.length)],
        };
      }),
    });
  },
  AuthSignin: async function (setdada) {
    const result = await new Promise(resolve => {
      setdada = JSON.parse(setdada);
      setTimeout(() => {
        resolve({
          username: setdada.username,
          user_type: setdada.user_type,
          mail: setdada.mail,
          roles: [],
          id: 2,
          prenom: 'Mathildda',
          nom: 'Martica',
          contact: '94632954',
          urlPhoto: 'https://picsum.photos/200',
          adminId: 50,
          ficheRemplies: 50,
          ficheRejetes: 30,
          ficheValide: 80,
          ficheAttente: 31,
          collecteurs: 50,
          nbrBeneficiaire: 66,
          formations: 25,
          kits: 19,
          notifications: Array.apply(null, Array(15)).map(function (x, i) {
            return {
              id: i + 1,
              description: descriptions[generateRandom(descriptions.length)],
              date_envoi: randomDate(new Date(2021, 0, 1), new Date()),
              date_lecture: randomDate(new Date(2021, 0, 1), new Date()),
              expediteur: collecteurs[generateRandom(collecteurs.length)],
            };
          }),
        });
      }, 3000);
    });
    return await result;
  },
  UpdateData: async function (setdada) {
    const result = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          sucess_Update: 'Modification reuissi !',
          prenom: 'Mathildda',
          nom: 'Martica',
          address: 'Abomey Calavi',
          contact: '94632954',
          adminId: 50,

          ficheRemplies: 68,
          ficheRejetes: 80,
          nbrBeneficiaire: 8,
          ficheAttente: 15,
          new_messages: 20,
          new_notifications: 15,
        });
      }, 3000);
    });
    return await result;
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
  CheckAuth: async function (setdada, tk) {
    const result = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          saved: 5,
          checked: 15,
          rejected: 20,
          earned: 30,
        });
      }, 3000);
    });
    return await result;
  },
  GetUserData: async function (setdada) {
    const result = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          saved: 5,
          checked: 15,
          rejected: 20,
          earned: 30,
          name: 'Mathildda Martica',
        });
      }, 3000);
    });
    return await result;
  },
};
export default Fetcher;
