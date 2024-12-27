'use client'

import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomLoading from './_components/CustomLoading';
import { v4 as uuidv4 } from 'uuid';

const scriptData ='The old house stood on a hill overlooking the town, shrouded in mist and mystery. Locals whispered of strange happenings within its walls, of unsettling sounds and shadows that moved on their own. Drawn by an unknown force, Sarah ventured inside, her heart pounding in her chest. A chill ran down her spine as she sensed a presence, a dark shadow that seemed to watch her every move. Suddenly, objects began to fly, and ghostly figures appeared, their eyes burning with icy fire. Sarah fled, her screams echoing through the night, the terrifying presence hot on her heels. But was she truly safe?  The house still stands, waiting... '
const CreateNew = () => {

  const [formData,setFormData]=useState([]);
  const [loading,setLoading]=useState(false);
  const [videoScript,setVideoScript] = useState();
  const [audioFileUrl,setAudioFileUrl] = useState();

  const onHandleInputChange=(fieldName,fieldValue)=>{
    console.log(fieldName,fieldValue);

    setFormData(prev=>({
      ...prev,
      [fieldName]:fieldValue
    }))
  }

  const onCreateClickHandler=()=>{
    // GetVideoScript();
    GenerateAudioFile(scriptData);
  }

  // Get Video Script
  const GetVideoScript = async() => {
    setLoading(true);
    const prompt='write a script to generate '+formData.duration+' seconds video on topic : '+formData.topic+' along with AI image prompt in '+formData.imageStyle+' format for each scene and give me result in JSON format with imagePrompt and  ContentText as field'
    console.log(prompt)
    const result = await axios.post('/api/get-video-script',{
      prompt:prompt
    }).then(resp=>{
      setVideoScript(resp.data.result);
      GenerateAudioFile(resp.data.result);
    });
    setLoading(false);
  }

  // Get AUdio File
  const GenerateAudioFile = async(videoScriptData)=>{
    setLoading(true);
    let script='';
    const id = uuidv4();
    // videoScriptData.forEach(item=>{
    //   script=script+item.ContentText+" ";
    // })

    await axios.post('/api/generate-audio',{
      text:videoScriptData,
      id:id
    }).then(resp=>{
      setAudioFileUrl(resp.data.result);
    })

    setLoading(false)
  }

  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-4xl text-primary text-center'>Create New</h2>

      <div className='mt-10 shadow-md p-10'>
        {/* Select Topic */}
        <SelectTopic onUserSelect={onHandleInputChange}/>

        {/* Select style */}
        <SelectStyle onUserSelect={onHandleInputChange}/>

        {/* Duration */}
        <SelectDuration onUserSelect={onHandleInputChange}/>

        {/* Create Button */}
        <Button className='mt-10 w-full' onClick={onCreateClickHandler}>Create Short Video</Button>
      </div>

      <CustomLoading loading={loading}/>
    </div>
  )
}

export default CreateNew