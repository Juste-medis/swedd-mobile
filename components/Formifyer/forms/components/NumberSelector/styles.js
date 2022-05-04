import {textPrimary, placeholderTextColor} from '../../config/colors';

export default {
  inputContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: placeholderTextColor,
    borderWidth: 1,
    borderRadius: 3,
    width: '30%',
  },
  input: {
    flex: 1,
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    textAlign: 'center',
    color: textPrimary,
    opacity: 0.8,
  },
  controllersContainer: {
    padding: 5,
  },
};
