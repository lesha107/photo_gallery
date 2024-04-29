import React from 'react';
import './Contacts.style.scss';

const ContactsPage = () => {
    const imgUrl = 'https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/c3c02527-241c-4ec5-a394-5f759f1bea1e/TPLOWLIFE-02975.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/c3c02527-241c-4ec5-a394-5f759f1bea1e/TPLOWLIFE-02975.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/c3c02527-241c-4ec5-a394-5f759f1bea1e/TPLOWLIFE-02975.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/c3c02527-241c-4ec5-a394-5f759f1bea1e/TPLOWLIFE-02975.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/c3c02527-241c-4ec5-a394-5f759f1bea1e/TPLOWLIFE-02975.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/c3c02527-241c-4ec5-a394-5f759f1bea1e/TPLOWLIFE-02975.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/c3c02527-241c-4ec5-a394-5f759f1bea1e/TPLOWLIFE-02975.jpg?format=2500w 2500w';


    return (
        <div className='container'>
            <div className="photo">
            <img src={imgUrl} alt=""/>
            </div>
            <p>Email: test@test.com</p>
            <p>Instagram: asdasda</p>
        </div>
    )
};

export default ContactsPage;
