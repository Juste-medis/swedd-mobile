import Globals from '../Ressources/Globals';
import {Linking, Share} from 'react-native';
import {ToastAndroid, Alert} from 'react-native';
import {monthNamesShort} from '../Ressources/Data/datepicker';

export function toast_message(mes, dur = ToastAndroid.LONG) {
  ToastAndroid.show(mes, dur);
}

export function alert_message(
  title = '',
  mes = '',
  retry = Globals.STRINGS.retry,
  handle = () => {},
) {
  Alert.alert(
    title,
    mes,
    [
      {
        text: Globals.STRINGS.cancel,
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: retry,
        onPress: handle,
      },
    ],
    {cancelable: false},
  );
}

export async function onShare(mes) {
  try {
    //todo , mettre l'url du cour a la place
    const result = await Share.share({
      message: mes,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
}
/**
 *to convert ms to date
 * @param {conv} time the ms time
 */
export function secondTotime(time) {
  return ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + (time % 60);
}

/**
 *to convert object to hour
 * @param {conv} time the ms time
 */
export function computeTime(time) {
  let car = {
    1: 24,
    2: 1,
    3: 0.017,
  };
  //"duration": "{\"dur\":66,\"unit\":1}"
  return time.dur * car[time.unit];
}

/**
 *to convert object to hour
 * @param {conv} time the ms time
 */
export function hour_to_string(time, separator = ' h ', limit = ' min') {
  let plain = Math.trunc(time);
  let minute = Math.trunc(60 * (time - plain));
  return `${
    plain.toString().length === 1 ? '0' + plain : plain
  } ${separator.toString()} ${
    minute.toString().length === 1 ? '0' + minute : minute
  } ${limit.toString()} `;
}

/**
 *to random a value from an object
 * @param {conv} time the ms time
 */
export function date_stringer(last_modified) {
  let year = last_modified.getFullYear(),
    month = last_modified.getMonth() + 1,
    dt = last_modified.getDate();
  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return year + '-' + month + '-' + dt;
}

/**
 *to convert data to strin date format "yyyy/mm/dd"
 * @param {conv} time the ms time
 */
export function date_to_string(last_modified, whithHour) {
  if (last_modified) {
    last_modified = new Date(last_modified);
    let year = last_modified.getFullYear();
    let month = last_modified.getMonth() + 1;
    let dt = last_modified.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    let strdate = year + '-' + month + '-' + dt;
    strdate += whithHour
      ? ' , ' + last_modified.getHours() + ':' + last_modified.getMinutes()
      : '';

    return strdate;
  }
}
/**
 *to convert data to strin date format "yyyy/mm/dd"
 * @param {conv} time the ms time
 */
export function date_to_local_string(last_modified, whithHour) {
  if (last_modified) {
    last_modified = new Date(last_modified);
    let year = last_modified.getFullYear();
    let month = last_modified.getMonth() + 1;
    let dt = last_modified.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    let strdate = `${dt} ${monthNamesShort[month - 1]} ${year} `;
    strdate += whithHour
      ? ' à ' + last_modified.getHours() + ':' + last_modified.getMinutes()
      : '';

    return strdate;
  }
}
/**
 *ordon list based on @param {compar} a property
 */
export function ordoner(res, compar, order = 1) {
  return res.sort(function compare(a, b) {
    let fi = compar ? a[compar] : a;
    let se = compar ? b[compar] : b;
    if (fi < se) {
      return -order || -1;
    }
    if (fi > se) {
      return order || 1;
    }
    return 0;
  });
}

/**
 *join les noms par des tirets @param {compar} a property
 */
export function hypheny(res) {
  return res ? res.replace(/\s+/g, '-') : '';
}
/**
 *serealiser les donnéess @param {compar} a property
 */
export function UriEncoder(obj) {
  var formBody = [];
  for (var property in obj) {
    formBody.push(
      encodeURIComponent(property) + '=' + encodeURIComponent(obj[property]),
    );
  }
  formBody = formBody.join('&');
  return formBody;
}

/**
 *aCompare deux objets par valeurs
/**/

export const object_comparer = (o1, o2) => {
  for (var key in o1) {
    if (o1[key] !== o2[key]) {
      return true;
    }
  }
  return false;
};
/**
 *
 * @param {shema} o1 fi
 * @returns object without html
 */
export const htmlSafe = o1 => {
  return o1 ? o1.replace(/(<([^>]+)>)/gi, '') : '';
};

/**
 *
 * @param {shema} o1 fi
 * @returns paginer une liste
 */
export const paginate = (array, page_size, page_number) => {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};
export const generateRandom = (maxLimit = 100) => {
  let rand = Math.random() * maxLimit;
  rand = Math.floor(rand);
  return rand;
};
export const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
};

export const dynamicCompute = (operation, oldval = 0, value = '') => {
  let result = 0;
  console.log(oldval, value);

  switch (operation) {
    case 'add':
      result = oldval ? Number(oldval) + Number(value) : Number(value);
      break;
    case 'mine':
      result = oldval ? Number(oldval) - Number(value) : Number(value);
      break;
    default:
      break;
  }
  return result;
};

export function Numberise(str) {
  let regexRemover = /:("\d+")/gm;
  let match = regexRemover.exec(str);
  do {
    str = str.replace(match[1], match[1].replace(/\D+/g, ''));
  } while ((match = regexRemover.exec(str)) !== null);
  return str;
}

export const flatArrayBykey = (array = [], key = '', value = '') => {
  const result = array.filter(mes => {
    if (Array.isArray(mes[key])) {
      return mes[key].findIndex(fi => fi === value) !== -1;
    }
    return mes[key] === value;
  });
  if (result.length === 0 || !array[0][key]) {
    return array;
  }
  return result;
};

export async function sendEmail(to, subject, body, options = {}) {
  const {cc, bcc} = options;

  let url = `mailto:${to}`;

  // Create email link query
  const query = UriEncoder({
    subject: subject,
    body: body,
    cc: cc,
    bcc: bcc,
  });

  if (query.length) {
    url += `?${query}`;
  }

  // check if we can use this link
  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    throw new Error('Provided URL can not be handled');
  }

  return Linking.openURL(url);
}
