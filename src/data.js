// Filter function
export const filterData = {

  byProperty: (data, property, type) => {
    if (data !== undefined && property !== undefined && type !== undefined) {
      const filterArray = data.filter (item => item [property] == type)
      // console.log(filterArray);
      return filterArray
    } else {
      throw Error('All parameters must be filled');
    }
  },

  searchByName : (data, property, inputSearch) => {
    if (data !== undefined && property !== undefined && inputSearch !== undefined) {
      const filterSearchArray = data.filter ( item => 
        {
          return item[property].toLowerCase().includes(inputSearch.toLowerCase());
        }
      )
      // console.log (inputSearch.toLowerCase());
      // console.log (filterSearchArray)
      return filterSearchArray;
    } else {
      throw Error('All parameters must be filled');
    }
  }
}


// Sort function
export const sortDataByName = (data, sortOrder) => {
  const dataCloned = [...data];
  return dataCloned.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (sortOrder === 'A-Z') {
          if (nameA < nameB) {
              return -1;
          } else if (nameA > nameB) {
              return 1;
          } else {
              return 0;
          }
      } else {
          if (nameA > nameB) {
              return -1;
          } else if (nameA < nameB) {
              return 1;
          } else {
              return 0;
          }
      }
  })};

// Statistics Percentage function
export const statisticsPercentage = (key, value, data) => {
  let total = data.length;
  let items = data.filter(element => element[key].indexOf(value) > -1);
  let result = (items.length * 100) / total;
  return Math.round(result);
};

// Statistics Value function
export const statisticsValue = (key, value, data) => {
  let items = data.filter(element => element[key].indexOf(value) > -1);
  return items.length;
};