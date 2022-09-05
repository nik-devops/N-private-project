import React from 'react'
import AdminHeader from '../../Comman/AdminHeader'
import AdminSidebar from '../../Comman/AdminSidebar'
import api from '../../../Comman_Admin/axios'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from "react"
import moment from 'moment';
import $ from 'jquery'


import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';

import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiPaper-root": {
            borderRadius: "0px",
            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0);"
        }
    }
}));



// window.jquery = window.$ = $


export default function AdminMRTable() {
    const [user, setuser] = useState([])

    let history = useHistory();

    async function adminMrlist(req, res) {
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
        adminMrlist()
    }, []);

    function updateMR(id) {

        console.log('heyy_____put', id);
        history.push(`/admin/editmr/${id}`);
        // setTimeout(() => {
        //     window.location.reload(true)
        // }, 1000);
    }





    // function AddWallet(id) {

    //     console.log('heyy__add Wallet')
    //     history.push(`/admin/client/addwallet/${id}`, id);
    //     // setTimeout(() => {
    //     //     window.location.reload(true)
    //     // }, 1000);
    // }

    // function clientView(id) {

    //     console.log('heyy__add Wallet')
    //     history.push(`/admin/clientview/${id}`, id);
    //     // setTimeout(() => {
    //     //     window.location.reload(true)
    //     // }, 1000);
    // }

    const classes = useStyles();
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
            title: 'Status', field: 'is_active',
            // String(field.is_active) === "true" ?
            // <button className="btn btn-success status">
            //     Active
            // </button> : <button className="btn btn-danger">
            //     InActive
            // </button>

        }

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
                                                    <h4>MR List</h4>
                                                </div>

                                                <div className="col-xl-6 col-md-6 col-sm-6 col-6 text-right my-2">
                                                    <a href="/admin/addmr"><button className="btn btn-primary"> Add MR </button></a>
                                                </div>
                                            </div>

                                            <div className={classes.root}>
                                                <MaterialTable
                                                    title=""
                                                    data={user}
                                                    columns={columns}

                                                    actions={[
                                                        {
                                                            icon: 'edit',
                                                            tooltip: 'Edit User',
                                                            onClick: (event, rowData) => updateMR(rowData._id),

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



            </div>
        </React.Fragment>
    )

}
