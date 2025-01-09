import "./PracticeCard.css";
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
            <h3><span>136</span>/ 240</h3>
          </div>
          
          <div className="pratice_card_accuracy_container">
            <span>76%</span>
            <p>ACCURACY</p>
          </div>

        </div>

        <div></div>
      </section>
    </>
  )
}

export default PracticeCard