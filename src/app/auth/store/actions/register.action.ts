import { createAction, props } from "@ngrx/store";
import { RegisterRequest } from "../../types/registerRequest.interface";
import { ActionTypes } from "../actionTypes";

export const registerAction = createAction(ActionTypes.REGISTER, props<RegisterRequest>());