import React from "react";
import DOMPurify from 'isomorphic-dompurify';

//компонент отзыва
function Review (props){
    const data = ` ${props.data}`
    // очистка содержимого передаваемого через props.data ( защищает от xss атак )
    const cleanData = DOMPurify.sanitize(data); 
    const element = (
        <div className="bg-white text-black text-base text-left rounded-2xl max-w-md p-2  ">
            <div dangerouslySetInnerHTML={{ __html: cleanData }} />
        </div>
    )
    return element;
}

export default Review