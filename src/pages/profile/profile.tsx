import React from 'react';
import Header from './Header.png';
import customer from './customer.png';
import { ProfileNavBar} from './profileNavBar';
import { NavLink } from "react-router-dom";
import './profile.css';
export const Profile = () => {
    return (
        <>
        <ProfileNavBar />
        <div className="profile">
            <div className="profile__image">
            <img src={Header} />
            <div className="profile__toggle"
             style={{left: '70%'}}> 
                <button
                style={ {backgroundColor: '#fa7268',
                    borderColor: '#fa7268',
                    border: '1px solid #fa7268',
                    color: 'white'}} >
                Favourites
                </button>
                <NavLink className="profile__toggle__edit"
                style={{backgroundColor: 'white',
                borderColor: 'white',
                border: '1px solid white',
                color: '#343434'}} to="/editProfile">
                <i className="fa fa-edit"></i>
                </NavLink>
            </div>
            <div className="profile__logo-view">
                <img src={customer}/>
            </div>
            </div>
            <div className="profile__wrapper row">
            <div className="profile__summary">
                <h1 className="profile__summary__website text-center">
                UserName 
                </h1>
                <p className="profile__summary__handle text-center">@userName.com </p>
                <p className="profile__summary__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
                 dolores eius obcaecati ad ipsa aliquid veniam vel molestiae odit unde labore nulla provident fugit assumenda voluptas,
                 recusandae blanditiis. Voluptates, distinctio.
                </p>
                <div className="profile__summary__links">
                <a className="profile__summary__link">
                    <i className="fa fa-building"></i>
                </a>
                <div className="profile__summary__link">
                    <i className="fa fa-facebook-square"></i>
                </div>
                <div className="profile__summary__link">
                    <i className="fa fa-twitter"></i>
                </div>
                <div className="profile__summary__link">
                    <i className="fa fa-linkedin"></i>
                </div>
                <div className="profile__summary__link">
                    <i className="fa fa-google-plus"></i>
                </div>
                </div>
            </div>
            <div className="profile__content">
                <p>User 1- Form</p>
                <div
                style={ {backgroundColor: '#000'} }
                className="d-flex justify-content-center align-items-center preview"
                >
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
