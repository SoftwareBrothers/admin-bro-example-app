const Bcrypt = require('bcrypt')
const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')
const AdminBroSequelizejs = require('admin-bro-sequelizejs')
AdminBro.registerAdapter(AdminBroMongoose)
AdminBro.registerAdapter(AdminBroSequelizejs)

const ArticleModel = require('../mongoose/article-model')
const AdminModel = require('../mongoose/admin-model')
const DashboardPage = require('./pages/dashboard-page')

const SequelizeDb = require('../sequelize/models')

const menu = {
  default: { name: 'Default Resources', icon: 'fas fa-ad' },
  customized: { name: 'Customized Resources', icon: 'fas fa-marker' }
}

const user = require('./resources/user')
const page = require('./resources/page')
const blogPost = require('./resources/blog-post')
const article = require('./resources/article')

module.exports = {
  resources: [
    { resource: require('../mongoose/comment-model'), options: { parent: menu.default } },
    { resource: require('../mongoose/category-model'), options: { parent: menu.default } },
    { resource: require('../mongoose/user-model'), options: { parent: menu.customized, ...user } },
    { resource: require('../mongoose/page-model'), options: { parent: menu.customized, ...page } },
    { resource: require('../mongoose/blog-post-model'), options: { parent: menu.customized, ...blogPost } },
    { resource: require('../mongoose/article-model'), options: { parent: menu.customized, ...article } },
  ],
  dashboard: DashboardPage,
  auth: {
    authenticate: async (email, password) => {
      const admin = await AdminModel.findOne({ email })
      if (admin && Bcrypt.compare(password, admin.password)) {
        return admin
      }
      return null
    },
    strategy: 'session',
    cookieName: 'adminBroCookie',
    cookiePassword: process.env.COOKIE_PASSWORD || 'makesurepasswordissecuremakesurepasswordissecure',
    isSecure: false,
    defaultMessage: 'Login: test@example.com, Password: password',
  }
}

require('../mongoose/page-model')


const PostCode = require('../rest/postcode')
