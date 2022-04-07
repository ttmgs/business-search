import {useState} from "react";
import yelp from "./api/yelp";


export default () => {
    const [term, setTerm] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [results, setResult] = useState([]);



    const getAPI = async () => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: term,
                    location: 'california'
                }
            })
            setResult(response.data.businesses)
        } catch {
            setErrMessage('Something went wrong')
        }
    }
    return [getAPI, term, results, errMessage, setTerm]
}


