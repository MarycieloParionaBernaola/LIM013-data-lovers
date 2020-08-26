// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filterDataBySpecies = (data,condition) => {
  const species = item => item.species == condition;
  const newArray = data.filter(species);
  console.table(newArray);
  return newArray;
};
