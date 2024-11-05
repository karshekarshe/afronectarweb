import '../App.css'
import React, {useEffect, useState} from "react";
import {AnnouncementService} from "../utils/AnnouncementService";


export default  function AnnouncementBannier(){
    const [announcements, setAnnouncements] = useState(['No announcement made yet! Happy Shopping.','For new user get 10% OFF'])

    useEffect(() => {
        AnnouncementService
            .fetchLatestAnnouncements()
            .then((data) => {
                if (data){
                    setAnnouncements(data)
                }
            })
    }, []);



    return (
        <div className='py-1 px-2 bg-black overflow-hidden w-full relative'>
            {announcements.map((message, index) => {
                return (<p key={index} className={`scrolling-text inline-flex text-xs md:text-sm font-light text-white`}>{message}</p>)
            })}
        </div>
    )
}
