const db = require('./connection');
const { Geek, Artifact, Class } = require('../models');
const { Category } = require('../../../../../week22/homework/shop-shop/server/models');

db.once('open', async () => {
    await Class.deleteMany();

    const classes = await Category.insertMany([
        { name: 'Cards' },
        { name: 'Media' },
        { name: 'Video Games' },
        { name: 'Board Games' },
        { name: 'Comics' },
        { name: 'Figurines' },
    ])

    await Artifact.deleteMany();

    const artifacts = await Artifact.insertMany([
        {
            name: 'Tiamat',
            description:
              'Legendary Creature — Dragon God (MTG)',
            image: '',
            category: classes[0]._id,
            price: 10.99,
            quantity: 500
          },
          {
            name: 'One Piece Anime',
            description:
              'The series focuses on Monkey D. Luffy, a young man made of rubber, who, inspired by his childhood idol, the powerful pirate Red-Haired Shanks, sets off on a journey from the East Blue Sea to find the mythical treasure, the One Piece, and proclaim himself the King of the Pirates.',
            image: '',
            category: classes[1]._id,
            price: 101.99,
            quantity: 500
          },
          {
            name: 'Dead Space',
            category: classes[2]._id,
            description:
              'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
            image: '',
            price: 57.99,
            quantity: 20
          },
          {
            name: 'Monopoly',
            category: classes[3]._id,
            description:
              'Pokemon edition of the classic friendship ruiner',
            image: 'soap.jpg',
            price: 36.99,
            quantity: 50
          },
          {
            name: 'Iron Man',
            category: classes[4]._id,
            description:
              'Newsstand Edition #145 (1981)',
            image: '',
            price: 14.99,
            quantity: 100
          },
          {
            name: 'Darth Vader',
            category: classes[5]._id,
            description:
              'Life size model of Darth Vader',
            image: '',
            price: 3999.99,
            quantity: 30
          }
    ]);
    await Geek.deleteMany();

    await User.create({
      fullname: 'Geek Smith',
      username: 'Geekster',
      email: 'geektest@testmail.com',
      password: 'password12345',
    });
  
    process.exit()
})