const { buildingList } = require('../../services')
const { responseSuccess } = require('../../utils')

const getBuildingList = async (req, res, next) => {
  try {
    const data = await buildingList()
    return responseSuccess(res, 'Building Lists', data, 200)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getBuildingList
}
