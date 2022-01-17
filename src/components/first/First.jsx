import React from 'react'

//icons
import { BsWhatsapp } from "react-icons/bs"
import { FaTelegramPlane } from "react-icons/fa"
import { FiPhoneIncoming } from 'react-icons/fi'

import './first.scss'

const First = () => {
    return (
        <div className='container'>
            <div className="container__2">
                <img src="https://i.ibb.co/VHC0gzJ/THUGLIFE.jpg" alt="pic" />
                <h2>THUG LIFE<span> STORE</span></h2>
                <p>Адрес: ТЦ.Мадина Бутик 5/11 </p>
                <p>Проспект Шабдан Баатыра,4Б</p>
                <div className="btn">
                    <a href="https://api.whatsapp.com/send/?phone=%2B996500236060&text&app_absent=0"><button className='button__1'><BsWhatsapp className='w' size={25} color='#c806b0' />WhatsApp</button></a>
                    <a href="https://t.me/hateyoufuckinggg"><button className='button__2'><FaTelegramPlane className='t' size={30} color='#c806b0' />Telegram</button></a>
                    <a href="tel:+996 (500) 23 60 60 "><button className='button__3'><FiPhoneIncoming className='p' size={25} color='#c806b0' />Phone Number</button></a>
                </div>
            <hr />
            </div>
            <div className="container__3">
            <div className='cards'>
                    <img src="https://i.ibb.co/vJZ3PDy/kj.jpg" alt="pictures" />
                    <p className='name'>Air Jordan 1 High Hyper Royal 2021</p>
                    <div className='cost'>
                    <h3>6 000 сом</h3>
                    </div>
                    
                </div>
            <div className='cards'>
                    <img src="https://i.ibb.co/4FbBb5T/photo-2022-01-09-18-10-20.jpg" alt="pictures" />
                    <p className='name'>Air Jordan 1 High Dark Mocha</p>
                    <div className='cost'>
                    <h3>5 500 сом</h3>
                    </div>
                </div>
                <div className='cards'>
                    <img src="https://i.ibb.co/M15NQst/j-1.jpg" alt="pictures" />
                    <p className='name'>Air Jordan 1 High Travis Scott</p>
                    <div className='cost'>
                    <h3>6 000 сом</h3>
                    </div>
                </div>
                <div className='cards'>
                    <img src="https://i.ibb.co/ZBft19Z/kjh.jpg" alt="pictures" />
                    <p className='name'>Nike SB Dunk Low Travis Scott</p>
                    <div className='cost'>
                    <h3>6 000 сом</h3>
                    </div>
                </div>
                <div className='cards'>
                    <img src="https://i.ibb.co/FmtpTXT/jhg.jpg" alt="pictures" />
                    <p className='name'>Air Jordan 4 Retro University Blue</p>
                    <div className='cost'>
                    <h3>6 500 сом</h3>
                    </div>
                </div>
                <div className='cards'>
                    <img src="https://i.ibb.co/yR7GJt2/photo-2022-01-09-16-00-48.jpg" alt="pictures" />
                    <p className='name'>Dunk Low Nike x Off-White</p>
                    <div className='cost'>
                    <h3>7000 сом</h3>
                    </div>
                </div>
                <div className='cards'>
                    <img src="https://i.ibb.co/6bqYCSM/photo-2022-01-09-16-00-52.jpg" alt="pictures" />
                    <p className='name'>Converse Play Comme Des Garcons</p>
                    <div className='cost'>
                    <h3>5000 сом</h3>
                    </div>
                </div>
                <div className='cards'>
                    <img src="https://i.ibb.co/BCRj2kP/photo-2022-01-09-16-00-56.jpg" alt="pictures" />
                    <p className='name'>Converse X Kim Jones (White)</p>
                    <div className='cost'>
                    <h3>5 800 сом</h3>
                    </div>
                </div>
                <div className='cards'>
                    <img src="https://i.ibb.co/3kf0y0H/n.jpg" alt="pictures" />
                    <p className='name'>Air Jordan 4 Retro (Beige)</p>
                    <div className='cost'>
                    <h3>6 500 сом</h3>
                    </div>
                </div>
                <div className='cards'>
                    <img src="https://i.ibb.co/x8GxnX6/photo-2022-01-09-16-01-05.jpg" alt="pictures" />
                    <p className='name'>Nike SB Dunk Low Grateful (Dead Green)</p>
                    <div className='cost'>
                    <h3>6 200 сом</h3>
                    </div>
                </div>
                <div className='cards'>
                    <img src="https://i.ibb.co/n6XRQTn/photo-2022-01-09-16-01-09.jpg" alt="pictures" />
                    <p className='name'>Air Jordan 1 High Hyper Royal 2021</p>
                    <div className='cost'>
                    <h3>5 500 сом</h3>
                    </div>
                </div>
                <div className='cards'>
                    <img src="https://i.ibb.co/L6v1TdK/photo-2022-01-09-16-01-13.jpg" alt="pictures" />
                    <p className='name'>Blazer Low X Sacai</p>
                    <div className='costs'>
                    <h3>7 500 сом</h3>
                    </div>
                </div>
                <div className='cards'>
                    <img src="https://i.ibb.co/NjpKWrg/photo-2022-01-09-16-01-19.jpg" alt="pictures" />
                    <p className='name'>Vans X GolfWang (Green)</p>
                    <div className='cost'>
                    <h3> 5 400 сом</h3>
                    </div>
                </div>
                <div className='cards'>
                    <img src="https://i.ibb.co/34xknBD/photo-2022-01-09-16-01-29.jpg" alt="pictures" />
                    <p className='name'>Converse X Kim jones (Black)</p>
                    <div className='cost'>
                    <h3>5 800 сом</h3>
                    </div>
                </div>
                <div className='cards'>
                    <img src="https://i.ibb.co/tBQ4KqX/photo-2022-01-09-16-01-39.jpg" alt="pictures" />
                    <p className='name'>Converse X Off White</p>
                    <div className='costs'>
                    <h3>4 700 сом</h3>
                    </div>
                </div>
                <div className='cards'>
                    <img src="https://i.ibb.co/nwFjW89/1.jpg" alt="pictures" />
                    <p className='name'>Nike SB Dunk Low «Chunky Dunky»</p>
                    <div className='cost'>
                    <h3>7 500 сом</h3>
                    </div>
                </div>
                <div className='cards'>
                    <img src="https://i.ibb.co/tsJmKX3/photo-2022-01-09-16-01-34-2.jpg" alt="pictures" />
                    <p className='name'>Air Jordan 1 High Hyper Royal 2021</p>
                    <div className='cost'>
                    <h3>6 000 сом</h3>
                    </div>
                </div>
                <div className='cardser'>
                    <img src="https://i.ibb.co/3cZmY23/photo-2022-01-09-16-01-24.jpg" alt="pictures" />
                    <p className='name'>Vans X GolfWang (Blue)</p>
                    <div className='cost'>
                    <h3>5 400 сом</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default First
