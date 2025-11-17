import BookmarkIcon from "./BookmarkIcon";

export default function JobListItem() {
  return (
    <li className={`job-item `}>
      <a href={`#`} className="job-item__link">
        <div className="job-item__badge">D</div>

        <div className="job-item__middle">
          <h3 className="third-heading">Title</h3>
          <p className="job-item__company">Company Name</p>
        </div>

        <div className="job-item__right">
          <BookmarkIcon />
          <time className="job-item__time">days ago</time>
        </div>
      </a>
    </li>
  );
}
