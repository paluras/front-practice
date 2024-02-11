import "./style.css";
import Image from "next/image";
import plantImg from  "./public/plant.jpg"
import odinLogo from "./public/odin-lined.png"

export default function Form() {
  // const password = document.getElementById("password");
  // const confPass = document.getElementById("confirm-password");
  // const button1 = document.getElementById("btn");

//   function checkMe() {
//     if (password.defaultValue !== confPass.defaultValue) {
//       console.log("Password Doesnt Match");
//     } else {
//       console.log("goodshit");
//       confPass.style.borderColor = "green";
//       password.style.borderColor = "green";
//     }
//   }

//   button1.addEventListener("click", checkMe);

  return (
    <div id="app">
      <div className="left-main-container">
        <Image className="splash-img" src={plantImg} alt="image of a plant" />
        <div className="logo-container">
          <Image className="logo" alt="odin Logo" src={odinLogo} />
        </div>
       
      </div>
      <div className="right-main-container">
        <div className="top">
          <h3>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ex
            ducimus minima illo, magni ut maiores possimus sed quasi libero
            reprehenderit asperiores porro reiciendis similique laborum
            consequuntur a tempore. Nisi.
          </h3>
        </div>
        <div className="mid">
          <legend>Let's do this!</legend>
          <form action="site.com/doesntexit" method="post">
            <div className="input-box">
              <label htmlFor="first_name">First Name:</label>
              <input minLength="3" type="text" id="first_name" required />
            </div>
            <div className="input-box">
              <label htmlFor="last_name">Last Name:</label>
              <input minLength="3" type="text" id="last_name" required />
            </div>
            <div className="input-box">
              <label htmlFor="lemail">Email</label>
              <input minLength="3" type="email" id="email" required />
            </div>
            <div className="input-box">
              <label htmlFor="phone-number">Phone Number</label>
              <input minLength="3" type="number" id="phone-number" required />
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input
                minLength="3"
                type="password"
                id="password"
                defaultValue="something"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                minLength="3"
                type="password"
                id="confirm-password"
                defaultValue=""
                required
                title="Please enter a valid zip code, example: 65251"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              />
            </div>
            <button id="btn" type="submit">
              Create Account
            </button>
          </form>
        </div>
        <div className="bot">
          <p>
            Already have a account?
            <a href="">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}
