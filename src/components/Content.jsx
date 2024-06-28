import { useState, useEffect } from "react";
import './content.css'

const Content = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        
        setData(data);
      } catch (error) {
        setError(error);
      }
      finally{
        setLoading(false)
      }
    }
    getData();
  }, []);

  if(loading) return <p>Loading...</p>
  if(error) return <p> Error: {error.message}</p>
  return (<>
  
  <div className="content">
    
    <div className="cont">
        {data.map(e =>  <div className="dates">
            <p>{e.title}</p>
            <img src = {e.image} className="images" alt=""/>
            <p className = "text"> {e.description}</p>
        </div>
            
        )}
        
        
    </div>

  </div>

  </>);
};

export default Content;
