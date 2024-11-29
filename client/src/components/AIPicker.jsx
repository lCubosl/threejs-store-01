import React from "react";
import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea 
        className="aipicker-textarea"
        placeholder="Ask Ai..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      /> 

      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title="Asking AI..."
            customStyles="text-sx"
          />
        ) : (
          <>
            <CustomButton 
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-sx"
            />

            <CustomButton 
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-sx"
            />
          </>
        )}
      </div>     
    </div>
  )
}

export default AIPicker