/* eslint-disable */
import { useState, useEffect } from "react";
import "./Feedback.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faStar } from '@fortawesome/free-solid-svg-icons';

// const Feedback = () => (
//   <div className="gpt3__feedback section__padding" id="feedback">
//     <div className="gpt3__feedback-container">
//       <h1 className="heading-container ">Palautemme</h1>
//       <div className="gpt3__box-feedback" />
//     </div>
//   </div>
// );

// export default Feedback;

const Feedback = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [comments, setComments] = useState([
        {
          id: 1,
          text: "Palaute asumispalveluyksikön 13 asukkaan puolesta. Cinco Care siivous ollut aivan ensiluokkaista ja palvelu todella hyvää ja lämminhenkistä.",
          author: "Helsinki, esihenkilö",
        },
        {
          id: 2,
          text: "Tekevät todella hyvää työtä 10+",
          author: "Helsinki, siivouksen asiakas",
        },
        {
          id: 3,
          text: "Filippiiniläinen Allan on erittäin mukava",
          author: "Helsinki, asiakas",
        }
      ]);
  
      const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % comments.length);
      };
    
      const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + comments.length) % comments.length);
      };

      useEffect(() => {
        let interval;
        const autoPlay = () => {
          interval = setInterval(() => {
            handleNext();
          }, 100000); 
        };
    
        autoPlay(); 
    
        return () => clearInterval(interval); 
      }, [currentIndex]);

      const Stars = () => (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <FontAwesomeIcon icon={faStar} style={{color: '#FFD700'}}/>
            <FontAwesomeIcon icon={faStar} style={{color: '#FFD700'}}/>
            <FontAwesomeIcon icon={faStar} style={{color: '#FFD700'}}/>
            <FontAwesomeIcon icon={faStar} style={{color: '#FFD700'}}/>
            <FontAwesomeIcon icon={faStar} style={{color: '#FFD700'}}/>
        </div>
      )


  return (
    <div className="gpt3__feedback section__padding" id="feedback">
      <div className="gpt3__feedback-container">
        <h1 className="heading-container ">Palautemme</h1>
        <div className="carousel">
        {/* <button className="arrow prev" onClick={handlePrev}><FontAwesomeIcon icon={faBackward} /></button> */}
          <div className="slide-container" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
            {comments.map((comment, index) => (
              <div key={comment.id} className="slide">
                <Stars />
                <p className="gpt3__feedback-container-text">{comment.text}</p>
                <p style={{textAlign: 'right'}}>- {comment.author}</p>
              </div>
            ))}
          </div>
          {/* <button className="arrow next" onClick={handleNext}><FontAwesomeIcon icon={faForward} /></button> */}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
