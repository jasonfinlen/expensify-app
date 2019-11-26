import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0}) => ({
    type:'ADD_EXPENSE',
    expense :{
        id:uuid()
    } 
    
});
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate: undefined,
    endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
//Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses : [{
        id: '141421415',
        description: 'January Rent',
        note: 'This was the final amount piad for this address', 
        amount: 54500,
        createdAt: 0
    }],
    filters : {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        EndDate: undefined
    }
};