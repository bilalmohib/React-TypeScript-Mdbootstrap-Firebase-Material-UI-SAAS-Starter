import NavBar from "../NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-primary">React(Mdbootstrap,Material UI,Typescript,SCSS) Bioler Plate</h1>
            <hr />
            <h2 className="text-dark">Features</h2>
            <span className="ml-2 text-danger">The below features are already installed in this boiler plate.You only need to run <span className="text-success">npm i/yarn</span> to get started</span>
            <ul>
              <li>React</li>
              <li>Typescript</li>
              <li>SAAS(SCSS)</li>
              <li>Material UI</li>
              <li>Md Bootstrap</li>
              <li>Firestore</li>
              <li>Firebase</li>
              <li>Firebase realtime database</li>
              <li>Firebase auth</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;