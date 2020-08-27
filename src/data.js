// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filterDataByProperty = (data, property, type) => {
  const condition = item => item[property] == type;
  const filterArray = data.filter(condition);
  return filterArray;
};
