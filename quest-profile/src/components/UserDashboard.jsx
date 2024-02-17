import React from 'react'
import '../App.css'

const UserDashboard = ({user}) => {
    return (
        <div className='rankCard'>
            <div >
                <h3>{user?.points?.data}</h3>
                <p>Points</p>
            </div>
            <div >
                <h3>#{user?.rank?.position}</h3>
                <p>Rank</p>
            </div>
            <div >
                <h3>{user?.points?.tier}</h3>
                <p>Level</p>
            </div>
        </div>
    )
}

export default UserDashboard
