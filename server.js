const http = require('http');

let persons = [
  {name: 'Alina', sentence:  'Ahoi, I am Alina, I come from Germany'},
  {name: 'Ana', sentence:  'Hello, I am Ana, I come from Bulgaria!'},
  {name: 'Anita', sentence:  'Hello, My name is Anita, I come from England!'},
  {name: 'bhavana', sentence:  'Namaskar, I am Bhavana, I come from India!'},
  {name: 'Carla', sentence:  'Moin. My name is Carla and I am from Germany.'},
  {name: 'flo', sentence: 'Hello I am Flo, Happy Coding' },
  {name: 'Jen', sentence:  'Hello. I am Jen. I am a cat lady'},
  {name: 'Jessica', sentence:  'Hi, I am Jessica I come from Germany!'},
  {name: 'Kash', sentence:  `OMG I got this to work!` },
  {name: 'Katrin', sentence: "Juten Tach! I am Katrin." },
  {name: 'Maxence', sentence:  'Bonjour, I am Maxence, I come from France!'},
  {name: 'Mir', sentence:  'Hello. I am Mir. I am short'},
  {name: 'Nhan', sentence:  'Xin chao, I am Nhan from Vietnam!'},
  {name: 'Nicole', sentence: 'Enchanté, my name is Nicole and I prefer red over white wine.'},
  {name: 'Ojuna', sentence:  'GUDE! that is what you say in Frankfurt! also Ojuna misses her Apfelwein!'},
  {name: 'Samuele', sentence:  `Salve, I am Maxence. More pizza!` },
  {name: 'Thor', sentence:  `Thor is known for web development and more`}
]

const server =
  http.createServer((request, response) => {
    console.log(`Someone has requested ${request.url}`);

    if (request.url === '/')
      response.write('Home');
    else if (request.url.startsWith('/person/')) {
      let name = request.url.substr(8)
      let index = persons.findIndex(person => {
        return person.name.toLowerCase() === name.toLowerCase()
      })
      console.log('DEBUG name', name)
      console.log('DEBUG index', index)
      if (index === -1) 
        response.write("No person with that name")
      else
        response.write(persons[index].sentence)
    }
    else
      response.write('Other');

    response.end();
  });

server.listen(3000);

// Go to http://localhost:3000/
