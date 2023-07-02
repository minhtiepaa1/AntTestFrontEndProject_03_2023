import React, { useEffect, useState } from 'react';

interface Data{
    x:any;
    y:any;
}

const Test = () => {
const [data, setData] = useState<any>({
    x:-1, y:-2
})

useEffect(()=>{

},[data])

useEffect(()=>{
setData({...data, x:-3})
},[])
    return (
        <div>
            {data}
        </div>
    );
};

export default Test;