import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import "../pages/home.scss"
import { faUsers, faFingerprint, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__container__content">
          <h1 className="main__container__content__title">
            StreetVerse
          </h1>
          <div className="main__container__content__description home__container__content__description__padding">
            The world’s premier global NFT streetwear club. We are a
            community built by fashion lovers, founded to celebrate the
            authenticity and diversity of streetwear culture.
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          className="main__container__video"
        >
          <source src="/videos/StreetVerseRedLogo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          <div className="main__container__video__overlay"></div>
        </video>
      </div>
      <div className="home__relative-container">
        <div className="home__text-center"></div>
      </div>


      <div className="home__relative-container">
        <div className="home__text-center"></div>
      </div>

      <section className="home__section">
        <div className="home__container">
          <div className="home__flex-wrap">
            <div className="home__item">
              <div className="home__card">
                <div className="home__card-content">
                  <div className="home__icon home__icon--red">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <div className="home__title">Community</div>
                  <div className="home__description">
                    Become an insider everywhere. Join our invaluable
                    community of top street wear creators, producers,
                    enthusiasts and collectors.
                  </div>
                </div>
              </div>
            </div>
            <div className="home__item">
              <div className="home__card">
                <div className="home__card-content">
                  <div className="home__icon home__icon--emerald">
                    <FontAwesomeIcon icon={faFingerprint} />
                  </div>
                  <div className="home__title">Access</div>
                  <div className="home__description">
                    Purchase one of kind NFT merch drops directly from your
                    favorite streetwear brands.
                  </div>
                </div>
              </div>
            </div>
            <div className="home__item">
              <div className="home__card">
                <div className="home__card-content">
                  <div className="home__icon home__icon--blue">
                    <FontAwesomeIcon icon={faCalendar} />
                  </div>
                  <div className="home__title">Experiences</div>
                  <div className="home__description">
                    A one-time fee will give you lifetime access to
                    unparalleled streetwear experiences around the world. Your
                    StreetVerse membership NFT is a tradable asset.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="events-section">
        <div className="container">
          <div className="content">
            <div className="content__text-box">
              <div className="content__title">Events</div>
              <div className="content__description">
                Get a sneak peek at our exciting members-only events, taking
                place all over the world! Participate in the discussions on
                our private Discord channels to request or suggest new events.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="event-cards">
        <div className="container">
          <div className="event-cards__list">
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
                alt=""
                className="event-card__img"
              />
              <div className="event-card__content">
                <div className="event-card__text-group">
                  <div className="event-card__title">London</div>
                  <div className="event-card__subtitle">London Fashion</div>
                  <p className="event-card__description">
                    London Fashion Week Streetwear September 2023.
                  </p>
                </div>
              </div>
            </div>
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
                alt=""
                className="event-card__img"
              />
              <div className="event-card__content">
                <div className="event-card__text-group">
                  <div className="event-card__title">London</div>
                  <div className="event-card__subtitle">London Fashion</div>
                  <p className="event-card__description">
                    London Fashion Week Streetwear September 2023.
                  </p>
                </div>
              </div>
            </div>
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
                alt=""
                className="event-card__img"
              />
              <div className="event-card__content">
                <div className="event-card__text-group">
                  <div className="event-card__title">London</div>
                  <div className="event-card__subtitle">London Fashion</div>
                  <p className="event-card__description">
                    London Fashion Week Streetwear September 2023.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="event-cards__link">
          <Link to={'/events'} className="button-content">
            <button className="button-content">
              View All Events
            </button>
          </Link>
        </div>
      </section>

      <section className="community-section">
        <div className="community-section__container">
          <div className="community-section__header">
            <div className="community-section__header-content">
              <div className="community-section__title">Our Community</div>
              <div className="community-section__description">
                A Community Built By StreetWear Fashion Lovers
              </div>
            </div>
          </div>
          <div className="community-section__members">
            <div className="member-card__content">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1532332248682-206cc786359f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80&w=800&h=800"
                className="member-card__img"
              />
              <div className="member-card__details">
                <div className="member-card__name">Kazi Mizan</div>
                <div className="member-card__position">
                  Designer
                </div>
                <div className="member-card__socials">
                  <button className="member-card__social-btn member-card__social-btn--twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>
                  <button className="member-card__social-btn member-card__social-btn--facebook">
                    <FontAwesomeIcon icon={faInstagram} />
                  </button>
                  <button className="member-card__social-btn member-card__social-btn--dribbble">
                    <FontAwesomeIcon icon={faDiscord} />
                  </button>
                </div>
              </div>
            </div>
            <div className="member-card__content">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1532332248682-206cc786359f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80&w=800&h=800"
                className="member-card__img"
              />
              <div className="member-card__details">
                <div className="member-card__name">Kazi Mizan</div>
                <div className="member-card__position">
                  Designer
                </div>
                <div className="member-card__socials">
                  <button className="member-card__social-btn member-card__social-btn--twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>
                  <button className="member-card__social-btn member-card__social-btn--facebook">
                    <FontAwesomeIcon icon={faInstagram} />
                  </button>
                  <button className="member-card__social-btn member-card__social-btn--dribbble">
                    <FontAwesomeIcon icon={faDiscord} />
                  </button>
                </div>
              </div>
            </div>
            <div className="member-card__content">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1532332248682-206cc786359f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80&w=800&h=800"
                className="member-card__img"
              />
              <div className="member-card__details">
                <div className="member-card__name">Kazi Mizan</div>
                <div className="member-card__position">
                  Designer
                </div>
                <div className="member-card__socials">
                  <button className="member-card__social-btn member-card__social-btn--twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>
                  <button className="member-card__social-btn member-card__social-btn--facebook">
                    <FontAwesomeIcon icon={faInstagram} />
                  </button>
                  <button className="member-card__social-btn member-card__social-btn--dribbble">
                    <FontAwesomeIcon icon={faDiscord} />
                  </button>
                </div>
              </div>
            </div>
            <div className="member-card__content">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1532332248682-206cc786359f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80&w=800&h=800"
                className="member-card__img"
              />
              <div className="member-card__details">
                <div className="member-card__name">Kazi Mizan</div>
                <div className="member-card__position">
                  Designer
                </div>
                <div className="member-card__socials">
                  <button className="member-card__social-btn member-card__social-btn--twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>
                  <button className="member-card__social-btn member-card__social-btn--facebook">
                    <FontAwesomeIcon icon={faInstagram} />
                  </button>
                  <button className="member-card__social-btn member-card__social-btn--dribbble">
                    <FontAwesomeIcon icon={faDiscord} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>

  )
}

export default Home