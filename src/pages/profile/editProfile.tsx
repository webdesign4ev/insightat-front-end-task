import React from 'react';
import Header from './Header.png';
import {NavLink} from 'react-router-dom';
import { ProfileNavBar} from './profileNavBar';
import './profile.css';

export const EditProfile = () => {
    return (
        <div  style={{minHeight: '100vh', background: '#fafafa'}}>
        <ProfileNavBar />
            <div className="profile">
            <div className="profile__image">
            <img src={Header} />
            <input  hidden  type="file" accept="image/gif, image/jpg, image/jpeg, image/png"/>
            <div className="profile__toggle">
                <button  style={ {backgroundColor: 'white',
                    borderColor: 'white',
                    border: '1px solid white',
                    color: '#343434'} }>
                Change Cover
                </button>
                <NavLink
                className="d-flex done_edit"  to="/profile"
                style={ {backgroundColor: '#fa7268',
                    borderColor: '#fa7268',
                    border: '1px solid #fa7268',
                    color: 'white'} }>
                <i className="fa fa-edit"></i>
                <span> Done Editing</span>
                </NavLink>
            </div>
            </div>

            <div className="profile__wrapper">
            <div className="profile__logo">
                <div className="profile__logo-hover" >
                <i className="fa fa-camera" style={{color: '#fff'}}></i>
                <p>Change your profile photo</p>
                </div>
                <img className="profile__logo-img"/>
                <input hidden  type="file" accept="image/gif, image/jpg, image/jpeg, image/png"/>
            </div>

            <div className="profile_edit_content">
                <p>Edit Profile</p>
                <div className="profile__content__form">
                <p className="profile__content__form-title">General Information</p>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <p className="profile__content__form-label">Page Name</p>
                    <input className="profile__content__form-input" type="text"/>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <p className="profile__content__form-label">Handle</p>
                    <input className="profile__content__form-input"type="text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                    <p className="profile__content__form-label">Page Description</p>
                    <textarea className="profile__content__form-textarea" rows={10} typeof="text" ></textarea>
                    </div>
                </div>
                <p className="profile__content__form-title">Contact Information</p>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <p className="profile__content__form-label">Website</p>
                    <input className="profile__content__form-input" type="text" />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <p className="profile__content__form-label">Facebook</p>
                    <input className="profile__content__form-input" type="text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <p className="profile__content__form-label">Twitter</p>
                    <input className="profile__content__form-input" type="text"/>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <p className="profile__content__form-label">LinkedIn</p>
                    <input className="profile__content__form-input" type="text"/>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <p className="profile__content__form-label">Google Plus</p>
                    <input className="profile__content__form-input"  type="text" />
                    </div>
                </div>
                <div className="profile__content__save row">
                    <button>Save Changes</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}
