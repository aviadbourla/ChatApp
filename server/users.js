const users = [];

const addUsers = ({ id, name, room }) => {
 
    const existingUser = users.find((user) => user.room === room && user.name === name);
    if (existingUser) {
        return { "eroor": 'Username is Taken' }
    }
    const user = { id, name, room };
    users.push(user)
    return {user};
}

const removeUser = (id) => {
    const index = users.findIndex((user)=> user.id === id);
    if(index !== -1){
        return users.splice(index,1)[0];
    }
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersinRoom = (room) => users.filter((user) => user.room === room);

module.exports ={addUsers,removeUser,getUser,getUsersinRoom};