const UserService = require('../service/user.service');

class UserController {
    userService = new UserService();
    createUser = async (req, res, next) => {
        try {
            const { nickname, email, password, phone, name, birth} = req.body;
            const createUserData = await this.userService.createUser(
                nickname,
                email,
                password,
                phone,
                name,
                birth,  
            );
            res.status(201).json({ data: createUserData });
        } catch (error) {
            next(error);
        }
    }
}
module.exports = UserController;


