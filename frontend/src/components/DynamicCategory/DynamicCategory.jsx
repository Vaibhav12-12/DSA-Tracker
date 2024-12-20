import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Component for displaying the created category
export function CategoryPage(categoryName) {
  return <p>The category is: {categoryName}</p>;
}

export function DynamicCategory() {
  const [categoryName, setCategoryName] = useState('');
  const navigate = useNavigate();

  const handleCreateCategory = () => {
    const newCategory = prompt('What is the category name?');

    if (newCategory) {
      setCategoryName(newCategory); // Update state with the category name
      navigate(`/category/${newCategory}`); // Navigate to the new route
    }
  };

  return (
    <div>
      {/* Button to create a new category */}
      <button
        onClick={handleCreateCategory}
        className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
      >
        Create New Category
      </button>

      <Routes>
        {/* Dynamic route */}
        <Route
          path="/category/:categoryName"
          element={<CategoryPage categoryName={categoryName} />}
        />
      </Routes>
    </div>
  );
}
