//import { example, anotherExample } from '../src/data.js';

/*
describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/

// Importamos la función `filterDataByPrperty`

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

const dataResult = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
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

describe('filterData', () => {
  it('debería ser un objeto', () => {
    expect(typeof filterData).toBe('object');
  });

  describe('filterData.byProperty', () => {
    it('debería ser una función', () => {
      expect(typeof filterData.byProperty).toBe('function');
    });
    
    it('debería retornar un array para "dataTest", "species", "Human"', () => {
    expect(filterData.byProperty(dataTest, 'species', 'Human')).toEqual([dataResult[0]]);
    });

    it('debería arrojar cuando se invoca sin parámetros', () => {
      expect(() => filterData.byProperty()).toThrow(Error);
    });

  });

  describe('filterData.searchByName', () => {
    it('debería ser una función', () => {
      expect(typeof filterData.searchByName).toBe('function');
    });

    it ('debería retornar un array "dataTest", "name", "rick"', () => {
      expect(filterData.searchByName(dataTest, 'name', 'rick')).toEqual([dataResult[0]]);
    });

    it ('debería retornar un array "dataTest", "name", "Armothy"', () => {
      expect(filterData.searchByName(dataTest, 'name', 'Armothy')).toEqual([dataResult[1]]);
    });

    it('debería arrojar cuando se invoca sin parámetros', () => {
      expect(() => filterData.searchByName()).toThrow(Error);
    });

  });

});
