import "./Time.css";
import { IoIosTimer } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";

const Time = () => {
  return (
    <>
      <section>
        <div className="main_time_container">
          <h2>
            <IoIosTimer /> Response Time
          </h2>
          <h3>Std Time - 2min</h3>

          <div className="time_info_content">
            <h3>
              <span>60</span>% Ans took
            </h3>
            <p>
              <span>
                <FaArrowUp />
              </span>{" "}
              2min
            </p>
          </div>

          <div className="time_status_content">
            <h2>
              You are <span>slow </span> !
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Time;
