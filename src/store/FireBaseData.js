import  React ,{useState , useEffect} from "react";
import axios from "axios";

const url = 'https://netflix-c0578-default-rtdb.firebaseio.com/0.json'

export default function FireBaseData (){
let arr;
const [item, setitem] = useState([]);

    useEffect(() => {
        axios.get(url).then((response) => {
            arr = response.data
            setitem(arr);

        });
      }, []);
    
      if (!item) return null;
      
      return  item

}


