
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const items= [
  {
    sr:0,
    id:1,
    img : 'https://m.media-amazon.com/images/I/51mDE-WDILL.jpg' ,
    author :'Vedavyasa' ,
    title : 'Rig Veda' ,

  },
  {
    sr:0,
    id:2,
    img : 'https://m.media-amazon.com/images/I/51fkgWsI+qL.jpg' ,
    author :'Vedavyasa' ,
    title : 'Yajurveda' ,
    

  },
  {
    sr:0,
 
    id:3,
    img : 'https://m.media-amazon.com/images/I/51Y1Y911TbL.jpg',

    author :'Vedavyasa' ,
    title : 'Samaveda' ,
   

  },
  {
    sr:4,
    id:4,
    img : 'https://m.media-amazon.com/images/I/51-Nbd8L4OL.jpg' ,
    author :'Vedavyasa' ,
    title : 'Atharva Veda' ,
   
    

  },
  {
    sr:5, 
    id:5,

    img : 'https://m.media-amazon.com/images/I/51ZIEhhd4oS._AC_UF1000,1000_QL80_.jpg',
    author :'Valmiki',
    title :'Srimad Valmiki Ramayana',

  },
  
  {
    sr:6,
    id:6,
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ganesha_write_Mahabharata.jpg/220px-Ganesha_write_Mahabharata.jpg' ,
    author :'Vedavyasa' ,
    title : 'Mahabharat' ,

  },
  
  {
    sr:0,
    id:7,
    img : 'https://m.media-amazon.com/images/I/71W83qHHR5L._AC_UF1000,1000_QL80_.jpg' ,
    author:'Vedavyasa' ,
    title : 'Srimad Bhagavad Gita' ,
    

  },
  
    


  {
    sr:0,
 
    id:8,
    img : 'https://cdn.kobo.com/book-images/2ca5ad41-977b-413e-bb07-42af9af97998/1200/1200/False/ancient-indian-history-1.jpg',
    author :'Sunil Sexana' ,
    title : 'Ancient Indian History' ,
   

  },
  {
    sr:0,
    id:9,
    img: 'https://m.media-amazon.com/images/I/A1izKxljXdL._AC_UF1000,1000_QL80_.jpg',
    author :'Anupam Arunachalam' ,
    title : 'Ashoka-The Mauryan Empire' ,
   

  },

  {
    sr:0,
 
    id:10,
    img : 'https://m.media-amazon.com/images/I/61TXpICRDVL._AC_UF1000,1000_QL80_.jpg',
    author :'Vaishali Shah' ,
    title : 'Hindu Culture and Lifestyle Part-I' ,
   

  },
  {
    sr:0,
 
    id:11,
    img : 'https://images-eu.ssl-images-amazon.com/images/I/51vkgRlEdrL._AC_UL600_SR600,600_.jpg',
    author :'Vaishali shah' ,
    title : 'Hindu Culture and Lifestyle Part-II' ,
   

  },
  {
    sr:12,
    
 
    id:12,
    img : 'https://m.media-amazon.com/images/I/61OFmwRGzjL._AC_UF1000,1000_QL80_.jpg',
    author :'Vaishali shah' ,
    title : 'Hindu Culture and Lifestyle Part-III' ,
   

  },

 



  

]


function ItemList() {
  return (
    <div className='itemlist'>
      {items.map((item) =>
      (
        <Item key={item.id} {...item} />
        
        
        
      ),
      
        
      )}
      
      
    </div>

  );
}



const Item = (props) => {
  const { img, title, author, sr } = props;
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
    


  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    
    }
  };
  

  return (
    <article className='item'>
      <img src={img} alt='' className='imgg' />
      <div className='ok'>
        <h1>Title of the Book: {title}</h1>
        <h1>Author of the Book: {author}</h1>
        <button className='but' onClick={handleAddToCart}>
          Add To Cart
        </button>
        <button className='but' onClick={handleRemoveFromCart}>
          Remove From Cart
        </button>
        <h3>{quantity}</h3>

      </div>
    </article>
  
  );
  
  
}
ReactDOM.render(<ItemList/>,document.getElementById("root"));