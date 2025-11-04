
interface ListProps {
  title?: string; // optional prop
}

const OrganizationList = ({ title }: ListProps) => {
  return (
    <div className="job-details-right">
      <div className="job-list-1 shadow">
        <div className="list-company pb-2 border-0 d-flex align-items-center justify-content-between" >
          {/* <img src="images/slider/slider-1.png" alt="" /> */}
          <h5 className="capitalize font-semibold">{title}</h5>
          <div className="job-apply d-flex align-items-center justify-content-center">
            <a className="text-decoration-none" href="">Join Now</a>
          </div>
        </div>
        <div className="job-list-name d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column align-items-start justify-content-start">
            <p className="text-left">Dramatically envisioneer interactive leadership through functionalized ROI.
              Professionally simplify synergistic initiatives before effective channels.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}


export default OrganizationList;
