import BookmarkIcon from "./BookmarkIcon";
import officeView from "../assets/officeView.jpg";

export default function JobItemContent() {
  return (
    <section className="job-details">
      <div>
        <img src={officeView} alt="office picture" />

        <a className="apply-btn" href="./" target="_blank">
          Apply
        </a>

        <section className="job-info">
          <div className="job-info__left">
            <div className="job-info__badge">D</div>
            <div className="job-info__below-badge">
              <time className="job-info__time">23d</time>

              <BookmarkIcon />
            </div>
          </div>

          <div className="job-info__right">
            <h2 className="second-heading">Job category</h2>
            <p className="job-info__company">company</p>
            <p className="job-info__description">job description</p>
            <div className="job-info__extras">
              <p className="job-info__extra">
                <i className="fa-solid fa-clock job-info__extra-icon"></i>
                operate mode
              </p>
              <p className="job-info__extra">
                <i className="fa-solid fa-money-bill job-info__extra-icon"></i>
                salary
              </p>
              <p className="job-info__extra">
                <i className="fa-solid fa-location-dot job-info__extra-icon"></i>{" "}
                location
              </p>
            </div>
          </div>
        </section>

        <div className="job-details__other">
          <section className="qualifications">
            <div className="qualifications__left">
              <h4 className="fourth-heading">Qualifications</h4>
              <p className="qualifications__sub-text">
                Other qualifications may apply
              </p>
            </div>
            <ul className="qualifications__list"></ul>
          </section>
        </div>

        <footer className="job-details__footer">
          <p className="job-details__footer-text">
            If possible, please reference that you found the job on{" "}
            <span className="u-bold">IT Job Portal</span>, we would really
            appreciate it!
          </p>
        </footer>
      </div>
    </section>
  );
}
