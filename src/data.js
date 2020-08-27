// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filterDataBySpecies = (data,condition,property) => {
  const species = item => item[property] == condition;
  const newArray = data.filter(species);
  // console.table(newArray);
  return newArray;
};
