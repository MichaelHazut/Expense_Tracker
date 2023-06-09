import '../../../../Styles/ExpenseOptions.css'

import { useEffect, useState } from 'react';

import useFetch from '../../../../Hooks/useFetch';
import apiUrls from '../../../../Data/ApiUrls';
import { ToasterSuccess } from '../../../Toaster';

//not finished
export function ExpenseDropDown({ expense , splicer}) {

    const [fetchTrigger, setFetchTrigger] = useState(false);

    const deleteMethod = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    const { data, loading, error } = useFetch(
        apiUrls.deleteExpense + expense.id,
        {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }, fetchTrigger)


    const handleDelete = () => {
        setFetchTrigger(true)
        splicer(expense.id)
        ToasterSuccess("Expense Deleted Successfully")
    }

    useEffect(() => {
        if (data == null) return;
        setFetchTrigger(false)
        console.log("hey");
        console.log(expense.id);
        splicer(expense.id)
    }, data)

    return (//need to fill
        <div className="options-container">
            <h3>hello</h3>
            <button onClick={handleDelete}>Del</button>
        </div>
    )
}