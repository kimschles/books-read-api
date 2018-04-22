exports.seed = function(knex, Promise) {
  return knex('book')
    .del()
    .then(function() {
      return knex('book').insert([
        {
          title: 'You Are Not a Gadget: A Manifesto',
          author: 'Jaron Lanier',
          cover_image: 'https://cybject.files.wordpress.com/2013/03/jaron.jpg'
        },
        {
          title: 'Radical Candor ',
          author: 'Kim Scott',
          cover_image: 'https://images-na.ssl-images-amazon.com/images/I/411O8D1w2UL.jpg'
        },
        {
          title: 'Station Eleven',
          author: 'Emily St. John Mandel',
          cover_image:
            'https://images-na.ssl-images-amazon.com/images/I/51-qQ2TbIPL._SX323_BO1,204,203,200_.jpg'
        },
        {
          title: 'Just the Funny Parts',
          author: 'Nell Scovell',
          cover_image: 'https://i.harperapps.com/covers/9780062473509/y450-293.jpg'
        },
        {
          title: 'Wave: A Memoir of Life After the Tsunami',
          author: 'Sonali Deraniyagala',
          cover_image: 'https://images-na.ssl-images-amazon.com/images/I/31sWoadXnhL.jpg'
        }
      ]);
    });
};
