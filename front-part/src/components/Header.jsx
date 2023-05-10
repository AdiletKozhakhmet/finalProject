import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { HiArrowsExpand } from 'react-icons/hi';
import { IoMdMail } from 'react-icons/io';
import { AiFillBell } from 'react-icons/ai';
import { IoIosKeypad } from 'react-icons/io';
import './Header.css'

const Header = () => {
  return (
    <div className='header__bg'>
        <div className='header__left__bg'>
          <BsTwitter style={{fill: '#1da0fa', width: 30, height: 30}} />
          <input type='text' placeholder='# Explore'/>
        </div>
        <div className='header__right__bg'>
          <nav className='nav__bar'>
            <button className='home__btn'>
              <AiFillHome style={{fill: '#19a0fa', width: 22, height: 22}}/>
              Home
            </button>
            <button className='btn__bg'>
              <HiArrowsExpand style={{fill: '#fff', width: 20, height: 20}}/>
            </button>
            <button className='btn__bg'>
              <IoMdMail style={{fill: '#fff', width: 20, height: 20}}/>
            </button>
            <button className='btn__bg'>
              <AiFillBell style={{fill: '#fff', width: 20, height: 20}}/>
            </button>
          </nav>
          <div className='header__rightright__bg'>
            <select name="" id="">
              <option value="">Kozhakhmet A</option>
              <option value="">Saparbek E</option>
            </select>
            <button>
              <IoIosKeypad />
            </button>
          </div>
        </div>

    </div>
  )
}

export default Header