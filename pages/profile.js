import React, { useState, useEffect } from 'react';

export default function Profile() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
        // setData({name: "111", bio: 222})
      setLoading(true)
      fetch('http://127.0.0.1:8000/api/profile/')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
  
    return (
      <div>
        <h1>{data.username}</h1>
        <p>{data.email}</p>
      </div>
    )
  }