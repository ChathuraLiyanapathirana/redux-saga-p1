import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getUsers from '../actions/users';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {users.loading && <div>Loading...</div>}
      {users.data && (
        <div>
          <ul>
            {users.data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
      {users.error && <div>{users.error}</div>}
    </div>
  );
};

export default Home;
