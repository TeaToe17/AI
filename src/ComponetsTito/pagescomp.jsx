

const Pagescomp = ({ title,li1, li2, li3, li4 }) => {
  return (
    <div className="pagescomp">
      <h5> {title} </h5>
        <hr/>
      <ul>
        <li> {li1} </li>
        <hr />
        <li> {li2} </li>
        <hr />
        <li> {li3} </li>
        <hr />
        <li> {li4} </li>
      </ul>
    </div>
  );
};

export default Pagescomp;
