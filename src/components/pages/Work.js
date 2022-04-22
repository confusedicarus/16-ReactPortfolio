import react from "react";
import { Image } from "react-bootstrap";
import styles from "./styles/Work.css";

function Work() {
  return (
    <>
      <div className="projectWrapper">
        <div className="featureProject">
          <h3>PetFinder App</h3>
          <div className="imageWrapper">
            <Image
              src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="featureProjectImg projectImg"
            ></Image>
          </div>
          <div className="card-footer text-muted">
            Project Still Under Development
          </div>
          <div className="linkBtn">
            <a href="https://find-your-next-pet.herokuapp.com/" className="btn">
              Click Here to Visit this Project
            </a>
          </div>
        </div>
        <div className="subProject">
          <h3>Password Generator</h3>
          <div className="imageWrapper">
            <Image
              src="https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9ja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="subProjectImg1 projectImg"
            ></Image>
          </div>
          <div className="linkBtn">
            <a href="https://confusedicarus.github.io/03-js-password-generator-project/" className="btn">
              Click Here to Visit this Project
            </a>
          </div>
        </div>
      </div>
      <div className="projectWrapper">
        <div className="subProject">
          <h3>Weather Dashboard</h3>
          <div className="imageWrapper">
            <Image
              src="https://media.istockphoto.com/photos/extreme-weather-on-earth-background-picture-id1330405373?b=1&k=20&m=1330405373&s=170667a&w=0&h=mpEkuSGb12BP_EGMa7RHaH1LiWTZvkD768lphuJ4rlI="
              className="featureProjectImg projectImg"
            ></Image>
          </div>
          <div className="linkBtn">
            <a href="https://confusedicarus.github.io/06-weatherdashboard-weatherapi/" className="btn">
              Click Here to Visit this Project
            </a>
          </div>
        </div>
        <div className="subProject">
          <h3>E-Commerce BackEnd</h3>
          <div className="imageWrapper">
            <Image
              src="https://media.istockphoto.com/photos/close-up-of-young-asian-man-shopping-at-the-flower-shop-he-is-paying-picture-id1317988290?k=20&m=1317988290&s=612x612&w=0&h=C49YSuvNbAjF47NfspFWC5ZXQfTOUU_KcWrG1xf2Qj0="
              className="subProjectImg1 projectImg"
            ></Image>
          </div>
          <div className="linkBtn">
            <a href="https://find-your-next-pet.herokuapp.com/" className="btn">
              Click Here to Visit this Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
