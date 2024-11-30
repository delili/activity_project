export const fetchUser = async (username) => {
    const response = await fetch(`/api/user/${username}`);
    const data = await response.json();
    return data;
  };
  
  export const fetchMessages = async (userId) => {
    const response = await fetch(`/api/messages/${userId}`);
    const data = await response.json();
    return data;
  };
  
  export const fetchUserCount = async () => {
    const response = await fetch('/api/user/count');
    const data = await response.json();
    return data.count;
  };
  