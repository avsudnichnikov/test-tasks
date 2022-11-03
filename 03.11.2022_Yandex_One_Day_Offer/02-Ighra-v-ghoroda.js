const cities = [
    'Ладога',
    'Курск',
    'Домодедово',
    'Красноярск',
    'Арзамас',
    'Казань',
    'Нижний Новгород',
    'Геленджик',
    'Орёл',
    'Санкт-Петербург',
];

const sortCities = function(cities) {
  if (!cities) {
    return [];
  }
  
  const lastSymbol = (city) =>
    ((city[city.length - 1] === 'ь' || city[city.length - 1] === 'ъ') ?
    city[city.length - 2] : city[city.length - 1]).toUpperCase();
  
  let result = [cities[0]];
  const input = cities.slice(1);
  
  while (input.length) { 
    
    const prev = input.findIndex(
      (city) => {
        return result[0][0].toUpperCase() === lastSymbol(city);
      }
    );
      
    if(prev > 0) {
      result.unshift(input.splice(prev, 1)[0]);
      continue;
    }
    
    const next = input.findIndex(
      (city) => {
        return city[0].toUpperCase() === lastSymbol(result[result.length - 1]);
      }
    );

    if (next >= 0) {
      result.push(input.splice(next, 1)[0]);
      continue;
    }

    const last = lastSymbol(input[0]);
    if (input[0][0] === last) {
      const index = result.findIndex((city) => city[0] === last);
      result.splice(index, 0, input.shift());
      continue;
    }

    break;
  }
  
  return result;
}

console.log(sortCities(cities));
