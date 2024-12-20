// import './App.css';

import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  // Step 1: Create a state to store the dynamically added routes
  const [routes, setRoutes] = useState([]);

  const addNewRoute = () => {
    // Step 2: Prompt the user to input a route name
    const routeName = prompt('Enter a name for the new route:');

    // Step 3: If the user entered a valid name, create a new route
    if (routeName) {
      const newRoute = {
        path: `/${routeName}`, // Path the user entered
        component: <NewRouteComponent name={routeName} />, // Component to show for the new route
      };

      // Step 4: Add the new route to the state
      setRoutes([...routes, newRoute]);
    }
  };

  return (
    <>
      <div>
        <h1>Dynamic Routes Example</h1>

        {/* Step 5: Button to add a new route */}
        <button onClick={addNewRoute}>Add New Route</button>

        {/* Display links to all created routes */}
        <nav>
          {routes.map((route, index) => (
            <div key={index}>
              <Link to={route.path}>Go to {route.path}</Link>
            </div>
          ))}
        </nav>

        {/* Step 6: Define the routes dynamically */}
        <Routes>
          <Route path="/" element={<Home />} />
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  );
}

// Component that will be shown for new routes
function NewRouteComponent({ name }) {
  return (
    <div>
      <h2>This is the {name} route!</h2>
    </div>
  );
}
