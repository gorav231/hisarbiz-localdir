import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(url,
            {
                headers: {
                    apiKey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmbnFyb3dmcWtudmR3bmdicGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzNjIzMDMsImV4cCI6MTk5MTkzODMwM30.B1nMH85b6ENzM1h8ZiG2qRmYMBB-J9LttgVhZPUY61s`,
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmbnFyb3dmcWtudmR3bmdicGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzNjIzMDMsImV4cCI6MTk5MTkzODMwM30.B1nMH85b6ENzM1h8ZiG2qRmYMBB-J9LttgVhZPUY61s`,
                },
            }

        )
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))


    }, [url])
    return { data, error, loading }
};

export default useFetch;