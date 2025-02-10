import React from 'react'
import OrderTable from './OrderTable'
import MenuItemTable from './MenuItemTable'

const OutletDashboard = () => {
  return (
    <div className="px-2">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <OrderTable name="Recent Order" isDashboard={true} />
      </div>
      <div>
        <MenuItemTable isDashboard={true} name="Recently Added Menu" />
      </div>
    </div>
  </div>
  )
}

export default OutletDashboard