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
  RessetPassword: async function (setdada) {
    const result = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          success_message:
            'Si vous avez saisit la bonne addresse mail, des instructions vous sont envoyées dans votre boîte Mail.',
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
          mail: setdada.mail,
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
