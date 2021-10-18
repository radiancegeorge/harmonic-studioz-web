import { contactLinks } from "../../utils/contactLinks";
import "./contact.scss";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1>
          Contact Us <span>You can leave us a message</span>
        </h1>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <label htmlFor="firstName">
            <p>First name</p>
            <input type="text" />
          </label>
          <label htmlFor="lastName">
            <p>Last name</p>
            <input type="text" />
          </label>
          <label htmlFor="email">
            <p>Email</p>
            <input type="email" />
          </label>
          <label htmlFor="subject">
            <p>Subject</p>
            <input type="text" />
          </label>
          <label htmlFor="content">
            <p>Message</p>
            <div type="text" contentEditable />
          </label>
          <button type="submit">SEND MESSAGE</button>
        </form>
        <h4>You can also reach us through the following platforms</h4>
        <ul>
          {contactLinks.map((data, idx) => (
            <li key={idx}>
              <a href={data.url}>
                <data.icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Contact;
