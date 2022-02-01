var orderHistory = [
  {
    placed: 'aug 4, 2020',
    total: 34,
    ship: 'JS Masher',
    number: '114-3941689-8772232',
    delivered: 'aug 8, 2020',
    product: ['JavaScript for impatient programmers'],
    author: ['Rauschmayer, Dr. Axel'],
    window: ['sep 7, 2020']
  },
  {
    placed: 'jul 19, 2020',
    total: 44.53,
    ship: 'JS Masher',
    number: '113-9984268-1280257',
    delivered: 'jul 20 2020',
    product: ['The Timeless Way of Building'],
    author: ['Alexander, Christopher'],
    window: ['aug 19, 2020']
  },
  {
    placed: 'jul 4, 2020',
    total: 17.22,
    ship: 'JS Masher',
    number: '114-2875557-9059409',
    delivered: ['jul 7, 2020'],
    product: ['Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter'],
    author: [null],
    window: ['aug 5, 2020']
  },
  {
    placed: 'jul 3, 2020',
    total: 138.93,
    ship: 'JS Masher',
    number: '114-2875557-9059409',
    delivered: ['jul 5, 2020', 'jul 5, 2020'],
    product: ['GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)', 'The Art of Sql'],
    author: [null, 'Faroult, Stephane'],
    window: ['aug 4, 2020', 'aug 4, 2020']
  }
];

console.log(orderHistory[3].product[1]);
