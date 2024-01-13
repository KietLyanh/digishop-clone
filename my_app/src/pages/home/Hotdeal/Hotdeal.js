import React,{useEffect,useState} from "react";
import './Hotdeal.scss';
import pictureTitle from "./image/set.svg"
import HotdealItems from "./HotdealItems";
import { HotdealIcon } from "~/components/icons";
import Listhotdeal from "~/api/listhotdeal";
function Hotdeal()
{
  const [infomation,setInfomation] = useState([]);
  const data = []
  useEffect(()=>{
    const fetchData = async () => 
    {
      try{
        const response = await Listhotdeal.getAll();
        const jsonString = JSON.stringify(response);
        const dataArray = JSON.parse(jsonString);
        if(!data.length){ // kiem tra neu data rong thi moi cho push de han che so lan push
          for(let i = 0; i < 4; i++)
          {
            data.push(dataArray[i])
          }
          setInfomation(data);
        }
      }
      catch (error){
          console.log(error);
      }
    }
    fetchData()
  },[]) // theo doi data
    return(
        <div className="hotdeal-container">
          <div className="hotdeal-title">
            <img src={pictureTitle} alt="opps" />
            <h2>Hot deal</h2>
          </div>
          <div className="hotdeal-row">
           {infomation.map((info,index) =>(
              <HotdealItems
                key={index}
                icon={<HotdealIcon/>}
                child_name={info.child_name}
                detail_treatment={info.detail_treatment}
                child_price={info.child_price}
                displayImg="none"
                displayContent="block"
              />
           ))}
          </div>
        </div>
    );
}
export default Hotdeal; 