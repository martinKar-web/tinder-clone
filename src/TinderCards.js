import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';

const TinderCards = () => {
  const [people, setPeople] = useState([]);
  //{
  //  name: 'steve jobs',
  //  url:
  //    'https://media.gettyimages.com/photos/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-to-unveil-picture-id109715330?k=6&m=109715330&s=612x612&w=0&h=2Pbk8cH7UYU6fZRWKOihXBtvT5wOjChBum02EOMuGeU=',
  //},
  //{
  //  name: 'Mark Zuckerberg',
  //  url:
  //    'https://media.gettyimages.com/photos/facebook-ceo-mark-zuckerberg-speaks-about-the-new-facebook-news-at-picture-id1178141599?k=6&m=1178141599&s=612x612&w=0&h=WjqQS70okT4-od4ldxqp1NCobCFV4m5p8M7i3kMV6vE=',
  //},

  // use effect is a piece of code that runs based on a condition
  useEffect(() => {
    // this is where the code runs
    const unsubscribe = database
      .collection('people')
      .onSnapshot((snapshot) => {
        setPeople(snapshot.docs.map((doc) => doc.data()));
      });

    return () => {
      // this is the cleanup...
      unsubscribe();
    };
    // this will run once, when the component loads and never again
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={['up', 'down']}
            >
              <div
                className="card"
                style={{backgroundImage: `url(${person.url})`}}
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
};

export default TinderCards;

// vanilla JS way
// const people = [];
// people.push('sonny', 'qazi')

// REACT WAY
// setPeople([...people, 'sonny', 'qazi'])
