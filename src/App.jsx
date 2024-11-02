import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { IoHome } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { PiDotsThreeOutlineVerticalFill as SlOptions } from "react-icons/pi";
import { FcLike } from "react-icons/fc";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import videoFile from "./assets/project.mp4";
import mkpost from"./assets/mkpost.jpeg"

// Nav component
function Nav() {
  return (
    <div className="main-div">
      <div className="nav">
        <div className="logo">
          <img
            src="https://img.icons8.com/?size=512&id=118497&format=png"
            alt=""
            className="fb-logo"
          />
        </div>
        <div className="menu">
          <IoHome />
          <FaUserGroup />
          <IoNotifications />
          <MdOndemandVideo />
        </div>
        <div className="navProfile">
          <img
            src="https://scontent.fkhi6-2.fna.fbcdn.net/v/t39.30808-6/352562397_792818745966368_2035257427470383808_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFSZ_joFb0CvbgyjLpHoOhBhlBszkfC-SiGUGzOR8L5KNTaHfbYqxT6WMb4v_HsF2fc8_tisyVpiwqw-NIjnj8B&_nc_ohc=JKDQUWTSD4MQ7kNvgECEFpV&_nc_zt=23&_nc_ht=scontent.fkhi6-2.fna&_nc_gid=ARUmRAS_Rt5dGmuNL2MlVuI&oh=00_AYCwnVnTXXYJZ8n_sN-02ok13Tz-Ph_M4Hlq6R1NzcGEWg&oe=6729205D"
            className="fb-login"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}

// Post component
function Post(props) {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
          <img src={props.profilePhoto} alt="User" className="dp" />
          <div>
            <h3>{props.name}</h3>
            <span>{props.time}</span>
          </div>
        </div>
        <SlOptions />
      </div>

      <p>{props.caption}</p>

      {props.postImage && (
        <img src={props.postImage} alt="Post" className="post-photo" />
      )}

      {props.postVideo && (
        <video src={props.postVideo} height={250} width={400} muted autoPlay controls loop></video>
      )}
      
      {/* Like details section */}
      {props.likedetail && (
        <span className="like-detail">{props.likedetail}</span>
      )}

      <div className="likeCheck">
        <div>
          <FcLike />
          <span>Like</span>
        </div>
        <div>
          <BiCommentDetail />
          <span>Comment</span>
        </div>
        <div>
          <IoMdShareAlt />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <div>
      <Nav />
      <Post
        profilePhoto="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/248294413_374983714416542_1768915347268827273_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHXwteCIZbeVlmFGO8sj-9X2OvheVRfLp7Y6-F5VF8untLXJv1ks5EudjFCBwziARfcmfk4S6JOXuCG-fzs4pHq&_nc_ohc=Ql14ryvswxcQ7kNvgFi5l69&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=A-zKmqc2PgmR3Ij3HRTGbnR&oh=00_AYDZqvDzw8DwbXTxCgnnVE1lFOGAf9n5ovGWhUdpO5VtjA&oe=672B41FD"
        name="Muhammad Kabeer"
        time="1 min ago"
        caption="🚀 Excited to Share My Latest Project! 🚀
I've just completed a sleek and professional e-commerce website using HTML, CSS, and Bootstrap. 🌟 The design focuses on user experience and modern aesthetics to provide a seamless shopping experience.
Check out the video to see how I brought this project to life!"
        postVideo={videoFile}
        likedetail="❤️🥰👍 Shahnoor saad Husssain and 580K"
      />
      <Post
        profilePhoto="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/461392854_1037869347780696_6629259436493413866_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGF1TQbYJv3walds7ct0hyUxLPwUNYlWYnEs_BQ1iVZiZZ1ZTAj0d9ou1AD-Ev_3gboBw-HpnmcteRqRiT88-gm&_nc_ohc=fbjaLngeCZ4Q7kNvgFd8ifW&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=An7X-lirq02U0qoHVZG4wUD&oh=00_AYBO0F1ztwudDkn-LvuYjjRz5Y-_c6nscKNlz_LiSMUAiw&oe=672B4069"
        name="Saim Sheikh"
        time="6 min ago"
        caption="😎🥰"
        postImage="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/456381251_1011807977053500_3459334242445347298_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGxiSkoKApiiA0LPqNQYyn56v7h1eefrlXq_uHV55-uVTIXVI4zEgx60-LL-TQx541AVgTI327hH-huTUtq2XM-&_nc_ohc=krevVAFtOpoQ7kNvgGLVymT&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=AB3B09pj5Hmp42uRmDjRNX4&oh=00_AYACE6tWODgZBthiwtAEgN0XsLL7JIP4p-hnKsIrD7DhnA&oe=672B3732"
        likedetail="❤️🥰👍 Osama Hamza and 50K"
      />
       <Post
        profilePhoto="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/248294413_374983714416542_1768915347268827273_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHXwteCIZbeVlmFGO8sj-9X2OvheVRfLp7Y6-F5VF8untLXJv1ks5EudjFCBwziARfcmfk4S6JOXuCG-fzs4pHq&_nc_ohc=Ql14ryvswxcQ7kNvgFi5l69&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=A-zKmqc2PgmR3Ij3HRTGbnR&oh=00_AYDZqvDzw8DwbXTxCgnnVE1lFOGAf9n5ovGWhUdpO5VtjA&oe=672B41FD"
        name="Muhammad Kabeer"
        time="59 min ago"
        caption="😎🖤"
        postImage={mkpost}
        likedetail="❤️🥰👍 Shahnoor saad Husssain and 580K"
      />
       <Post
        profilePhoto="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/460735484_2121977444863899_5034272251697661116_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGBsEoYVMqEXI5PNUsq-Cy5h0qIgCekD22HSoiAJ6QPbaBwml2kFo1rO4cahte16B4dGBLPRl9LsbDkg2a8YVHG&_nc_ohc=YkJAw4HN8kwQ7kNvgEBhU2A&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=AqKCvjUBk95i_8-DCr-gz_A&oh=00_AYDZ0kKTc01Y9eRu6Zq8ohFYJpOovt4z5rwbvKvn2etVKg&oe=672B75B3"
        name="Muzaif Siddiqui "
        time="55 min ago"
        caption="😎🖤"
        postImage="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/458544250_2111873752540935_452448122552786895_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGUTg0Gy4pfxHWOoJU5aUwDy6GvpQnaGVXLoa-lCdoZVcGy10cm0ih0tD_PUOuunIlcbDE_BKYlqEarUxnCZ3OE&_nc_ohc=CmtUJQBYy1MQ7kNvgHKLdb2&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=A23ptB7UYY8Ls4sW0O-kxYx&oh=00_AYBnbQrKaygrSHKJEX91IlK1eULmqL5lxhfKGGWZfbO1Ag&oe=672B7737"
        likedetail="❤️🥰👍 asad muzaif and 50K"
      />
           <Post
        profilePhoto="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/272052483_111880381385250_1791247054661950973_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFhB58tvk6JZ6xHUEIg6l9I54nwt-0QqernifC37RCp6gOcCP4b3id1Muc9BH9VRJAhJBTWINF27yPFh1-wzJZO&_nc_ohc=KaHnSsmog5kQ7kNvgE5-2OS&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=A3k_K_-WJ1J4cG07fMGd_Lc&oh=00_AYA82PjU0kNMRAG_Aa-Wt0mhLyLi83Nd1RoqRuV3H-ls1w&oe=672B6405"
        name="Hina Sheikh "
        time="35 min ago"
        caption="Ami : insan banjao 
        Iqbal : Shaheen banjao
        She : sirf mere banjao 
        Teacher : murgha banjao
        Phuppo :damad banjao"
        postImage=""
        likedetail="❤️🥰👍 asad muzaif and 50K"
      />
          <Post
        profilePhoto="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/445176021_782681297178590_3316019349458386176_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHRitquW1Y2SbVkfn3YMzTQ2rpIcT7NI9_aukhxPs0j39YSn7E_pe7yZFLoEHgp55-kAdMm3N3tTOJosHOHJOOu&_nc_ohc=zGA2Wryyp50Q7kNvgEDveDe&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=Am0ijThxCq9o9lasgCDd4hY&oh=00_AYCqqs5fNmEQVxDUWEeMcqKNqm_wPoq0-hcPGGDAE_2vYg&oe=672B7E67"
        name="D'lewix Riaz  "
        time="35 min ago"
        caption="❤️🥰"
        postImage="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/410228250_691774626269258_4555412697184538295_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHYjanFoxN8BVUpupWYK2GheaP2QfxN8xx5o_ZB_E3zHDO0lfFS1hQZdKoTYFO6Aa0Pc7lzKt_7tI6qf3j0lVjx&_nc_ohc=qLV-IT0BBCcQ7kNvgHC1vDg&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=AEMzqGQk4zvB6MH1ywM-2Wi&oh=00_AYAhg-m236miVSfcvUELwxtsHhcBP-vyphbVH48AUgTk2w&oe=672B8DFB"
        likedetail="❤️🥰👍 asad muzaif and 50K"
      />
    </div>
  );
}

export default App;


