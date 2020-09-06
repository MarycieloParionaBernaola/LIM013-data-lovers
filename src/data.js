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

<<<<<<< HEAD
    if (sortBy === "name" && sortOrder === "Z-A"){
      data.sort((a,b) =>{
        if(a.name > b.name) {
          return -1; 
        }
        if (a.name < b.name){
          return 1; 
        }
        return 0; 
      })
      return data; 
    }
  }
} 
*/

export const computeStats = (data, property, type) => {
  if (data !== undefined && property !== undefined && type !== undefined ){
    const specificArray = data.map( item => item[property])
    const total = specificArray.length;
    //console.log(specificArray)
    //console.log (total);
    let typeArray = [];
    specificArray.forEach(item => {
      if (item == type) {
          typeArray.push(item);
        }
      });
    //console.log(typeArray);
    const y = typeArray.length;
    const percentage = Math.round((y/total)*100);
    //console.log(percentage);
    return percentage;
  } else {
    throw Error('All parameters must be filled');
  }

  };


/*
  const expr = type;

  switch(expr) {
    case 'Female':
      let femaleArray = []
      specificArray.forEach(item => (item == 'Female') ? femaleArray.push(item):0);
      console.log(femaleArray);
      const z = femaleArray.length;
      const per =  Math.round((z/total)*100);
      console.log(per);
      console.log(z);
     
      break;
    case 'Male':
      let maleArray = []
      propertyValue.forEach(item => (item == 'Male') ? maleArray.push(item):0);
      console.log(maleArray);
      const w = maleArray.length;
      console.log(w);
      console.log(typeof w);
      const percentage =  Math.round((w/total)*100);
      console.log(percentage)
      break;
  }
*/

=======
// Statistics Value function
export const statisticsValue = (key, value, data) => {
  let items = data.filter(element => element[key].indexOf(value) > -1);
  return items.length;
};
>>>>>>> upstream/master
