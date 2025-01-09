import "./PracticeCard.css";
import image from "../../../../assets/top_score.png";
import { IoBagCheckOutline } from "react-icons/io5";

const PracticeCard = () => {
  return (
    <>
      <section className="pratice_card_main_container">
        <div className="pratice_card_first_inner_section">
          <div className="pratice_card_icon_container">
            <IoBagCheckOutline />
          </div>

          <div className="pratice_card_info_container">
            <h2>YOU&apos;VE PASSED</h2>
            <h3>
              <span>136</span>/ 240
            </h3>
          </div>

          <div className="pratice_card_accuracy_container">
            <span>76%</span>
            <p>ACCURACY</p>
          </div>
        </div>

        <div className="pratice_card_second_inner_section">
          <div className="pratice_card_top_score_container">
            <div className="pratice_card_top_score_image_container">
              <img src={image} alt="img" />
            </div>
            <div className="score_info_container">
              <h2>Top Score</h2>
              <h3>
                <span>230</span>/ 240
              </h3>
            </div>
          </div>

          <div className="score_author_name_container">
            <h2>
              <span>By</span> Sobur hossen
            </h2>
            <h3>92% ACCURACY</h3>
          </div>
        </div>

        <div className="pratice_card_suggestion_container">
          <h2>Improve your Marka</h2>
          <p>Improve you score by praticing more.</p>
          <button>Practice more</button>
        </div>
      </section>
    </>
  );
};

export default PracticeCard;
