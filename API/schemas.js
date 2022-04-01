import * as yup from 'yup';
import Global from '../Ressources/Globals';

export const Schemasignin = yup.object().shape({
  username: yup.string().min(3, Global.STRINGS.not_username),
  password: yup.string().min(5, Global.STRINGS.small_code),
});

export const SchemaPassresset = yup.object().shape({
  mail: yup
    .string()
    .email(Global.STRINGS.not_mail)
    .min(3, Global.STRINGS.not_mail),
});
