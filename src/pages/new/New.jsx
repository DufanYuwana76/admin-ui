import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/datatable/Datatable";

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
        <h1 className="title">New</h1>
        </div>
        <div className="bottom">
            <div className="left">
                <div className="item">
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/10158234d83f558f93dd27b3ceecdc93~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1714647600&x-signature=tnTI8szzIuDFH4otJQYrhOPXHZc%3D"
                    alt=""
                    className="itemImg"/>
                </div>
            </div>
            <div className="right">
                <List/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default New;