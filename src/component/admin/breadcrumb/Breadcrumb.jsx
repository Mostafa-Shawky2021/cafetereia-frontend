import './breadcrumb.css';
const Breadcrumb = ()=> {
    return (
        <nav aria-label="breadcrumb" className="bread-crumb">
            <ol className="breadcrumb" style={{margin:'0px'}}>
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page"><a href="#">Product</a></li>
            </ol>
        </nav>
    );
}
export default Breadcrumb;