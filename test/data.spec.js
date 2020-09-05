// Import function `filterData`

import {filterData} from '../src/data.js';

const dataTest = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
  },
  
  {
    "id": 6,
    "name": "Abadango Cluster Princess",
    "status": "Alive",
    "species": "Alien",
    "type": "",
    "gender": "Female",
  },
  
  {
    "id": 21,
    "name": "Aqua Morty",
    "status": "unknown",
    "species": "Humanoid",
    "type": "Fish-Person",
    "gender": "Male",
  },

  {
    "id": 25,
    "name": "Armothy",
    "status": "Dead",
    "species": "Unknown",
    "type": "Self-aware arm",
    "gender": "Male",
  }
];

const dataResultOne = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
  }
];

const dataResultTwo = [
  {
    "id": 25,
    "name": "Armothy",
    "status": "Dead",
    "species": "Unknown",
    "type": "Self-aware arm",
    "gender": "Male",
  }
]

describe('filterData', () => {

  it('should be an object', () => {
    expect(typeof filterData).toBe('object');
  });

  describe('filterData.byProperty', () => {

    it('should be a function', () => {
      expect(typeof filterData.byProperty).toBe('function');
    });
    
    it('should return an array for "dataTest", "species", "Human"', () => {
    expect(filterData.byProperty(dataTest, 'species', 'Human')).toEqual(dataResultOne);
    });

    it('should return an array for "dataTest", "species", "Unknown"', () => {
      expect(filterData.byProperty(dataTest, 'species', 'Unknown')).toEqual(dataResultTwo);
      });

    it('should throw an error if called without arguments', () => {
      expect(filterData.byProperty).toThrow('All parameters must be filled');
    });

  });

  describe('filterData.searchByName', () => {

    it('should be a function', () => {
      expect(typeof filterData.searchByName).toBe('function');
    });

    it ('should return an array for "dataTest", "name", "rick"', () => {
      expect(filterData.searchByName(dataTest, 'name', 'rick')).toEqual(dataResultOne);
    });

    it ('should return an array for "dataTest", "name", "Armothy"', () => {
      expect(filterData.searchByName(dataTest, 'name', 'Armothy')).toEqual(dataResultTwo);
    });

    it('should throw an error if called without an argument', () => {
      expect(() => filterData.searchByName(dataTest, 'name')).toThrow(Error);
    });

  });

});
