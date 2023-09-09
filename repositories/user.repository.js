const User = require('../models/users');

class UserRepository {
    async createUser(nickname, email, password, phone, name, birth) {
        try {
            const createUser = await User.create({
                nickname,
                email,
                password,
                phone,
                name,
                birth,
            });
            return createUser;
        } catch (error) {
            throw error;
        }
    }    
}

module.exports = UserRepository;

