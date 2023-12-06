import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'max',
      email: 'max@example.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: false,
    },
    {
      name: 'admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Sony headphones',
      slug: 'sony-headphones-1',
      category: 'Headphones',
      image: '/images/headphones1.jpg', // 679px × 829px
      price: 40,
      countInStock: 10,
      brand: 'Sony',
      rating: 4.5,
      numReviews: 10,
      description: 'High quality headphones',
    },
    {
      // _id: '2',
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
