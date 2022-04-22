import react from "react";
import Image from 'react-bootstrap/Image'

export default function AboutMe() {
  return (
    <div>
      <h1>Hi I'm Rick</h1>
      <Image className="profilePic" src="https://confusedicarus.github.io/07-professional-portfolio-update/assets/images/avatar.png" fluid='true'></Image>
      <p>
        This is me in the morning before I've had any coffee. I'm a Jr. Dev that really like coding. I'm still learning and I hope I never stop. Some things I enjoy when not coding include snowboarding, hiking, motorcycles, and basically anything that's got wheels and goes fast; the wheels are optional though.
      </p>

    </div>
  );
}
