import "./HomePage.css";
import image from "../../../assets/result.png";
import PracticeCard from "../Component/PracticeCard/PracticeCard";
import VisiteCard from "../Component/VisiteCard/VisiteCard";

const HomePage = () => {
  return (
    <>
      <main className="home_page_main_top_container">
        <aside className="right_side_result_main_container">

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

        <section className="left_side_test_info_main_container">
          Hello...
        </section>
      </main>
    </>
  )
}

export default HomePage;