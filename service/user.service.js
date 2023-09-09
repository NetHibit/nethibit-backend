const UserRepository = require('../repositories/user.repository');

class UserService {
    userRepository = new UserRepository();

    createUser = async (nickname, email, password, phone, name, birth) => {
        const createUserData = await this.userRepository.createUser(nickname, email, password, phone, name, birth);
        return {
            userID : createUserData.user_id,
            userNickname : createUserData.nickname,
            userEmail : createUserData.email,
            userPassword : createUserData.password,
            userPhone : createUserData.phone,
            userName : createUserData.name,
            userBirth : createUserData.birth,
        };
    }
}

module.exports = UserService;