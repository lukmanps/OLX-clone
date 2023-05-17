import React, { Fragment, useState, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, firebaseContext } from '../../store/Context';

const Create = () => {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(firebaseContext)
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const db = firebase.firestore();
  const date=new Date();

  function handleSubmit() {
    firebase.storage().ref(`/image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL()
        .then((url)=>{
          db.collection('products').add({
            name,
            category,
            price,
            url,
            userId: user.uid,
            createdAt: date.toDateString()
          }).then(()=>{
            alert('Product Uploaded!');
          })
        })
      })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">

          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="fname"
            name="Name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="fname"
            name="category"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="fname"
            name="Price" />
          <br />

          <br />
          <img alt="Posts" width="100%" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>

          <br />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])} />
          <br />

          <button className='' onClick={()=>{
            setImage(null);
          }}>Remove</button>

          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>

        </div>
      </card>
    </Fragment>
  );
};

export default Create;
