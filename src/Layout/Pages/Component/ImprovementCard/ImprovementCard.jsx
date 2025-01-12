import "./ImprovementCard.css";
import { HiTrendingUp } from "react-icons/hi";

const ImprovementCard = () => {
  return (
    <>
      <section className="imp_card_main_top_container">
        <div className="imp_card_inner_container">

          <h2><span><HiTrendingUp /></span>Improvements</h2>
          <p>Subject Understanding</p>

          <div className="imp_card_subject_list_container">
            <h3>Geography</h3>
            <h4>Politics</h4>
            <h3>Current Affairs</h3>
            <h5>General Statuss</h5>
            <h3>Mathematice</h3>
            <h4>English Literature</h4>
            <h5>Social Studies</h5>
            <h6>Bangladesh History</h6>
            <h3>Econamics</h3>
          </div>

        </div>
      </section>
    </>
  )
}

export default ImprovementCard