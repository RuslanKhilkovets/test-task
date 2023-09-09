import { useNavigate } from "react-router-dom";


async function getDataFromURL(url: string): Promise<any> {
    try {
        const response = await fetch(url);
            
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        return data;
    }
    catch (error) {
        const navigate = useNavigate()
        navigate('/server-error')
        
    }
  }

export default getDataFromURL;