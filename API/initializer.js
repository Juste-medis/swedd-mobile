import Globals from '../Ressources/Globals';
import store from '../Store/Store';
import {setProfil} from '../Store/Actions';
//import Notification from "./Notifer";
const Initializer = {
  Fillup: async function () {
    store.dispatch(setProfil(Globals.PROFIL_INFO));
  },
};
export default Initializer;
