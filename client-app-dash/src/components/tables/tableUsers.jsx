import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../features/usersSlice';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

function UsersComponent() {
  const dispatch = useDispatch();
  const { influencers, clients, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Influencers</h2>
      <div className="bg-white border border-black rounded-lg p-4 mb-4">
        <table className="w-full">
          <thead>
            <tr className="bg-black text-white">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Instagram</th>
              <th className="p-2">YouTube</th>
            </tr>
          </thead>
          <tbody>
            {influencers.map((influencer) => (
              <tr key={influencer.id}>
               
                <td className="p-2">{influencer.name}</td>
                <td className="p-2">{influencer.email}</td>
                <td className="p-2">
                  {influencer.instagram && (
                    <a href={influencer.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="text-blue-600 mr-1" />
                      Instagram
                    </a>
                  )}
                </td>
                <td className="p-2">
                  {influencer.youtube && (
                    <a href={influencer.youtube} target="_blank" rel="noopener noreferrer">
                      <FaYoutube className="text-red-600 mr-1" />
                      YouTube
                    </a>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-4">Clients</h2>
      <div className="bg-white border border-black rounded-lg p-4">
        <table className="w-full">
          <thead>
            <tr className="bg-black text-white">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td className="p-2">{client.name}</td>
                <td className="p-2">{client.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersComponent;