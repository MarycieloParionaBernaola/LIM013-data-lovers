// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filterDataByProperty = (data, property, type) => {
  const filterArray = data.filter(item => item[property] == type);
  return filterArray;
};
