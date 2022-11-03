// 02.11.2020, One Day Offer Yandex, Задача "Сигналы из космоса"

const testCase = [
  {
    time: 0,
    value: 'yandex'
  },
  {
    time: 8,
    value: 'adventure', 
  },
  {
    time: 3,
    value: '010',
  },
  {
    time: 9,
    value: '01111',
  }
]

function decode(data = []) { 
   let tmp = {
    text: [],
    bin: [],
  }
  
  data.forEach((message) => {
    if(/^[01]+$/.test(message.value)){
      for(let i = 0; i < message.value.length; i += 1){
        tmp.bin[message.time + i] = message.value[i];
      }
    } else {
      for(let i = 0; i < message.value.length; i += 1){
        tmp.text[message.time + i] = message.value[i];
      }
    }
  })

  let result = '';
  
  for(let i = 0; i < tmp.bin.length; i += 1) {
    if (tmp.bin[i] === '1') {
      result += tmp.text[i];
    }
  }
  
  return result;
}

console.log(decode(testCase));
