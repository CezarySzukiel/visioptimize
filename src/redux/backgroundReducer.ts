interface Action {
    type: string;
    payload?: any;
}

interface BackgroundState {
    backgroundImageUrl: string | null;
}

const initialState = {
    backgroundImageUrl: null,
};

export default function backgroundReducer(state = initialState, action: Action): BackgroundState {
    switch (action.type) {
        case 'SET_BACKGROUND_IMAGE_LOADED':
            return { ...state, backgroundImageUrl: action.payload };
        default:
            return state;
    }
}