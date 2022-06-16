const initState = {
    titles: [
        { id: '1,', name: 'Todo App' },
        { id: '2,', name: 'Add Job' },
        { id: '3,', name: 'Info User' }
    ],
    posts: []
}
const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DELETE_USER':
            console.log('Run into Delete func', action)
            let titles = state.titles;
            titles = titles.filter(item => item.id !== action.payload.id)
            return {
                ...state, titles
            }
        case 'CREAT_USER':
            console.log('Run into Delete func', action)
            let id = Math.floor(Math.random() * 1000)
            let title = { id: id, name: `No More` }
            return {
                ...state, titles: [...state.titles, title]
            }

            break;
        default:
            return state
    }

    return state;
}

export default rootReducer;