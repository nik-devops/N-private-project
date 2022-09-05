import React from 'react'
import AdminHeader from '../../Comman/AdminHeader'
import AdminSidebar from '../../Comman/AdminSidebar'
import api from '../../../Comman_Admin/axios'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from "react"
// import "./datatable.css"
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';

export default function AdminChemistTable() {

    const [user, setuser] = useState([])

    let history = useHistory();

    async function adminChemistlist(req, res) {
        try {
            let customToken = sessionStorage.getItem('customToken');
            if (customToken) {
                let headers = {
                    Authorization:
                        "Bearer " + customToken,
                    "Content-Type": "application/json",
                };
                await api.get(`/admin/client/all`, { headers })
                    .then(res => {
                        const tableData = res.data.data;
                        setuser(tableData)
                        console.log('heyyyy________', res.data.data)
                        console.log(tableData)
                    })
            }
        } catch (err) {
            res.status(404).json({ success: false, message: err.message })
        }

    }

    useEffect(() => {
        adminChemistlist()
    }, []);

    function updateChemist(id) {

        console.log('heyy_____put', id);
        history.push(`/admin/editchemist/${id}`);
        // setTimeout(() => {
        //     window.location.reload(true)
        // }, 1000);
    }

    const columns = [
        {
            title: 'Client Name', field: 'full_name'
        },
        {
            title: 'Client Uniquc Id', field: 'unique_id'
        },
        {
            title: ' Maste Name', field: 'master_fullname'
        },
        {
            title: 'Registration Date & Time', field: 'created_at'
        },
        {
            title: 'Wallet', field: 'wallet'
        },
        {
            title: 'Digit Game Rate', field: 'digit_gamerate'
        },
        {
            title: 'Pana Game Rate', field: 'pana_gamerate'
        },
        {
            title: 'Status', field: 'is_active'
        },

    ]

    return (
        <React.Fragment>
            <AdminHeader />
            <div className="main-container" id="container">
                <AdminSidebar />
                <div id="content" className="main-content">
                    <div className="layout-px-spacing layout-spacing layout-top-spacing center">
                        <div className="row layout-spacing">
                            <div className="col-lg-12">
                                <div className="statbox widget box box-shadow">
                                    <div className="widget-content widget-content-area">
                                        <div className="table-responsive mb-4">


                                            <div className="row">
                                                <div className="col-xl-6 col-md-6 col-sm-6 col-6">
                                                    <h4>Chemist List</h4>
                                                </div>

                                                <div className="col-xl-6 col-md-6 col-sm-6 col-6 text-right my-2">
                                                    <a href="/admin/addchemist"><button className="btn btn-primary"> Add Chemist </button></a>
                                                </div>
                                            </div>


                                            <MaterialTable title="Chemist"
                                                data={user}
                                                columns={columns}

                                                actions={[
                                                    {
                                                        icon: 'edit',
                                                        tooltip: 'Edit User',
                                                        onClick: (event, rowData) => updateChemist(rowData._id),

                                                    },
                                                    // {
                                                    //     icon: 'delete',
                                                    //     tooltip: 'Delete User',
                                                    //     onClick: (event, rowData) => deleteuser(rowData._id)

                                                    // },
                                                    // {
                                                    //     icon: 'add',
                                                    //     tooltip: 'Add User',
                                                    //     isFreeAction: true,
                                                    //     onClick: (event, rowData) => adduser(rowData.form)
                                                    // }
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
