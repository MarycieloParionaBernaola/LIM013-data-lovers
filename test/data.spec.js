import { filterData } from '../src/data.js';
import { sortDataByName } from '../src/data.js'; 
import { statisticsValue } from '../src/data.js';
import { statisticsPercentage } from '../src/data.js';

const dataTest = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "species": "Human",
    "gender": "Male",
  },
  
  {
    "id": 2,
    "name": "Abadango Cluster Princess",
    "species": "Alien",
    "gender": "Female",
  },
  
  {
    "id": 3,
    "name": "Aqua Morty",
    "species": "Humanoid",
    "gender": "Male",
  },

  {
    "id": 4,
    "name": "Armothy",
    "species": "Unknown",
    "gender": "Male",
  },
  {
    "id": 5,
    "name": "Rick Sanchez",
    "species": "Human",
    "gender": "Male",
  }
];

const dataResultFilterOne = [
  {
    "id": 2,
    "name": "Abadango Cluster Princess",
    "species": "Alien",
    "gender": "Female",
  }
];

const dataResultFilterTwo = [
  {
    "id": 4,
    "name": "Armothy",
    "species": "Unknown",
    "gender": "Male",
  }
];

const dataResultSortA = [
  {
    "id": 2,
    "name": "Abadango Cluster Princess",
    "species": "Alien",
    "gender": "Female",
  },
  {
    "id": 3,
    "name": "Aqua Morty",
    "species": "Humanoid",
    "gender": "Male",
  },
  {
    "id": 4,
    "name": "Armothy",
    "species": "Unknown",
    "gender": "Male",
  },
  {
    "id": 1,
    "name": "Rick Sanchez",
    "species": "Human",
    "gender": "Male",
  },
  {
    "id": 5,
    "name": "Rick Sanchez",
    "species": "Human",
    "gender": "Male",
  }
];

const dataResultSortD = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "species": "Human",
    "gender": "Male",
  },
  {
    "id": 5,
    "name": "Rick Sanchez",
    "species": "Human",
    "gender": "Male",
  },
  {
    "id": 4,
    "name": "Armothy",
    "species": "Unknown",
    "gender": "Male",
  },
  {
    "id": 3,
    "name": "Aqua Morty",
    "species": "Humanoid",
    "gender": "Male",
  },
  {
    "id": 2,
    "name": "Abadango Cluster Princess",
    "species": "Alien",
    "gender": "Female",
  },
];

// Filter object test
describe('filterData', () => {

  it('should be an object', () => {
    expect(typeof filterData).toBe('object');
  });

  describe('filterData.byProperty', () => {

    it('should be a function', () => {
      expect(typeof filterData.byProperty).toBe('function');
    });
  
    it('should return an array for "dataTest", "species", "Alien"', () => {
    expect(filterData.byProperty(dataTest, 'species', 'Alien')).toEqual(dataResultFilterOne);
    });

    it('should return an array for "dataTest", "species", "Unknown"', () => {
      expect(filterData.byProperty(dataTest, 'species', 'Unknown')).toEqual(dataResultFilterTwo);
      });

    it('should throw an error if called without arguments', () => {
      expect(filterData.byProperty).toThrow('All parameters must be filled');
    });

  });

  describe('filterData.searchByName', () => {

    it('should be a function', () => {
      expect(typeof filterData.searchByName).toBe('function');
    });

    it ('should return an array for "dataTest", "name", "Abadango"', () => {
      expect(filterData.searchByName(dataTest, 'name', "Abadango")).toEqual(dataResultFilterOne);
    });

    it ('should return an array for "dataTest", "name", "Armothy"', () => {
      expect(filterData.searchByName(dataTest, 'name', 'Armothy')).toEqual(dataResultFilterTwo);
    });

    it('should throw an error if called without an argument', () => {
      expect(() => filterData.searchByName(dataTest, 'name')).toThrow(Error);
    });

  });

});

// Sort function test
describe('sortDataByName', () => {
  it('should be a function', () => {
    expect(typeof sortDataByName).toBe('function');
  })
 
  it('should return the character names in descending order', () => {
    expect(sortDataByName(dataTest, 'A-Z')).toEqual(dataResultSortA);
  })
 
  it('should return the character names in ascending order', () => {
    expect(sortDataByName(dataTest, 'Z-A')).toEqual(dataResultSortD);
  })
}); 

// Satistics Value Test
describe('statisticsValue', () => {
  it('should be a function', () => {
      expect(typeof statisticsValue).toBe('function');
  });

  it('should return when asking value of total Ricks', () => {
      expect(statisticsValue('name', 'Rick', dataTest)).toBe(2);
  });

  it('should return when asking value of total Mortys', () => {
      expect(statisticsValue('name', 'Morty', dataTest)).toBe(1);
  });
});

// Satistics Percentage Test
describe('statisticsPercentage', () => {
  it('should be a function', () => {
    expect(typeof statisticsPercentage).toBe('function');
  });

  it ('should return a value for the follow parameters "dataTest", "gender", "Female"', () => {
    expect(statisticsPercentage(dataTest,'gender','Female')).toBe(20);
  });

  it ('should return a value for the follow parameters "dataTest", "gender", "Male"', () => {
    expect(statisticsPercentage(dataTest, 'gender', 'Male')).toBe(80);
  });
  
  it ('should not return a value for follow parameters "dataTest", "gender"', () => {
    expect(() => statisticsPercentage(dataTest, 'gender')).toThrow(Error);
  });

})



