import Map1 from "./Map1";
import Map2 from "./Map2";

export default function IframeTabs() {
  return (
    <>
      <ul className="nav nav-tabs justify-content-center mt-4" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="tab1-tab"
            data-bs-toggle="tab"
            data-bs-target="#tab1"
            type="button"
            role="tab"
          >
            Corporate Office
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="tab2-tab"
            data-bs-toggle="tab"
            data-bs-target="#tab2"
            type="button"
            role="tab"
          >
            Factory
          </button>
        </li>
      </ul>

      <div className="tab-content mt-3" id="myTabContent">
        <div className="tab-pane fade show active" id="tab1" role="tabpanel">
          <Map1/>
        </div>

        <div className="tab-pane fade" id="tab2" role="tabpanel">
         <Map2/>
        </div>
      </div>
    </>
  );
}
