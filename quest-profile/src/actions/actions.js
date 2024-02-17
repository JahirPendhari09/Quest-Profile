import axios from "axios"

// i hardcore the headers info because we don't have login and signup functionality
const headers = {
    'userid': 'u-a2399489-9cd0-4c94-ad12-568379202b08',
    'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc',
    'apikey': 'k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be',
    'entityId': 'e-0000000000'
  };

// get User
export  const getUser = ()=>{
    return (
        axios.get(`https://staging.questprotocol.xyz/api/users/${headers.userid}`,{headers})
        .then(res => res.data.data)
        .catch(err => console.log(err))
    )
}

// get User Points
export  const getUserPoints = ()=>{
    return (
        axios.get(`https://staging.questprotocol.xyz/api/entities/${headers.entityId}/users/${headers.userid}/xp`,{headers})
        .then(res => res.data)
        .catch(err => console.log(err))
    )
}

// Get User Rank
export  const getUserRank = ()=>{
    return (
        axios.get(`https://staging.questprotocol.xyz/api/entities/${headers.entityId}/users/${headers.userid}/xp-leaderboard-rank`,{headers})
        .then(res => res.data.data)
        .catch(err => console.log(err))
    )
}

// Get User Badges
export  const getUserBadges = ()=>{
    return (
        axios.get(`https://staging.questprotocol.xyz/api/entities/${headers.entityId}/users/${headers.userid}/badges`,{headers})
        .then(res => res.data.data)
        .catch(err => console.log(err))
    )
}

// Get User Points History
export  const getUserPointHistoy = ()=>{
    return (
        axios.get(`https://staging.questprotocol.xyz/api/entities/${headers.entityId}/users/${headers.userid}/xp-history`,{headers})
        .then(res => res.data.data)
        .catch(err => console.log(err))
    )
}