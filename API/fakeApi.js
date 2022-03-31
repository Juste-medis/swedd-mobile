import {generateRandom, randomDate} from '../Helpers/Utils';
import Fiches from '../Ressources/Data/Fiches';
import {animators, descriptions, kits} from '../Ressources/Data/properties';
import Neter from '../Ressources/Neter';
const baseUrl = Neter.uri1;

let Fetcher = {
  GetSection: async function (setdada) {
    const result = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          trancriptarr: [
            'Il s’est agrippé à moi.',
            "Je m'assied sur un dabouret",
            'regarde cet homme devant toi',
            'Tourne à gauche',
            'respecte tes aînés',
            "L'homme travail dur pour gagner son pain",
            'Tourne à droite',
          ],
          language: 'Fongbe',
        });
      }, 3000);
    });
    return await result;
  },
  GetMessages: async function (setdada) {
    const result = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          trancriptarr: [
            'Il s’est agrippé à moi.',
            "Je m'assied sur un dabouret",
            'regarde cet homme devant toi',
            'Tourne à gauche',
            'respecte tes aînés',
            "L'homme travail dur pour gagner son pain",
            'Tourne à droite',
          ],
          language: 'Fongbe',
        });
      }, 3000);
    });
    return await result;
  },
  GetUnityMessage: async function (setdada) {
    const result = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          description: 'Il s’est agrippé à moi.',
        });
      }, 3000);
    });
    return await result;
  },
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
  AuthSignin: async function (setdada) {
    const result = await new Promise(resolve => {
      setdada = JSON.parse(setdada);
      setTimeout(() => {
        resolve({
          user_type: setdada.user_type,
          mail: setdada.mail,
          first_name: 'Mathildda',
          last_name: 'Martica',
          address: 'Abomey Calavi',
          filled_fiche: Array.apply(null, Array(50)).map(function (x, i) {
            const radi = generateRandom(Fiches.length);
            return {
              id: i + 1,
              id_fiche: Fiches[radi].id,
              title: Fiches[radi].title,
            };
          }),
          rejected_fiche: Array.apply(null, Array(30)).map(function (x, i) {
            const radi = generateRandom(Fiches.length);
            return {
              id: i + 1,
              id_fiche: Fiches[radi].id,
              title: Fiches[radi].title,
            };
          }),
          accepted_fiche: Array.apply(null, Array(80)).map(function (x, i) {
            const radi = generateRandom(Fiches.length);
            return {
              id: i + 1,
              id_fiche: Fiches[radi].id,
              title: Fiches[radi].title,
            };
          }),
          review_fiche: Array.apply(null, Array(31)).map(function (x, i) {
            const radi = generateRandom(Fiches.length);
            return {
              id: i + 1,
              id_fiche: Fiches[radi].id,
              title: Fiches[radi].title,
            };
          }),
          animators: Array.apply(null, Array(50)).map(function (x, i) {
            return {
              id: i + 1,
              name: animators[generateRandom(animators.length)],
              description: descriptions[generateRandom(descriptions.length)],
              photo: 'https://picsum.photos/200',
            };
          }),
          beneficiaires: Array.apply(null, Array(66)).map(function (x, i) {
            return {
              id: i + 1,
              name: animators[generateRandom(animators.length)],
              description: descriptions[generateRandom(descriptions.length)],
              photo: 'https://picsum.photos/200',
            };
          }),
          formations: Array.apply(null, Array(25)).map(function (x, i) {
            const radi = generateRandom(Fiches.length);
            return {
              id: i + 1,
              name: Fiches[radi].title,
              description: descriptions[generateRandom(descriptions.length)],
            };
          }),
          kits: Array.apply(null, Array(19)).map(function (x, i) {
            return {
              id: i + 1,
              name: kits[generateRandom(kits.length)],
              description: descriptions[generateRandom(descriptions.length)],
            };
          }),
          notifications: Array.apply(null, Array(15)).map(function (x, i) {
            return {
              id: i + 1,
              description: descriptions[generateRandom(descriptions.length)],
              date_envoi: randomDate(new Date(2021, 0, 1), new Date()),
              date_lecture: randomDate(new Date(2021, 0, 1), new Date()),
              expediteur: animators[generateRandom(animators.length)],
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
          first_name: 'Mathildda',
          last_name: 'Martica',
          address: 'Abomey Calavi',
          filled_fiche: 68,
          rejected_fiche: 80,
          accepted_fiche: 8,
          review_fiche: 15,
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
  PutSection: async function (setdada) {
    let url = baseUrl + '/auth/users/authenticate';
    let res = await fetch(url, {
      method: 'POST',
      body: setdada,
      credentials: 'include',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return await res.json();
  },
};
export default Fetcher;
