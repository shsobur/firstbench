import "./HomePage.css";
import image from "../../../assets/result.png";

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

        </aside>

        <section className="left_side_test_info_main_container">
          Hello...
        </section>
      </main>
    </>
  )
}

export default HomePage;