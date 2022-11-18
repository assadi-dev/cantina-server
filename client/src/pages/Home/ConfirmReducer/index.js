import React from "react";

const ConfirmReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TOGGLE_MODAL":
      return {
        ...state,
        isOpen: !state.isOpen,
        message: payload.message,
        id: payload.id,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        isOpen: false,
      };
  }
};

export default ConfirmReducer;
