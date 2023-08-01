import Header from "../components/Header";
import Sidebar from "./Sidebar";

function DefaultLayout( {children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <nav className="Sidebar">
                    <Sidebar />
                </nav>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;