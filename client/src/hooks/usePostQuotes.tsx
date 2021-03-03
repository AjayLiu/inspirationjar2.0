
import {useEffect, useState} from 'react'
import {Quote} from '@hooks/quoteTypes'

const usePostQuotes = (path : string, body? : Object, execute=true) => {
    const [quoteConfirmation, setQuoteConfirmation] = useState("Waiting");
    useEffect( () => {
        if(execute){            
            const postQuotes = async () => {
                const response = await fetch(`/api/quotes${path}`, 
                {
                    method: "POST", 
                    body: JSON.stringify(body), 
                    headers: { "Content-Type": "application/json" }
                });
                const data = await response.json();
                setQuoteConfirmation(data.submissionStatus);
            }
            postQuotes();
        } else {
            setQuoteConfirmation("Waiting")
        }
    }, [execute])
    return quoteConfirmation;
}

export default usePostQuotes;