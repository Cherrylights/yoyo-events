import { sampleData } from "../api/sampleData";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "../actions/index";

const initialState = sampleData;

export default function eventReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_EVENT:
      return [
        payload,
        ...state
      ];

    case UPDATE_EVENT: {
      const newEvents = state.map(event => {
        if (event.id === payload.id) {
          return payload;
        } else {
          return event;
        }
      });
      return newEvents;
    }

    case DELETE_EVENT: {
      const newEvents = state.filter(event => event.id !== payload);
      return newEvents;
    }

    default:
      return state;
  }
}