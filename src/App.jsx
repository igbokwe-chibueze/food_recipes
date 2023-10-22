import { recipes } from "./constants";  // Importing a constant variable 'recipes' from a file.
import { Badges } from "./components";   // Importing a component 'Badges' from another file.
import { about, burger, close, contact, home } from "./assets/icons";  // Importing various icons from a file.
import { useState } from 'react';  // Importing the 'useState' hook from React.

// Define the App component as a functional component.
const App = () => {
  // Define a state variable 'toggle' and a function 'setToggle' to update it, initialized with 'false'..
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="grid md:grid-cols-3">

        {/* Nav/sidebar */}
        <div className="md:col-span-1 md:flex md:justify-end">
          <nav className="text-right"> {/* I dont see what this is doing */}
            <div className="flex justify-between items-center">
              <h1 className="font-bold uppercase p-4 md:border-b md:border-gray-500">
                <a href="/" className="hover:text-gray-700 tracking-widest">Food Ninja</a>
              </h1>
              <div className="px-4 cursor-pointer md:hidden" id="burger">
                <img
                  src={toggle ? close : burger}  // Conditionally render 'close' or 'burger' icon based on 'toggle' state.
                  alt="burger"
                  className="w-5 ml-2"
                  onClick={() => setToggle(!toggle)}  // Toggle the 'toggle' state when the icon is clicked.
                />
              </div>
            </div>
            <ul
              className={`${
                !toggle ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
              } text-sm mt-6 md:block`}
              id="menu"
            >
              <li className="text-gray-700 font-bold py-1">
                <a href="#" className="px-4 flex justify-end border-r-4 border-primary">
                  <span>Home</span>
                  <img className="w-5 ml-2" src={home} alt="home" />
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="px-4 flex justify-end border-r-4 border-white">
                  <span>About</span>
                  <img className="w-5 ml-2" src={about} alt="about" />
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="px-4 flex justify-end border-r-4 border-white">
                  <span>Contact</span>
                  <img className="w-5 ml-2" src={contact} alt="contact" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Reciepe area */}
        <main className="px-16 py-6 md:col-span-2 bg-gray-100">
          <div className="flex justify-center md:justify-end">
            <a href="#" className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Log in</a>
            <a href="#" className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Sign up</a>
          </div>

          <header className="mt-4">
            <h2 className="text-gray-700 text-6xl font-semibold leading-none tracking-wider">Recipes</h2>
            <h3 className="text-2xl font-semibold tracking-wider">For Ninjas</h3>
          </header>

          {/* Recipes */}
          <div>
            <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">Latest Recipes</h4>

            <div className="mt-8 grid lg:grid-cols-3 gap-10">
              {/* Display cards for latest recipes */}
              {recipes.map((recipe) => (
                <Badges key={recipe.food} {...recipe} />  // Pass recipe data as props to the 'Badges' component.
              ))}
            </div>

            <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">Most Popular</h4>

            <div className="mt-8 grid lg:grid-cols-3 gap-10">
              {/* Display cards for most popular recipes (same logic as above) */}
              {recipes.map((recipe) => (
                <Badges key={recipe.food} {...recipe} />
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="btn bg-secondary-100 text-secondary-200 inline-block hover:shadow-inner transform hover:scale-125 hover-bg-opacity-50 transition ease-out duration-300">Load more</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;  // Export the 'App' component for use in other parts of the application.
