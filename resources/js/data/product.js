const images = require.context('./images', true, /\.jpg$/)
//https://www.99bikes.com.au/checkout/cart/
const products = {
  desc: [
    {
      id: 0,
      description:'A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.',
      title: 'Large Cyclops',
      src: 'velo.png',      
      price: '4458.00',
      color: 'grey',
    //   src: images('./n1.jpg'),
    },
    {
      id: 1,
      description: 'Norco Sight NX VLT 2 Electric Mountain Bike Black/Copper (2019).',
      title: 'Friendly Bot',
      src: 'velo1.png',
      price: '4458.00',
      color: 'yellow',
    //   src: images('./n2.jpg'),
    },
    {
      id: 2,
      description:
        'A large three-eyed head with a shredder for a mouth -- great for crushing light medals or shredding documents.',
      title: 'Shredder',
      src: 'velo2.png',
      price: '4139.00',
      color: 'red',
    //   src: images('./n3.jpg'),
     
    },
    {
      id: 3,
      description:
        'A simple single-eyed head -- simple and inexpensive.',
      title: 'Small Cyclops',
      src: 'velo3.png',
      price: '3218.00',
      color: 'red',
    //   src: images('./n4.jpg'),
    },
    {
      id: 4,
      description:'A robot head with three oscillating eyes -- excellent for surveillance.',
      title: 'Surveillance Bot',
      src: 'velo4.png',
      price: '3458.00',
      color: 'skyblue',
    //   src: images('./n5.png'),
    }
  ]
}
console.log(products.desc)
export default products