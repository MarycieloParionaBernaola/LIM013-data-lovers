
// Function Sort
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


// Filter function
export const filterDataByProperty = (data, property, type) => {
  const filterArray = data.filter(item => item[property] == type);
  return filterArray;
};
