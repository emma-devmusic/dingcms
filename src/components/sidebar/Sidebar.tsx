import { Icon } from '@iconify/react';
import './sidebar.css';


export const Sidebar = () => {



    return (
        <div className="d-flex flex-column h-100" style={{ width: "4.5rem" }}>
            <div className='d-flex flex-column h-100'>

                <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
                    <Icon icon="mdi-light:home" className='fs-3' />
                    <span className="visually-hidden">Icon-only</span>
                </a>
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                    <li className="nav-item">
                        <a href="#" className="nav-link active py-3 border-bottom" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
                            <Icon icon="mdi-light:home" className='fs-3' />
                        </a>
                    </li>
                    {/* <li>
                    <a href="#" className="nav-link py-3 border-bottom" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
                    <Icon icon="mdi-light:home" className='fs-3' />
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
                    <Icon icon="mdi-light:home" className='fs-3' />
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom" title="Products" data-bs-toggle="tooltip" data-bs-placement="right">
                    <Icon icon="mdi-light:home" className='fs-3' />
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom" title="Customers" data-bs-toggle="tooltip" data-bs-placement="right">
                        <Icon icon="mdi-light:home" className='fs-3' />
                        </a>
                        </li> */}
                </ul>
            </div>
            <div className="dropdown border-top">
                <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle" />
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>

    );
};
