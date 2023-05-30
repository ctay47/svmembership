const db = require('../db/dbConfig.js');

const getAllUsers = async () => {
    try {
        const allUsers = await db.any('SELECT * FROM users');
        return allUsers;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const getUser = async (id) => {
    try {
        const user = await db.one('SELECT * FROM users WHERE id = $1', id);
        return user
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const createUser = async (user) => {
   const { username, first_name, last_name, city, state, country, profile_pic, instagram_handle, facebook_handle, discord_handle } = user;
    try {
        const newUser= await db.one(
            `INSERT INTO users (username, first_name, last_name, city, state, country, profile_pic, instagram_handle, facebook_handle, discord_handle) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
            [username, first_name, last_name, city, state, country, profile_pic, instagram_handle, facebook_handle, discord_handle]
        );
        return newUser;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const updateUser = async (user, id) => {
    const { username, first_name, last_name, city, state, country, profile_pic, instagram_handle, facebook_handle, discord_handle } = user;
    try {
        const updateUser =  await db.one(
            `UPDATE users SET username=$1, first_name=$2, last_name=$3, city=$4, state=$5, country=$6, profile_pic=$7, instagram_handle=$8, facebook_handle=$9, discord_handle=$10 WHERE id=$11 RETURNING *`,
            [username, first_name, last_name, city, state, country, profile_pic, instagram_handle, facebook_handle, discord_handle, id]
        );
        return updateuser;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const deleteUser = async (id) => {
    try {
        const deleteUser = await db.none('DELETE FROM users WHERE id = $1', id);
        return deleteUser;
    } catch (err) {
        console.error(err);
        throw err;
    }
};


module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};