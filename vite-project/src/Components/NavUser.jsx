import React, { useContext, useEffect } from 'react'
import { FolderOutlined, AudioMutedOutlined, DeleteOutlined, InboxOutlined, InfoCircleFilled, SettingTwoTone } from '@ant-design/icons'
import { UserContext } from '../Context/UserContext'
import SearchWord from '../Widgets.jsx/Nav/SearchWord'
import Call from '../Widgets.jsx/Nav/Call'
import Video from '../Widgets.jsx/Nav/Video'
import OptionBtn from '../Widgets.jsx/OptionBtn'
import InfoUser from './InfoUser'

export default function NavUser() {
    const { user } = useContext(UserContext)

    const items = [
        {
            key: 1,
            label: 'Archive',
            icon: <FolderOutlined />
        },
        {
            key: 2,
            label: 'Muted',
            icon: <AudioMutedOutlined />
        },
        {
            key: 3,
            label: 'Delete',
            icon: <DeleteOutlined />
        }
    ]

    const { openInfo, setOpenInfo } = useContext(UserContext)


    useEffect(() => {
        console.log("user", user);
    }, [user])


    return (
        <>
            <div id='bar-user' className='bar-user' style={{ display: 'grid', gridTemplateColumns: openInfo ? "1fr 1fr 1.5fr" : "1fr 1fr" }}>
                <div className='dicussions-profil-user'>
                    <img src={user?.picture?.large} />
                    <div className='name-status'>
                        <h4>{user?.name?.last}</h4>
                        <p>Online</p>
                    </div>
                </div>
                <div className='dicussions-profil-nav'>
                    <ul>
                        <li><SearchWord /></li>
                        <li><Call  /></li>
                        <li><Video /></li>
                        <li><InboxOutlined style={{ fontSize: 18, color: 'grey' }} /></li>
                        <li ><InfoCircleFilled onClick={() => setOpenInfo(!openInfo)} style={{ fontSize: 18, color: 'grey' }} /></li>
                        <li><OptionBtn items={items} color={"grey"} /></li>
                        <li><SettingTwoTone spin="true" twoToneColor="green" style={{ fontSize: 18 }} /></li>
                    </ul>
                </div>
                {openInfo ? <InfoUser user={user} /> : null}
            </div>
        </>
    )
}