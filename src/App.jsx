import React from 'react';
import data from '../data';
import BlogCard from './components/BlogCard/BlogCard';

function App() {
  return (
    <>
        <BlogCard data={data} />
    </>
  );
}

export default App;
