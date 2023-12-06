import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: true,
    },
    {
      name: 'Max',
      email: 'max@example.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Sony MX502',
      slug: 'headphones-sony-mx502',
      category: 'Headphoes',
      image: '/images/headphones1.jpg',
      price: 60,
      countInStock: 10,
      brand: 'Sony',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality headphones',
    },
    {
      name: 'Harvard CS course',
      slug: 'book-harvard-cs',
      category: 'Books',
      image: '/images/book1.png',
      price: 25,
      countInStock: 0,
      brand: 'Harvard',
      rating: 4.0,
      numReviews: 10,
      description: 'Book for the students studying CS',
    },
  ],
};
export default data;
