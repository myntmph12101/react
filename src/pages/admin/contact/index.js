import React from "react";
import { Link } from "react-router-dom";

const ContactManagerPage = (props) => {
  const onHandLeRemove = (_id) => {
    props.onDeleteContact(_id);
  };
  return (
    <div>
      <h2>admin contact</h2>
      <div className=''>
        <table className='table table-bordered'>
          <thead>
            <tr className='text-center'>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.contacts.map((contact, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
                <td className='text-center'>
                  <Link
                    onClick={() => onHandLeRemove(contact._id)}
                    className='btn bg-red-500 text-white m-2'>
                    Xoá
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactManagerPage;
