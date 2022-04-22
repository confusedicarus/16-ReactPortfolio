import react from "react";
import styles from './styles/Home.css'
import Image from 'react-bootstrap/Image'

function Home() {
  return (
  <div className="homeHeaderWrapper">
    <h1 className="homeHeader">Hello welcome to my page</h1>
    <h2 className="homeSubHeader">I'm Rick</h2>
    <Image className="homeBackground" src="https://images.unsplash.com/photo-1650012008053-b96b760d8984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" fluid='true'></Image>
    </div>
  );
}

export default Home;
