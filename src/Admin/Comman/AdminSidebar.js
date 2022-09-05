import React from 'react'

export default function AdminSidebar() {
    return (
        <React.Fragment>
            <div className="overlay" />
            <div className="search-overlay" />
            <div className="sidebar-wrapper sidebar-theme">
                <nav id="sidebar">
                    <div className="shadow-bottom" />
                    <ul className="list-unstyled menu-categories" id="accordionExample">
                        <li className="menu">
                            <a
                                href="/admin/dashboard"
                                data-active="true"
                                aria-expanded="true"
                                className="dropdown-toggle"
                            >
                                <div className="" >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-home"
                                    >
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                        <polyline points="9 22 9 12 15 12 15 22" />
                                    </svg>
                                    <span>Dashboard</span>
                                </div>
                                {/* <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-chevron-right"
                                        >
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </div> */}
                            </a>
                            {/* <ul
                                    className="collapse submenu list-unstyled show"
                                    id="dashboard"
                                    data-parent="#accordionExample"
                                >
                                    <li className="active">
                                        <a href="/admin/dashboard"> Admin-Dashboard </a>
                                    </li>

                                </ul> */}
                        </li>
                        <li className="menu">
                            <a
                                href="/admin/mr"
                                // data-toggle="collapse"
                                aria-expanded="false"
                                className="dropdown-toggle"
                            >
                                <div className="">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-cpu"
                                    >
                                        <rect x={4} y={4} width={16} height={16} rx={2} ry={2} />
                                        <rect x={9} y={9} width={6} height={6} />
                                        <line x1={9} y1={1} x2={9} y2={4} />
                                        <line x1={15} y1={1} x2={15} y2={4} />
                                        <line x1={9} y1={20} x2={9} y2={23} />
                                        <line x1={15} y1={20} x2={15} y2={23} />
                                        <line x1={20} y1={9} x2={23} y2={9} />
                                        <line x1={20} y1={14} x2={23} y2={14} />
                                        <line x1={1} y1={9} x2={4} y2={9} />
                                        <line x1={1} y1={14} x2={4} y2={14} />
                                    </svg>
                                    <span>MR</span>
                                </div>
                                {/* <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-chevron-right"
                                        >
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </div> */}
                            </a>
                            {/* <ul
                                    className="collapse submenu list-unstyled"
                                    id="app"
                                    data-parent="#accordionExample"
                                >
                                    <li>
                                        <a href="/admin/master"> Master List </a>
                                    </li>

                                </ul> */}
                        </li>
                        <li className="menu">
                            <a
                                href="/admin/chemist"
                                // data-toggle="collapse"
                                aria-expanded="false"
                                className="dropdown-toggle"
                            >
                                <div className="" >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-box"
                                    >
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                        <line x1={12} y1="22.08" x2={12} y2={12} />
                                    </svg>
                                    <span>Chemist</span>
                                </div>

                            </a>

                        </li>
                        <li className="menu">
                            <a
                                href="/admin/specialist"
                                // data-toggle="collapse"
                                aria-expanded="false"
                                className="dropdown-toggle"
                            >
                                <div className="">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-zap"
                                    >
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                    </svg>
                                    <span>Specialist</span>
                                </div>

                            </a>

                        </li>

                        {/* <li className="menu">
                            <a
                                href="#datatables"
                                data-toggle="collapse"
                                aria-expanded="false"
                                className="dropdown-toggle"
                            >
                                <div className="">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-target"
                                    >
                                        <circle cx={12} cy={12} r={10} />
                                        <circle cx={12} cy={12} r={6} />
                                        <circle cx={12} cy={12} r={2} />
                                    </svg>
                                    <span>Reports</span>
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-chevron-right"
                                    >
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </div>
                            </a>
                            <ul
                                className="collapse submenu list-unstyled"
                                id="datatables"
                                data-parent="#accordionExample"
                            >
                                <li>
                                    <a href="/admin/report">Game History</a>
                                </li>
                                <li>
                                    <a href="/admin/commitionreport">Commission</a>
                                </li>

                            </ul>
                        </li> */}

                        {/* <li className="menu">
                            <a
                                href="/admin/resultDeclar"
                                // data-toggle="collapse"
                                aria-expanded="false"
                                className="dropdown-toggle"
                            >
                                <div className="">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-file"
                                    >
                                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                                        <polyline points="13 2 13 9 20 9" />
                                    </svg>
                                    <span>Result</span>
                                </div>
                                <div>

                                </div>
                            </a>
                        </li> */}

                    </ul>
                </nav>
            </div>
        </React.Fragment>

    )
}
