import React, { useState } from 'react';
import { FaUserCircle, FaRegHeart, FaHeart, FaRegComment, FaShareSquare } from 'react-icons/fa';
import Alien from './alien.jpeg'

function App() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className="main-container">

        <div>

          <img src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png " style={{ height: '50px' }} alt='img' />

        </div>
        <h1 className='text-info'>
          Post-Like-App
        </h1>

        <h4>Likes : {count}</h4>

        <div className="card" style={{ width: '18rem' }}>

          <div className="card-header">
            <FaUserCircle size={32} /> digs_lio10
          </div>

          <img src={Alien} alt='img' style={{ height: '350px', width: '100%' }} />

          <div className="card-footer">
            {like ? <FaHeart size={34} className='text-danger' onClick={handleLike} style={{ cursor: 'pointer' }} />
              : (<FaRegHeart size={36} onClick={handleLike} style={{ cursor: 'pointer' }} />
              )}
            &nbsp;
            &nbsp;
            &nbsp;
            <FaRegComment size={34} />
            &nbsp;
            &nbsp;
            &nbsp;
            <FaShareSquare size={34} />

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
