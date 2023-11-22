import React from 'react'

const Contact = () => {
    return (
        <div className='text-center'>
            <h3 className='font-semibold text-2xl p-4 m-2'>Contact Us</h3>
            <form>
                <input className='border border-black p-2 m-2 rounded-md' placeholder='name'></input>
                <input className='border border-black p-2 m-2 rounded-md' placeholder='message'></input>
                <button className='border border-black p-2 m-2 rounded-md'>submit</button>
            </form>
        </div>
    );
};

export default Contact;