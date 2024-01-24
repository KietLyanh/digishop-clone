import React,{useEffect,useState} from "react";
import './Hotdeal.scss';
import pictureTitle from "./image/set.svg"
import HotdealItems from "./HotdealItems";
import { HotdealIcon } from "~/components/icons";
import listmobiledata from "~/api/listmobiledata";
function Hotdeal()
{
  const [infomation,setInfomation] = useState([]);
  const data = []
  useEffect(()=>{
    const fetchData = async () => 
    {
      try{
        const response = await listmobiledata.getAll();
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
                standard_name={info.standard_name}
                id={info.standard_id}
                detail_treatment={info.detail_treatment}
                standard_price={info.standard_price}
                displayImg="none"
                displayContent="block"
              />
           ))}
          </div>
        </div>
    );
}
export default Hotdeal; 