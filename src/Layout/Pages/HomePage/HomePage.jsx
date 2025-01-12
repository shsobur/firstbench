import "./HomePage.css";
import image from "../../../assets/result.png";
import VisiteCard from "../Component/VisiteCard/VisiteCard";
import PracticeCard from "../Component/PracticeCard/PracticeCard";
import Compare from "../Component/Compare/Compare";
import ImprovementCard from "../Component/ImprovementCard/ImprovementCard";
import Time from "../Component/Time/Time";

const HomePage = () => {
  return (
    <>
      <main className="home_page_main_top_container">
        <aside className="left_side_result_main_container">

          <div className="result_section_image_container">
            <div>
              <img src={image} alt="image" />
            </div>
            <div>
              <h2>Your Result!</h2>
              <p>All you insights & details in one place</p>
            </div>
          </div>

          <div>
            <PracticeCard></PracticeCard>
          </div>

          <div>
            <VisiteCard></VisiteCard>
          </div>

        </aside>

        <section className="right_side_test_info_main_container">
          <div className="compare_main_container">
            <Compare></Compare>
            <Compare></Compare>
            <Compare></Compare>
          </div>
          
          <div className="right_side_improvement_card_container">
            <ImprovementCard></ImprovementCard>
            <Time></Time>
          </div>

          <div></div>
        </section>
      </main>
    </>
  )
}

export default HomePage;