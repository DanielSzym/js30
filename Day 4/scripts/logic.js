// Some data we can work with
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
  
  //NOTE: console log ist überall auskommentiert!

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
    //solution 1 (own)
  inventors.forEach(function(inventors){
    if (inventors.year >= 1500 && inventors.year < 1600) ;//console.log(inventors);
  });
    //solution 2 (WesBos)
  const fifteens = inventors.filter(function(inventor) {
    if (inventor.year >= 1500 && inventor.year < 1600) return true;
  });
  //console.table(fifteens);
    //solution 3 (arrow fctn)
  const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
  //console.table(fifteens);

  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names
  const firstName = [];
  inventors.map(inventor => firstName.push(inventor.first + ' ' + inventor.last));
  //console.log(firstName);
    //solution 2 (WesBos) using template strings
  const firstName2 = inventors.map(a => `${a.first} ${a.last}`);
  //console.log(firstName2);

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  const inventorsSortYear = inventors;
  inventorsSortYear.sort(
    (a, b) => {if (a.year<b.year) return -1;
                else if (a.year>b.year) return 1;
                else return 0;
  });
  //console.table(inventorsSortYear);
    //solution 2 (WesBos) NOTE: I figured it does not totalle work since we do not cover the = exception
  const inventorsSortYear2 = inventors;
  inventorsSortYear2.sort((a,b) => a.year > b.year ? 1 : -1);
  //console.table(inventorsSortYear2);

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?
  //reducer is our function, 0 ist our base where we start
  const reducer = (total, current) => (total + (current.passed - current.year));
  const years = inventors.reduce(reducer, 0);
  //console.log(years);

  // 5. Sort the inventors by years lived
  const oldest = inventors.sort((a,b) => (a.passed - a.lived) > (b.passed - b.lived) ? 1 : -1);
  //console.table(oldest);

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  //TODO: HAVE A LOOK INTO ABOVE CODE AGAIN! 11:30 mins vid

  // 7. sort Exercise
  // Sort the people alphabetically by last name
  people.sort((last,next) => {
    last > next ? -1 : 1;
  });
  //console.log(people);
  //solution 2 (WesBos) but with else if statement
  people.sort((lastOne, nextOne) => {
    const [aLast, aNext] = lastOne.split(', ');
    const [bLast, bNext] = nextOne.split(', ');
    if (aLast > bLast ) return 1;
    else if (aLast < bLast ) return -1;
    else return 0;
    //aLast > bLast ? 1 : -1;
  });
  //console.table(people);

  // 8. Reduce Exercise
  // Sum up the instances of each of these


  //const reducer = (total, current) => (total + (current.passed - current.year));
  //const years = inventors.reduce(reducer, 0);
  //console.log(years);

  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  var reducedDataArr = [
    { type: 'car', count: 0},
    { type: 'truck', count:0},
    { type: 'bike', count:0},
    { type: 'walk', count:0},
    { type: 'van', count:0}
  ];
  
  const reducedData = data.reduce(function(a, b) {
    reducedDataArr.forEach(function (elem) {
      if (elem.type == b) elem.count++;
    });
  }, 0);
  //console.table(reducedDataArr);

  //solution 2 (WesBos)
  const transportation = data.reduce(function (obj, item) {
    for (key in obj) {
      if (key==item) obj[key]++;
    }
    
    return obj;
  }, {
    car: 0,
    walk: 0,
    truck: 0,
    van: 0,
    bike: 0
  });
  console.log(transportation);
