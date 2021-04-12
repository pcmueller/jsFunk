const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    let orangeKitties = kitties.filter(kitty => kitty.color === 'orange');

    const result = orangeKitties.map(orangeKitty => orangeKitty.name);
    return result;

    // Annotation:
    // take in array of kitties, find orange kitties, store names in an array
  },

  sortByAge() {
    // Sort the kitties by their age

    let sortedKitties = kitties.sort((a, b) => {
      return b.age - a.age;
    });

    const result = sortedKitties;
    return result;

    // Annotation:
    // use sort() to access objects by kitty.age and sort b-a
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years

    // let grownAssKitties = kitties.map(kitty => kitty.age += 2);
    kitties.forEach(kitty => kitty.age += 2);
    let grownAssKitties = kitties.sort((a, b) => {
      return b.age - a.age;
    });

    const result = grownAssKitties;

    return result;

    // Annotation:
    // use map() to access each kitty.age and increment by 2
    // use sort() to order kitties by age from b - a
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    let retrieveMemberObjects = clubs => {
      let members = {};
      clubs.forEach(club => {
        club.members.forEach(member => {
          if (!members[member]) {
            members[member] = [];
            members[member].push(club.club);
          } else {
            members[member].push(club.club);
          }
        });
      });
      return members;
    };

    const result = retrieveMemberObjects(clubs);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    let retrieveModObjects = mods => {
      let objects = [];
      mods.forEach(modName => {
        let ratio = modName.students / modName.instructors;
        objects.push({
          mod: modName.mod,
          studentsPerInstructor: ratio,
        });
      });

      return objects;
    };

    const result = retrieveModObjects(mods);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  // stockPerCake() {
  //   let cakeStock = [];
  //   const findCakeCount = cakes.reduce((finalOutput, currentCake) => {
  //     const cakeName = currentCake.cakeFlavor;
  //     const cakeInStock = currentCake.inStock;
  //     finalOutput = {
  //       flavor: cakeName,
  //       inStock: cakeInStock,
  //     };
  //     cakeStock.push(finalOutput);
  //     return cakeStock;
  //   }, cakeStock);
    
  stockPerCake() {
    let cakeStock = [];
    cakes.forEach(cake => {
      let cakeObj = {
        flavor: cake.cakeFlavor,
        inStock: cake.inStock,
      };
      cakeStock.push(cakeObj);
    });

    // Return an array of objects .that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    // const result = findCakeCount;
    const result = cakeStock;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    let stockedCakes = cakes.filter(cake => cake.inStock);

    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = stockedCakes;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    let cakeStock = cakes.reduce((stock, cake) => {
      return stock + cake.inStock;
    }, 0);

    const result = cakeStock;
    return result;

    // Annotation:
    // iterate through cakes and using reduce() accumulate cake.inStock
    // return value
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    
    let retrieveUniqueToppings = cakes => {
      let allToppings = [];
      let uniqueToppings = [];

      cakes.forEach(cake => {
        cake.toppings.forEach(topping => {
          allToppings.push(topping);
        });
      });
      allToppings.forEach(topping => {
        if (!uniqueToppings.includes(topping)) {
          uniqueToppings.push(topping);
        }
      });
      return uniqueToppings;
    };

    const result = retrieveUniqueToppings(cakes);
    return result;

    // Annotation:
    // iterate through cakes array and map cakes.toppings array elements into new array
    // iterate through toppings array and push into new "noDuplicates" array 
    // any elements that aren't already included
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }


    let retrieveGroceryList = cakes => {
      let allToppings = [];
      let uniqueToppings = {};

      cakes.forEach(cake => {
        cake.toppings.forEach(topping => {
          allToppings.push(topping);
        });
      });
      allToppings.forEach(topping => {
        if (!uniqueToppings[topping]) {
          uniqueToppings[topping] = 1;
        } else {
          uniqueToppings[topping]++;
        }
      });
      return uniqueToppings;
    };

    const result = retrieveGroceryList(cakes);
    return result;

    // Annotation:
    // use retrieve all toppings and store in array with 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    let retrieveFEClassrooms = classrooms => {
      let feClassrooms = [];
      classrooms.forEach(classroom => {
        if (classroom.program === 'FE') {
          feClassrooms.push(classroom);
        }
      });
      return feClassrooms;
    };

    const result = retrieveFEClassrooms(classrooms);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    let accumulateCapacities = classrooms => {
      let capacities = {
        feCapacity: 0,
        beCapacity: 0,
      };
      classrooms.forEach(room => {
        if (room.program === 'FE') {
          capacities.feCapacity += room.capacity;
        } else if (room.program === 'BE') {
          capacities.beCapacity += room.capacity;
        }
      });
      return capacities;
    };

    const result = accumulateCapacities(classrooms);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)
    let sortedClassrooms = classrooms => {
      let sortedRooms = classrooms.sort((a, b) => {
        return a.capacity - b.capacity;
      });
      return sortedRooms;
    };

    const result = sortedClassrooms(classrooms);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

    let returnNonViolentBooks = books => {
      let nonViolentBooks = [];
      books.forEach(book => {
        if (book.genre !== 'Horror' && book.genre !== 'True Crime') {
          nonViolentBooks.push(book.title);
        }
      });
      return nonViolentBooks;
    };

    const result = returnNonViolentBooks(books);
    return result;

    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Include the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    let getNewerBooks = books => {
      let newBooks = [];
      books.forEach(book => {
        if (book.published >= 1990 && book.published <= 2009) {
          newBooks.push(
            {
              title: book.title,
              year: book.published,
            }
          );
        }
      });
      return newBooks;
    };

    const result = getNewerBooks(books);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    let getAvgTemps = weather => {
      let temps = [];
      weather.forEach(entry => {
        temps.push((entry.temperature.high + entry.temperature.low)/2);
      });
      return temps;
    };

    const result = getAvgTemps(weather);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    let getSunnyCities = cities => {
      let sunnyCities = [];
      cities.forEach(city => {
        if (city.type === 'sunny' || city.type === 'mostly sunny') {
          sunnyCities.push(`${city.location} is ${city.type}.`);
        }
      });
      return sunnyCities;
    };

    const result = getSunnyCities(weather);
    return result;

    // Annotation:
    // iterate through weather array and access each entry
    // add conditional to check if entry's 'type' is 'sunny' or 'mostly sunny'
    // if true, push string into 'sunnyCities' array using interpolated 'location' and 'type'
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }
    
    let getHighestHumidity = weather => {
      let humidities = weather.map(city => city.humidity);
      let highestHumidity = Math.max(...humidities);
      let highestHumidityCity = weather.find(city => 
        city.humidity === highestHumidity);
      return highestHumidityCity;
    };

    const result = getHighestHumidity(weather);
    return result;

    // Annotation:
    // iterate through weather array and use Math.max to identify element
    // with highest entry.humidity value and return

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    let getVisitList = parks => {
      let visitList = {
        parksVisited: [],
        parksToVisit: [],
      };
      parks.forEach(park => {
        if (park.visited) {
          visitList.parksVisited.push(park.name);
        } else {
          visitList.parksToVisit.push(park.name);
        }
      });
      return visitList;
    };

    const result = getVisitList(nationalParks);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    let getKeyValuePairs = parks => {
      let keyValuePairs = [];

      parks.forEach(park => {
        let pair = {
          [park.location]: park.name,
        };
        keyValuePairs.push(pair);
      });

      return keyValuePairs;
    };


    const result = getKeyValuePairs(nationalParks);
    return result;

    // Annotation:
    // create empty keyValuePairs array
    // iterate through parks array and for each item, push into keyValuePairs
    // array and object with interpolated location and name keys and values
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    let getActivities = parks => {
      let allActivities = [];
      parks.forEach(park => {
        park.activities.map(activity => {
          allActivities.push(activity);
        });
      });
      let uniqueActivities = [];
      allActivities.forEach(activity => {
        if (!uniqueActivities.includes(activity)) {
          uniqueActivities.push(activity);
        }
      });
      return uniqueActivities;
    };

    const result = getActivities(nationalParks);
    return result;

    // Annotation:
    // declare uniqueActivities variable with empty string as value
    // iterate through nat'lParks array and for each to allActivities variable
    // inside of that function, iterate through activities array 
    // and return each element
    // iterate through allActivities array and execute conditional: 
    // if uniqueActivities array doesn't already include that allActivities
    // element, push it into uniqueActivities
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    let getTotalBeers = breweries => {
      let totalBeers = breweries.reduce((total, brewery) => {    
        return total + brewery.beers.length;
      }, 0);
      return totalBeers;
    };

    const result = getTotalBeers(breweries);
    return result;

    // Annotation:
    // iterate through each brewery and accumulate this.beers.length
    // return accumulator
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    let getBeerCounts = breweries => {
      let beerCounts = [];
      breweries.forEach(brewery => {    
        beerCounts.push({name: brewery.name, beerCount: brewery.beers.length});
      });
      return beerCounts;
    };

    const result = getBeerCounts(breweries);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    let getHighestAbvBeer = breweries => {
      let allBeers = [];
      breweries.forEach(brewery => {
        brewery.beers.forEach(beer => {
          allBeers.push(beer);
        });
      });
      let sortedBeers = allBeers.sort((a, b) => {
        return b.abv - a.abv;
      });

      let [ highestAbvBeer ] = sortedBeers;
      return highestAbvBeer;
    };

    const result = getHighestAbvBeer(breweries);
    return result;

    // Annotation:
    // use sort() to order beers from b.abv - a.abv and store in new array
    // use destructuring to access first item in array and return
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    let getInstructorStudentCounts = (instructors, cohorts) => {
      let instructorObjects = [];
      instructors.forEach(instructor => {
        cohorts.forEach(cohort => {
          if (cohort.module === instructor.module) {
            let object = { name: instructor.name, studentCount: cohort.studentCount };
            instructorObjects.push(object);
          }
        });
      });
      return instructorObjects;
    };

    const result = getInstructorStudentCounts(instructors, cohorts);
    return result;

    // Annotation:
    // iterate through instructors array, access each element's 'name', then within
    // that loop, iterate through cohorts array and use conditional to identify
    // element with this.module w/ value that equals instructor.module (1 level up)
    // when conditional is true, use value of this.studentCount to interpolate in value of
    // studentCount property in new object literal, to be pushed into new instructorObjects array
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    let getStudentRatios = (instructors, cohorts) => {
      let studentRatios = {};
      cohorts.forEach(cohort => {
        let teachers = 0;
        instructors.forEach(instructor => {
          if (instructor.module === cohort.module) {
            teachers++;
          }
        });
        let ratio = cohort.studentCount / teachers;
        studentRatios[`cohort${cohort.cohort}`] = ratio;
      });
      return studentRatios;
    };

    const result = getStudentRatios(instructors, cohorts);
    return result;

    // Annotation:
    // declare 'studentRatios' variable with empty object as value
    // iterate through cohorts array and for each cohort, 
    // declare empty 'ratio' variable and 'teachers' variable assigned value of 0
    // within iteration, iterate through instructors array and use conditional to 
    // identify elements with this.module w/ value that equals cohorts.module (1 level up)
    // assign value of ratio as this.studentCount / teachers
    // assign studentRatios.[cohort' + '${this.cohort}] a value of ratio
    // return studentRatios object
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    let getInstructorMods = (instructors, cohorts) => {
      let instructorMods = {};
      instructors.forEach(instructor => {
        instructorMods[instructor.name] = [];
        instructor.teaches.forEach(skill => {
          cohorts.forEach(cohort => {
            if (cohort.curriculum.includes(skill) && !instructorMods[instructor.name].includes(cohort.module)) {
              instructorMods[instructor.name].push(cohort.module);
              instructorMods[instructor.name] = instructorMods[instructor.name].sort((a,b) => {
                return a-b;
              });
            }
          });
        });
      });
      return instructorMods;
    };


    const result = getInstructorMods(instructors, cohorts);
    return result;

    // Annotation:
    // declare instructorMods variable with empty object as value
    // iterate through instructors array and for each instructor, add instructorMods
    // key-value pair with [instructor.name] as the key, empty array as value
    // inside of that iteration, iterate through instructor.teaches array and...
    // for each 'skill' in that array, iterate through cohorts array and if 
    // cohort.curriculum.includes(skill), instructorMods[instructor.name].push(cohort.module)
    // return instructorMods object
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    let getCurriculumTeachers = (instructors, cohorts) => {
      let skills = {};
      cohorts.forEach(cohort => {
        cohort.curriculum.forEach(skill => {
          if (!skills[skill]) {
            skills[skill] = [];
          }
        });
      });
      instructors.forEach(instructor => {
        instructor.teaches.forEach(skill => {
          if (!skills[skill].includes(instructor.name)) {
            skills[skill].push(instructor.name);
          }
        });
      });
      return skills;
    };

    const result = getCurriculumTeachers(instructors, cohorts);
    return result;

    // Annotation:
    // declare new skills variable with an assigned value of an empty object
    // iterated through cohorts array and for each cohort, iterate through curriculum array
    // for each curriculum element, if !skills[elem], skills[elem] = [];
    // next, iterate through instructors array, and for each instructor iterate through
    // their teaches array and execute a conditional:
    // if !skills[elem].includes(instructor.name), skills[elem].push(instructor.name)
    // may have to sort skills arrays to get elements in certain order
    // return skills
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    let getLoyaltyStats = (bosses, sidekicks) => {
      let loyaltyStats = [];
      let bossKeys= Object.keys(bosses);
      let bossNames = [];
      bossKeys.forEach(key => {
        bossNames.push(bosses[key].name);
      });

      bossNames.forEach(name => {
        loyaltyStats.push({ bossName: name, sidekickLoyalty: 0 });
      });

      sidekicks.forEach(sidekick => {
        loyaltyStats.forEach(boss => {
          if (boss.bossName === sidekick.boss) {
            boss.sidekickLoyalty += sidekick.loyaltyToBoss;
          }
        });
      });
      return loyaltyStats;
    };

    const result = getLoyaltyStats(bosses,sidekicks);
    return result;

    // Annotation:
    // declare a loyaltyStats variable with an empty array as value
    // declare a bossNames array with a value of Object.keys(bosses)
    // iterate throug bossNames array and for each name, loyaltyStats.push
    // an object literal with: bossName: boss, sidekickLoyalty: 0
    // next, iterate through sidekicks array and for each sidekick, 
    // iterate through loyaltyStats array and use conditional to check 
    // if stat.bossName === sidekick.boss
    // when true, access stat.sidekickLoyalty and increment 
    // by sidekick.loyaltyToBoss
    // return loyaltyStats array
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]


    let retrieveStars = stars => {
      let allStars = [];
      let constNames = Object.keys(constellations);
      constNames.forEach(name => {
        constellations[name].stars.forEach(star => {
          allStars.push(star);
        });
      });
      let matchingStars = [];
      stars.forEach(star => {
        if (allStars.includes(star.name)) {
          matchingStars.push(star);
        }
      });
      return matchingStars;
    };

    const result = retrieveStars(stars);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    let returnStarsByColor = stars => {
      let allColors = [];
      let starsByColor = {};
      stars.forEach(star => {
        allColors.push(star.color);
      });
      allColors.forEach(color => {
        if (!starsByColor[color]) {
          starsByColor[color] = [];
        }
      });
      stars.forEach(star => {
        starsByColor[star.color].push(star);
      });

      return starsByColor;
    };

    const result = returnStarsByColor(stars);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]

    let retrieveConstellations = stars => {
      let orderedStars = stars.sort((a, b) => {
        return a.visualMagnitude - b.visualMagnitude;
      });
      let constNames = [];
      orderedStars.forEach(star => {
        if (star.constellation !== '') {
          constNames.push(star.constellation);
        }
      });
      return constNames;
    };

    const result = retrieveConstellations(stars);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    let getWeaponDamage = (characters, weapons) => {
      let weaponDamage = 0;
      let weaponKeys = Object.keys(weapons);
      characters.forEach(character => {
        character.weapons.forEach(weapon => {
          weaponKeys.forEach(key => {
            if (key === weapon) {
              weaponDamage += weapons[key].damage;
            }
          });
        });
      });

      return weaponDamage;
    };

    const result = getWeaponDamage(characters, weapons);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    let getCharacterStats = (characters, weapons) => {
      let characterStats = [];
      let weaponKeys = Object.keys(weapons);
      characters.forEach(character => {
        let weaponDamage = 0;
        let weaponRange = 0;
        character.weapons.forEach(weapon => {
          weaponKeys.forEach(key => {
            if (key === weapon) {
              weaponDamage += weapons[key].damage;
              weaponRange += weapons[key].range;
            }
          });
        });
        characterStats.push({ [character.name]: { damage: weaponDamage, range: weaponRange }});
      });
      return characterStats;
    };

    const result = getCharacterStats(characters, weapons);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
