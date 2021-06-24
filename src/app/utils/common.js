export const commonDispatch = (actionType, data) => {
    return {
      type: actionType,
      payload: data,
    };
  };
  