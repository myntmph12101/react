import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { isAuthenticate } from '../auth'

const UserDashboard = () => {
    const { user } = isAuthenticate();


    return (
        <div>
           
            <h3>Hello userDashboard</h3>
            <div className="row">
                <div className="col-4 ">
                    <div className="card">
                        <div className="card-header">Thanh toán</div>
                        <ul className="list-group">
                            <li className="list-group-item"><Link>Giỏ hàng</Link></li>
                            <li className="list-group-item"><Link>Thông tin</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card-header">Thông tin user</div>
                        <ul className="list-group">
                            <li className="list-group-item">Name : {user.name}</li>
                            <li className="list-group-item">Email : {user.email}</li>
                            <li className="list-group-item">{user.role == 1 ? 'Hello Admin' : ' Hello user '}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserDashboard
