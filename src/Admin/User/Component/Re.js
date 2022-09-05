import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import api from '../../../Comman_Admin/axios';

function Table() {

    const [user, setuser] = useState([])

    let history = useHistory();
    async function adminclientlist(req, res) {
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
        adminclientlist()
    }, []);




    function deleteuser(_id) {
        let token = localStorage.getItem('token')
        console.log(_id);
        api.delete(`http://localhost:8009/${_id}`, { headers: { 'x-access-token': token } })
            .then((result) => {
                console.log("result.data", result.data);

            })

    }
    function adduser() {

        console.log('hey______add');
        history.push('/add')

    }
    function updateuser(_id) {

        console.log('heyy_____put', _id);
        history.push(`${_id}`);

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
            title: 'Registration Date & Time', field: 'username'
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

        <div>

            <MaterialTable title=" Material Table"
                data={user}
                columns={columns}

                actions={[
                    {

                        icon: 'edit',
                        tooltip: 'Edit User',
                        onClick: (event, rowData) => updateuser(rowData._id),

                    },


                    {
                        icon: 'delete',
                        tooltip: 'Delete User',
                        onClick: (event, rowData) => deleteuser(rowData._id)

                    },
                    {
                        icon: 'add',
                        tooltip: 'Add User',
                        isFreeAction: true,
                        onClick: (event, rowData) => adduser(rowData.form)
                    }
                ]}
            />



        </div>
    )
}





export default Table