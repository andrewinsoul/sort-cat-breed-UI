/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const CatList = ({
  limit,
  catBreed,
}) => {
  const [catArray, setCatArray] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const BASE_URL = 'https://catapi666.herokuapp.com/api/v1/get';
    try {
      let data;
      if (catBreed === 'children friendly') {
        const res = await Axios.get(
          `${BASE_URL}/child_friendly/breed?no_of_breeds=${limit || 'all'}`
        );
        data = res.data.data;
      } else if (catBreed === 'stranger friendly') {
        const res = await Axios.get(
          `${BASE_URL}/stranger_friendly/breed?no_of_breeds=${limit || 'all'}`
        );
        data = res.data.data;
      } else if (catBreed === 'dog friendly') {
        const res = await Axios.get(
          `${BASE_URL}/dog_friendly/breed?no_of_breeds=${limit || 'all'}`
        );
        data = res.data.data;
      } else {
        const res = await Axios.get(
          `https://api.thecatapi.com/v1/breeds?limit=${limit || 'all'}`
        );
        data = res.data;
      }
      setCatArray(data);
    } catch (error) {
      alert('A server error occured, please try again later');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [limit, catBreed]);

  return (
    <>
      {
        loading ? <div className="loader" /> : (
          <div className="cat-list-container">
            {
              catArray && catArray.map((item) => (
                <div className="cat-detail" key={item.id}>
                  <img
                    src={item.image ? item.image.url : '/placeholder.png'}
                    className="cat-image"
                    alt="cat breed"
                  />
                  <p className="card-text">
                    Name:
                    {' '}
                    {item.name}
                  </p>
                  <p className="card-text">
                    Origin:
                    {' '}
                    {item.origin}
                  </p>
                </div>
              ))
            }
          </div>
        )
      }

    </>
  );
};

export default CatList;
