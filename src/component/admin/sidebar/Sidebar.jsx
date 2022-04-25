import React from 'react';

const Sidebar = ({children}) => {
    return (
        // <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
        //     <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        //         {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
        //         <span className="fs-4">Sidebar</span>
        //     </a>
        //     <div className='row justify-content-start'>
        //         <h3 className='col-6'>Categories</h3>
        //         <div className='col-6'>
        //             {children}
        //         </div>
        //     </div>
            
        //     <hr />
        //     <ul className="nav nav-pills flex-column mb-auto text-center">
        //     <li className="nav-item">
        //         <a href="#" className="nav-link active" aria-current="page">
        //         {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg> */}
        //         Home
        //         </a>
        //     </li>
        //     <li>
        //         <a href="#" className="nav-link text-white">
        //         {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg> */}
        //         Dashboard
        //         </a>
        //     </li>
        //     <li>
        //         <a href="#" className="nav-link text-white">
        //         {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg> */}
        //         Orders
        //         </a>
        //     </li>
        //     <li>
        //         <a href="#" className="nav-link text-white">
        //         {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg> */}
        //         Products
        //         </a>
        //     </li>
        //     <li>
        //         <a href="#" className="nav-link text-white">
        //         {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg> */}
        //         Customers
        //         </a>
        //     </li>
        //     </ul>
        //     <hr />
        //     <div className="dropdown">
        //     <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        //         <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        //         <strong>mdo</strong>
        //     </a>
        //     <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        //         <li><a className="dropdown-item" href="#">New project...</a></li>
        //         <li><a className="dropdown-item" href="#">Settings</a></li>
        //         <li><a className="dropdown-item" href="#">Profile</a></li>
        //         <li><hr className="dropdown-divider" /></li>
        //         <li><a className="dropdown-item" href="#">Sign out</a></li>
        //     </ul>
        //     </div>
        // </div>
        <div className="d-flex flex-column flex-shrink-0 bg-light" style={{width: "4.5rem"}}>
    <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
      {/* <svg class="bi" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
      <span class="visually-hidden">Icon-only</span>
    </a>
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        <a href="#" className="nav-link active py-3 border-bottom" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
          {/* <svg class="bi" width="24" height="24" role="img" aria-label="Home"><use xlink:href="#home"/></svg> */}
        </a>
      </li>
      <li>
        <a href="#" className="nav-link py-3 border-bottom" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
          {/* <svg class="bi" width="24" height="24" role="img" aria-label="Dashboard"><use xlink:href="#speedometer2"/></svg> */}
        </a>
      </li>
      <li>
        <a href="#" className="nav-link py-3 border-bottom" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
          {/* <svg class="bi" width="24" height="24" role="img" aria-label="Orders"><use xlink:href="#table"/></svg> */}
        </a>
      </li>
      <li>
        <a href="#" className="nav-link py-3 border-bottom" title="Products" data-bs-toggle="tooltip" data-bs-placement="right">
          {/* <svg class="bi" width="24" height="24" role="img" aria-label="Products"><use xlink:href="#grid"/></svg> */}
        </a>
      </li>
      <li>
        <a href="#" className="nav-link py-3 border-bottom" title="Customers" data-bs-toggle="tooltip" data-bs-placement="right">
          {/* <svg className="bi" width="24" height="24" role="img" aria-label="Customers"><use xlink:href="#people-circle"/></svg> */}
        </a>
      </li>
    </ul>
    <div className="dropdown border-top">
      <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle" />
      </a>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    );
}

export default Sidebar;
