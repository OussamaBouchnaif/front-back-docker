import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
}

const FetchTest = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch URL from environment variable
  const Url = process.env.NEXT_PUBLIC_BACK_URL;  // Ensure this variable is defined

  useEffect(() => {
    if (!Url) {
      console.error('NEXT_PUBLIC_BACK_URL is not defined');
      setError('API URL is not defined');
      return;
    }

    fetch(`${Url}/games`)
      .then(response => response.json())
      .then(data => {
        console.log('data',data.products);
        // Assuming the API returns an array of products
        setProducts(data.products);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Failed to fetch products');
      });
  }, [Url]);

  return (
    <div>
     
    </div>
  );
};

export default FetchTest;
