export const getInputType = subtype => {
  switch (subtype) {
    case 'text':
      return 'default';
    case 'tel':
    case 'numeric':
      return 'numeric';
    case 'email':
      return 'email-address';
    default:
      return 'default';
  }
};
