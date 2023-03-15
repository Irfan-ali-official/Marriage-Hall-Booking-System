import "./../assets/css/style.css";
import React from "react";

export default function Temp() {
  return (
    <>
      <div className="header">
        <a href="#/" className="logo">
          <span>e</span>vento
        </a>

        <div className="navbar">
          <a href="#home">home</a>
          <a href="#service">service</a>
          <a href="#about">about</a>
          <a href="#gallery">gallery</a>
          <a href="#price">price</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
        </div>

        <div id="menu-bars" className="fas fa-bars"></div>
      </div>

      <section className="home" id="home">
        <div className="content">
          <h3>
            its time to celebrate! the best <span> event organizers </span>
          </h3>
          <a href="#" className="btn">
            contact us
          </a>
        </div>

        <div className="swiper-container home-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="images/slide-1.jpg" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="images/slide-2.jpg" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="images/slide-3.jpg" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="images/slide-4.jpg" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="images/slide-5.jpg" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="images/slide-6.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="service" id="service">
        <h1 className="heading">
          {" "}
          our <span>services</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-map-marker-alt"></i>
            <h3>venue selection</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
              suscipit.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-envelope"></i>
            <h3>invitation card</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
              suscipit.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-music"></i>
            <h3>entertainment</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
              suscipit.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-utensils"></i>
            <h3>food and drinks</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
              suscipit.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-photo-video"></i>
            <h3>photos and videos</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
              suscipit.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-birthday-cake"></i>
            <h3>custom food</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
              suscipit.
            </p>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us{" "}
        </h1>
        <div className="row">
          <div className="image">
            <img src="images/about-img.jpg" alt="" />
          </div>
          <div className="content">
            <h3>We will arrange a very special celebration for you</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              labore fugiat ut esse perferendis perspiciatis provident dolores
              fuga in facilis culpa possimus, quia praesentium itaque, sapiente
              quasi harum rem asperiores.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              vero expedita incidunt provident quibusdam aut odit, numquam
              nesciunt similique nisi.
            </p>
            <a href="#" className="btn">
              contact us
            </a>
          </div>
        </div>
      </section>

      <section className="gallery" id="gallery">
        <h1 className="heading">
          our <span>gallery</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="images/g-1.jpg" alt="" />
            <h3 className="title">photos and events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
          </div>

          <div className="box">
            <img src="images/g-2.jpg" alt="" />
            <h3 className="title">photos and events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
          </div>

          <div className="box">
            <img src="images/g-3.jpg" alt="" />
            <h3 className="title">photos and events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
          </div>

          <div className="box">
            <img src="images/g-4.jpg" alt="" />
            <h3 className="title">photos and events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
          </div>

          <div className="box">
            <img src="images/g-5.jpg" alt="" />
            <h3 className="title">photos and events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
          </div>

          <div className="box">
            <img src="images/g-6.jpg" alt="" />
            <h3 className="title">photos and events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
          </div>

          <div className="box">
            <img src="images/g-7.jpg" alt="" />
            <h3 className="title">photos and events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
          </div>

          <div className="box">
            <img src="images/g-8.jpg" alt="" />
            <h3 className="title">photos and events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
          </div>

          <div className="box">
            <img src="images/g-9.jpg" alt="" />
            <h3 className="title">photos and events</h3>
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-share"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
          </div>
        </div>
      </section>

      <section className="price" id="price">
        <h1 className="heading">
          {" "}
          our <span>price</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <h3 className="title">for birthdays</h3>
            <h3 className="amount">$250.99</h3>
            <ul>
              <li>
                <i className="fas fa-check"></i>full services
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> decorations{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> music and photos{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> food and drinks{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> invitation card{" "}
              </li>
            </ul>
            <a href="#" className="btn">
              check out
            </a>
          </div>

          <div className="box">
            <h3 className="title">for weddings</h3>
            <h3 className="amount">$450.99</h3>
            <ul>
              <li>
                <i className="fas fa-check"></i>full services
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> decorations{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> music and photos{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> food and drinks{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> invitation card{" "}
              </li>
            </ul>
            <a href="#" className="btn">
              check out
            </a>
          </div>

          <div className="box">
            <h3 className="title">for concerts</h3>
            <h3 className="amount">$650.99</h3>
            <ul>
              <li>
                <i className="fas fa-check"></i>full services
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> decorations{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> music and photos{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> food and drinks{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> invitation card{" "}
              </li>
            </ul>
            <a href="#" className="btn">
              check out
            </a>
          </div>

          <div className="box">
            <h3 className="title">for others</h3>
            <h3 className="amount">$850.99</h3>
            <ul>
              <li>
                <i className="fas fa-check"></i>full services
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> decorations{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> music and photos{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> food and drinks{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> invitation card{" "}
              </li>
            </ul>
            <a href="#" className="btn">
              check out
            </a>
          </div>
        </div>
      </section>

      <section className="reivew" id="review">
        <h1 className="heading">
          client's <span>review</span>
        </h1>

        <div className="review-slider swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src="images/pic-1.png" alt="" />
                <div className="user-info">
                  <h3>john deo</h3>
                  <span>happy clients</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis dolor dicta cum. Eos beatae eligendi, magni numquam
                nemo sed ut corrupti, ipsam iure nisi unde et assumenda
                perspiciatis voluptatibus nihil.
              </p>
            </div>

            <div className="swiper-slide box">
              <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src="images/pic-2.png" alt="" />
                <div className="user-info">
                  <h3>john deo</h3>
                  <span>happy clients</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis dolor dicta cum. Eos beatae eligendi, magni numquam
                nemo sed ut corrupti, ipsam iure nisi unde et assumenda
                perspiciatis voluptatibus nihil.
              </p>
            </div>

            <div className="swiper-slide box">
              <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src="images/pic-3.png" alt="" />
                <div className="user-info">
                  <h3>john deo</h3>
                  <span>happy clients</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis dolor dicta cum. Eos beatae eligendi, magni numquam
                nemo sed ut corrupti, ipsam iure nisi unde et assumenda
                perspiciatis voluptatibus nihil.
              </p>
            </div>

            <div className="swiper-slide box">
              <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src="images/pic-4.png" alt="" />
                <div className="user-info">
                  <h3>john deo</h3>
                  <span>happy clients</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis dolor dicta cum. Eos beatae eligendi, magni numquam
                nemo sed ut corrupti, ipsam iure nisi unde et assumenda
                perspiciatis voluptatibus nihil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1 className="heading">
          {" "}
          <span>contact</span> us{" "}
        </h1>

        {/* <form action="">
        <div className="inputBox">
            <input type="text" placeholder="name">
            <input type="email" placeholder="email">
        </div>
        <div className="inputBox">
            <input type="number" placeholder="number">
            <input type="text" placeholder="subject">
        </div>
        <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="send message" className="btn">
    </form> */}
      </section>

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>branches</h3>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> mumbai{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> jogeshwari{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> goregaon{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> navi mumbai{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> andheri{" "}
            </a>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> home{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> service{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> about{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> gallery{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> price{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> reivew{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> contact{" "}
            </a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="#">
              {" "}
              <i className="fas fa-phone"></i> +123-456-7890{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-phone"></i> +111-222-3333{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-envelope"></i> shaikhanas@gmail.com{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-envelope"></i> anasshaikh@gmail.com{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> mumbai, india - 400104{" "}
            </a>
          </div>

          <div className="box">
            <h3>follow us</h3>
            <a href="#">
              {" "}
              <i className="fab fa-facebook-f"></i> facebook{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-twitter"></i> twitter{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-instagram"></i> instagram{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-linkedin"></i> linkedin{" "}
            </a>
          </div>
        </div>

        <div className="credit">
          {" "}
          created by <span>mr. web designer</span> | all rights reserved{" "}
        </div>
      </section>

      <div className="theme-toggler">
        <div className="toggle-btn">
          <i className="fas fa-cog"></i>
        </div>

        <h3>choose color</h3>

        <div className="buttons">
          <div className="theme-btn" style={{ background: "#3867d6" }}></div>
          <div className="theme-btn" style={{ background: " #f7b731" }}></div>
          <div className="theme-btn" style={{ background: " #ff0033" }}></div>
          <div className="theme-btn" style={{ background: "#20bf6b" }}></div>
          <div className="theme-btn" style={{ background: "#fa8231" }}></div>
          <div className="theme-btn" style={{ background: "#FC427B" }}></div>
        </div>
      </div>
    </>
  );
}
