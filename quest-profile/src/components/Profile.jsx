import React, { Suspense, lazy, useEffect, useState } from 'react'

import '../App.css'
import BadgesCard from './BadgesCard'
import { getUser, getUserBadges, getUserPointHistoy, getUserPoints, getUserRank } from '../actions/actions';
import { Modal } from './Modal';
import ManuBars from './ManuBars';

const UserDashboard = lazy(() => import('./UserDashboard'));

const dummyImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KehqXBrMLd32HsfjDoaq098WeNA0b3g_2A&usqp=CAU";

const Profile = () => {
    const [user, setUser] = useState({});
    const [modalObject , setModaleObj] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (badgeId)=> {
        const obj = user.badges.filter((item)=> item.badgeId === badgeId )
        setModaleObj(obj[0])
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const fetchData = async () => {
        try {
            const userResponse = await getUser();
            setUser(curr => ({...curr, user:userResponse }));

            const pointsResponse = await getUserPoints();
            setUser(curr => ({...curr, points:pointsResponse }));

            const rankResponse = await getUserRank();
            setUser(curr => ({...curr, rank:rankResponse }));

            const badges = await getUserBadges();
            setUser(curr => ({...curr, badges:badges }));

            const pointsHistory = await getUserPointHistoy();
            setUser(curr => ({...curr, pointHistory: pointsHistory}));

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    console.log(user, "user")
    return (
    <>
        <div className='section'>
            <div className='container'>
                <div className='headerSection'>
                    <div className='prevBTN'>
                        <div className='leftArrow'></div>
                    </div>
                    <h1 className='profileText'>Profile</h1>
                </div>
            </div>
            <div className='container'>
                <div className='profile_container'>
                    <div className='profile_photo'>
                        <img src={user.user?.imageUrl !== undefined ? user.user?.imageUrl : dummyImage} alt='ser-Photo' />
                    </div>
                    <h1 className='nameText'>{user.user?.name}</h1>

                    <Suspense fallback={<div>Loading....</div>}>
                        {user && <UserDashboard user={user}/>}
                    </Suspense>

                    <div className='slideBars'>
                        <h4>Membership</h4>
                        <h4>Badges</h4>
                        <h4>Point History</h4>
                    </div>
                    <div className='badgesCard'>
                        {user?.badges?.map((item) => {
                            return <BadgesCard key={item.badgeId} {...item} openModal={openModal} />
                        })}
                    </div>
                </div>
            </div>
            <ManuBars/>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
               <div className='modalCard'>
                 <img src={modalObject.imageUrl} alt='Badges-image'/>
                 <h4>{modalObject.name}! ✨</h4>
                 <p>🎉 {modalObject.description} 🥇✨</p>
               </div>
            </Modal>

        </div>
    </>)
}

export default Profile
