
export default class BookstoreService {

  data = [
    {id: 1,
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      price: 12,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg'},
    {id: 2,
      title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
      author: 'Eshli Vens',
      price: 11,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL.jpg'}
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(Math.random() > 0.75) {
          reject(new Error('Something is terrible'))
        } else {
          resolve(this.data)
        }
      }, 700);
    });
  }

}