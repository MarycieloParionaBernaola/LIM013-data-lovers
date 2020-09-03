// Filter function
export const filterData = {

  byProperty: (data, property, type) => {
    const filterArray = data.filter (item => item [property] == type)
    // console.log(filterArray);
    return filterArray
  },

  searchByName : (data, property, type) => {
    const filterSearchArray = data.filter ( item => item [property].toLowerCase().includes(type.toLowerCase()))
    // console.log (type.toLowerCase());
    // console.log (filterSearchArray)
    return filterSearchArray;
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