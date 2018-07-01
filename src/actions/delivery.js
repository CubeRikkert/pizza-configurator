export const DELIVERY_STYLE = 'DELIVERY_STYLE'

export const addDeliveryStyle = (deliveryStyle) => {
  return {
    type: 'DELIVERY_STYLE',
    payload: {
      deliveryStyle
    }
  }
}
