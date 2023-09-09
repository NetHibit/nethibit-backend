const User = require("../models/users");

class UserRepository {
    findById = async (userId) => {
        const getUser = await User.findByPk(userId);

        if (!getUser) {
            throw new Error("Invalid value");
        }
        return getUser;
    }
}

module.exports = UserRepository;