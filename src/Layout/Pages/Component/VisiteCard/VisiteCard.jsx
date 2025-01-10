import { IoIosInformationCircleOutline } from "react-icons/io";
import "./VisiteCard.css";
import { TbFileSymlink } from "react-icons/tb";

const VisiteCard = () => {
  return (
    <>
      <section className="visite_card_main_component">
        <div className="visite_card_inner_content">
          <h2>Revisite Paper</h2>
          <p>Challenge you friend by simple sharing a link to the test</p>
          <div className="visite_card_btn_container">
            <button>
              {" "}
              <TbFileSymlink />
              Visite
            </button>
          </div>
          <li>
            <span>
              <IoIosInformationCircleOutline />
            </span>
            instrucion for how to upload your handwritten material in given
          </li>
        </div>
      </section>
    </>
  );
};

export default VisiteCard;