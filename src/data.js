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

/*
// Sort object 
export const sortDataByName = {

  sortData: (data, sortBy, sortOrder) => {       

    if (sortBy === "name" && sortOrder === "A-Z"){
      data.sort((a,b)=>{
        if (a.name < b.name){
          return -1; 
        }
        if (a.name > b.name){
          return 1; 
        }
        return 0; 
      })
      return data;
    }

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