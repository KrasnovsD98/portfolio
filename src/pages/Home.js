import Header from './../components/header/Header'

const Home = () => {
    return (
      <>
        <Header />
        <main className="section">
          <div className="container">
            <ul className="content-list">
              <li className="content-list__item">
                <h2 className="title-2">Frontend</h2>
                <p>
                  JavaScript, ReactJS , HTML, CSS, BootStrap, TailwindCSS, SCSS
                </p>
              </li>
              <li className="content-list__item">
                <h2 className="title-2">Backend</h2>
                <p>NodeJS, MySQL, PHP, C#, .NET</p>
              </li>
              <li className="content-list__item">
                <h3 className="title-3">Cloud computing platform</h3>
                <p>ServiceNow</p>
              </li>
            </ul>
          </div>
        </main>
      </>
    );
}

export default Home;