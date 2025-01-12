import { createSlice } from '@reduxjs/toolkit';


interface ModalState {
    visible: boolean;
    title:string;
    message: string;
    actionText: string;  
    action:string;
    actionDone:boolean;
    params: Record<string,any> | null
  }

  const initialState: ModalState = {
    visible: false,
    title:'',
    message: '',
    actionText: 'Aceptar',
    action:'',
    params: null,
    actionDone:false
  };


export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
      showModal: (state,action) => {
        state.visible = true;
        state.title = action.payload.title
        state.message = action.payload.message;
        state.actionText = action.payload.actionText || 'Aceptar'; 
        state.action = action.payload.action;
        state.params = action.payload.params;
      },
      hideModal: (state) => {
        state.visible = false;
        state.message = '';
        state.title = '';
        state.actionText = '';
        state.action = '';
        state.params = null;
      },
      setActionDone: (state, action ) => {
          state.actionDone = action.payload.actionDone
      }
    },
  });
  
  export const { showModal, hideModal , setActionDone } = modalSlice.actions;