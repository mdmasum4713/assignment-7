
const Header = () => {
    return (
        <div>
            
      <header>
        <section>
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Home</a></li>
                  <li>
                    <a>Reacipes</a>

                  </li>
                  <li><a>About</a></li>
                </ul>
              </div>
              <a className="btn btn-ghost text-2xl">Recipe Calories</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>Recipes</a></li>
                <li><a>About</a></li>
                <li><a>Search</a></li>
              </ul>
            </div>
            <div className="navbar-end gap-4">
            <div>
            <div>

        <label className="input rounded-full flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
  <input type="text" className="grow" placeholder="Search" />
 
        </label>
             </div>
            </div>
            <a href=""><img src="https://i.ibb.co/ZJ41Byc/Annotation-2024-03-16-021505.png" alt="" className='w-14 ' />
            </a>
          </div>
        </div>
      </section> 
    </header >

      <main>
        <section>
          <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/tZjbFM5/front-view-confused-female-chef-apron-standing-table.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl font-bold">Dicover an exceptional cooking <br /> class tailord for you</h1>
                <p className="mb-5">The chicken is a bird that people all over the world raise for its meat, eggs, and feathers. It belongs to the group of domesticated, or tame, birds called poultry.</p>
                <button className="btn btn-accent rounded-full">Explore Now</button>
                <button className='btn btn-ghost ml-6 rounded-full'>Our Feedback</button>
              </div>
            </div>
          </div>
        </section>
      </main>
        </div>
    );
};

export default Header;