import './breadcrumb.css';
const Breadcrumb = ()=> {
    return (
        <nav aria-label="breadcrumb" className="bread-crumb">
            <ol class="breadcrumb" style={{margin:'0px'}}>
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a href="#">Product</a></li>
            </ol>
        </nav>
    );
}
export default Breadcrumb;