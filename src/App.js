import React, {useState} from 'react'
import {Steps} from 'antd';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const {Step} = Steps;

function App() {
  const [step, setStep] = useState(0)
  const handleNext=(values)=>{
    console.log( `Values of Form ${(step+1)}`, values);
    if(step<4){
      setStep(step+1)
    }
  }
  return (
    <div className={'App'}>
      {step === 0 && <Step1 onNext={handleNext}/>}
      {step === 1 && <Step2 onNext={handleNext}/>}
      {step === 2 && <Step3 onNext={handleNext}/>}
      {step === 3 && <Step4 onNext={handleNext}/>}
      <Steps className={'container'} size="small" current={step}>
        <Step/>
        <Step/>
        <Step/>
        <Step/>
      </Steps>
    </div>
  )
}

export default App;
