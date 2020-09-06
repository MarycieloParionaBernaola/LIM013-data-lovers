<<<<<<< HEAD
// Import function `filterData`

import { filterData } from '../src/data.js';
import { computeStats } from '../src/data.js';
=======
import {filterData} from '../src/data.js';
>>>>>>> upstream/master

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

<<<<<<< HEAD
describe('computeStats', () => {
  it('should be a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it ('should return a value for the follow parameters "dataTest", "gender", "Female"', () => {
    expect(computeStats(dataTest,'gender','Female')).toBe(25);
  });

  it ('should return a value for the follow parameters "dataTest", "gender", "Male"', () => {
    expect(computeStats(dataTest, 'gender', 'Male')).toBe(75);
  });
  
  it ('should not return a value for follow parameters "dataTest", "gender"', () => {
    expect(() => computeStats(dataTest, 'gender')).toThrow(Error);
  });

})
=======



import { sortDataByName } from '../src/data.js'; 
import { statisticsPercentage } from '../src/data.js';
import { statisticsValue } from '../src/data.js';

const data = {
  "info": {
    "count": 493,
    "pages": 25,
    "next": "https://rickandmortyapi.com/api/character/?page=2",
    "prev": ""
},
"results": [
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            "https://rickandmortyapi.com/api/episode/3",
            "https://rickandmortyapi.com/api/episode/4",
            "https://rickandmortyapi.com/api/episode/5",
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/7",
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/12",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/17",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/20",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/23",
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/28",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31"
        ],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
    },
    {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/2.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            "https://rickandmortyapi.com/api/episode/3",
            "https://rickandmortyapi.com/api/episode/4",
            "https://rickandmortyapi.com/api/episode/5",
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/7",
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/12",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/17",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/20",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/23",
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/28",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31"
        ],
        "url": "https://rickandmortyapi.com/api/character/2",
        "created": "2017-11-04T18:50:21.651Z"
    },
    {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/3.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/7",
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/12",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/17",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/20",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/23",
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31"
        ],
        "url": "https://rickandmortyapi.com/api/character/3",
        "created": "2017-11-04T19:09:56.428Z"
    },
    {
        "id": 4,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/4.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/7",
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/12",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/20",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/23",
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/28",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31"
        ],
        "url": "https://rickandmortyapi.com/api/character/4",
        "created": "2017-11-04T19:22:43.665Z"
    },
    {
        "id": 5,
        "name": "Jerry Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/5.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/7",
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/12",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/20",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/23",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31"
        ],
        "url": "https://rickandmortyapi.com/api/character/5",
        "created": "2017-11-04T19:26:56.301Z"
    },
    {
      "id": 401,
      "name": "Morty Jr's interviewer",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
      },
      "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/401.jpeg",
      "episode": [
          "https://rickandmortyapi.com/api/episode/7"
      ],
      "url": "https://rickandmortyapi.com/api/character/401",
      "created": "2018-04-15T17:43:56.832Z"
    },
    {
      "id": 293,
      "name": "Rick Sanchez",
      "status": "Dead",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
      },
      "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/293.jpeg",
      "episode": [
          "https://rickandmortyapi.com/api/episode/6"
      ],
      "url": "https://rickandmortyapi.com/api/character/293",
      "created": "2017-12-31T20:22:29.032Z"
  }]
};

const dataRickAndMorty = data.results;

// Sort Test
describe('sortDataByName', () => {
  it('should be a function', () => {
    expect(typeof sortDataByName).toBe('function');
  })
 
  it('should return the character names in descending order', () => {
    let orderAz = sortDataByName(dataRickAndMorty, 'A-Z');
    expect([orderAz[0].name, orderAz[1].name, orderAz[2].name, orderAz[3].name, orderAz[4].name, orderAz[5].name, orderAz[6].name]).toEqual(["Beth Smith", "Jerry Smith", "Morty Jr's interviewer", "Morty Smith", "Rick Sanchez", "Rick Sanchez", "Summer Smith"]);
  })
 
  it('should return the character names in ascending order', () => {
    let orderZa = sortDataByName(dataRickAndMorty, 'Z-A');
    expect([orderZa[0].name, orderZa[1].name, orderZa[2].name, orderZa[3].name, orderZa[4].name, orderZa[5].name, orderZa[6].name]).toEqual(["Summer Smith", "Rick Sanchez", "Rick Sanchez", "Morty Smith", "Morty Jr's interviewer", "Jerry Smith", "Beth Smith"]);
  })
}); 

// Statistics Percentage Test
describe('statisticsPercentage', () => {
  it('should be a function', () => {
      expect(typeof statisticsPercentage).toBe('function');
  });

  it('should return 29 % when asking percentage of total Ricks', () => {
      expect(statisticsPercentage('name', 'Rick', dataRickAndMorty)).toBe(29);
  });

  it('should return 29 % when asking percentage of total Mortys', () => {
      expect(statisticsPercentage('name', 'Morty', dataRickAndMorty)).toBe(29);
  });
});

// Satistics Value Test
describe('statisticsValue', () => {
  it('should be a function', () => {
      expect(typeof statisticsValue).toBe('function');
  });

  it('should return 2 when asking value of total Ricks', () => {
      expect(statisticsValue('name', 'Rick', dataRickAndMorty)).toBe(2);
  });

  it('should return 2 when asking value of total Mortys', () => {
      expect(statisticsValue('name', 'Morty', dataRickAndMorty)).toBe(2);
  });
});
>>>>>>> upstream/master
