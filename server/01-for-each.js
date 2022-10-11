const letters = ['a', 'b', 'c'];

/* Forma larga de recorrer un array */
for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    console.log('for', element);
}

/* Forma corta de recorrer un array */
letters.forEach(item => console.log('foreach', item));