const Sequelize = require('sequelize');

const Declaration = require("./declaration")
const Exhibition  = require("./exhibition");
const ExhibitionCategory  = require("./exhibitionCategory");
const Following  = require("./following");
const Goods  = require("./goods");
const GoodsCategory  = require("./goodsCategory");
const GoodsImage  = require("./goodsImage");
const Guestbook  = require("./guestbook");
const LikeExhibition = require("./likeExhibition");
const Mypage  = require("./mypage");
const PostDetail  = require("./postDetail");
const Review  = require("./review");
const Scrap  = require("./scrap");
const Transaction  = require("./transaction");
const User = require("./users");


const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
  // {
  //   host: config.host,
  //   port: config.port,
  //   dialect: config.dialect,
  //   timezone: "Asia/Seoul",
  //   dialectOptions: {
  //     charset: "utf8mb4",
  //     dateStrings: true,
  //     typeCast: true,
  //   },
  // }
);
db.sequelize = sequelize;

sequelize.sync({ force: false }); 

db.Declaration = Declaration;
Declaration.initiate(sequelize);

db.Exhibition = Exhibition;
Exhibition.initiate(sequelize);

db.ExhibitionCategory = ExhibitionCategory;
ExhibitionCategory.initiate(sequelize);

db.Following = Following;
Following.initiate(sequelize);

db.Goods = Goods;
Goods.initiate(sequelize);

db.GoodsCategory = GoodsCategory;
GoodsCategory.initiate(sequelize);

db.GoodsImage = GoodsImage;
GoodsImage.initiate(sequelize);

db.Guestbook = Guestbook;
Guestbook.initiate(sequelize);

db.LikeExhibition = LikeExhibition;
LikeExhibition.initiate(sequelize);

db.Mypage = Mypage;
Mypage.initiate(sequelize);

db.PostDetail = PostDetail;
PostDetail.initiate(sequelize);

db.Review = Review;
Review.initiate(sequelize);

db.Scrap = Scrap;
Scrap.initiate(sequelize);

db.Transaction = Transaction;
Transaction.initiate(sequelize);

db.User = User;
User.initiate(sequelize);


Declaration.associate(db);
Exhibition.associate(db);
ExhibitionCategory.associate(db);
Following.associate(db);
Goods.associate(db);
GoodsCategory.associate(db);
GoodsImage.associate(db);
Guestbook.associate(db);
LikeExhibition.associate(db);
Mypage.associate(db);
PostDetail.associate(db);
Review.associate(db);
Scrap.associate(db);
Transaction.associate(db);
User.associate(db);

module.exports = db;



// app.use(bodyParser.json());

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Database connection has been established successfully.');

//     return sequelize.sync({ force: false }); 
//   })
//   .then(() => {
//     console.log('Models have been synchronized with the database.');

    
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}.`);
//     });
//   })
//   .catch((error) => {
//     console.error('Unable to connect to the database:', error);
//   });










// // Export the models and sequelize insta
// module.exports = {
//   sequelize,
//   User,
//   Following,
//   Mypage,
//   Declaration,
//   GoodsCategory,
//   Goods,
//   GoodsImage,
//   Review,
//   ReviewImage,
//   Transaction,
//   ExhibitionCategory,
//   Exhibition,
//   LikeExhibition,
//   PostDetail,
//   PostImage,
//   Scrap,
//   Guestbook,
// };