import { cartActions } from "./cartSlice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-shop-6b39f-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = await res.json();
      return data;
    };
    try {

      const cartData = await fetchHandler();
      console.log(cartData);

      dispatch(cartActions.replaceData(cartData));

      setTimeout(() => {
        dispatch(uiActions.showNotification({
          open: false
        }))
      }, 2000);

    } catch (err) {

      setTimeout(() => {
        dispatch(
          uiActions.showNotification({
            open: true,
            message: "Sending Request Failed",
            type: "error",
          })
        );
      }, 3000);

      setTimeout(() => {
        dispatch(uiActions.showNotification({
          open: false
        }))
      }, 2000);
    }
  };
};

export const sendCart = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      open: true,
      message: 'Sending request',
      type: 'warning'
    }))
    const sendRequest = async () => {
      // console.log(uiState);
      const res = await fetch("https://redux-shop-6b39f-default-rtdb.firebaseio.com/cartItems.json", {
        method: 'PUT',
        body: JSON.stringify({
          itemsList: cart.itemsList,
          totalQuantity: cart.totalQuantity
        })
      })

      dispatch(uiActions.showNotification({
        open: true,
        message: 'Sent request to database',
        type: 'success'
      }))

      setTimeout(() => {
        dispatch(uiActions.showNotification({
          open: false
        }))
      }, 2000);
    };
    try {
      await sendRequest();
    } catch (err) {
      dispatch(uiActions.showNotification({
        open: true,
        message: 'Request Failed',
        type: 'error'
      }))
    }
  }
}