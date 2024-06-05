module.exports = {
    type: 'ongodb',
    url: 'ongodb://localhost:27017/',
    database: 'ydatabase',
    entities: ['dist/entities/*.js'],
    synchronize: true,
  };