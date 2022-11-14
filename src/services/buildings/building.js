const { BuildingModel } = require('../../models')

const buildingList = async () => {
  try {
    const attributes = ['id', 'name', 'procurement_date', 'operating_year', 'purchase_price', 'source_of_funds']
    const data = await BuildingModel.findAll({ attributes })

    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(error)
  }
}

module.exports = {
  buildingList
}
