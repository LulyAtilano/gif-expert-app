import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Henry Cavill"]);
  
  const onAddCategory = (stg) => {
    if (categories.includes(stg)) return;
    setCategories([stg,...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewValue={onAddCategory} />
        {categories.map(category => (
          <GifGrid key={category} category={category} />
        ))}
    </>
  );
};
