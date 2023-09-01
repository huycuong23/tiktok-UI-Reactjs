import Header from "../components/Header";

function HeaderOnly( {children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                {children}
            </div>
        </div>
     );
}

export default HeaderOnly;