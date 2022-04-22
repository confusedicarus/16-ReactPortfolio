import styles from './styles/Contact.css'
function Contact() {
  return (
    <>
      <div className="infoMe">
        <h4 className="contactHeader">Leave me a message or feel free to checkout these links</h4>
        <ul className="contact">
          <li>
            <a href="tel:720.515.7247">(720) 515-7247</a>
          </li>
          <li>
            <a href="mailto:rlmor1023@gmail.com">rlmor1023@gmail.com</a>
          </li>
          <li>
            <a href="https://github.com/confusedicarus">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rick-morrissette-4bb362149/">
              Linkedin
            </a>
          </li>
        </ul>
        <form className='formWrapper'>
          <input placeholder="First Name"></input>
          <input placeholder="Last Name"></input>
          <input placeholder="Email"></input> <br/>
          <textarea placeholder="Message"></textarea><br/>
          <button className='contactButton'>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;