import React, {useState} from 'react';
import axios from 'axios';

export default function GetAxiosData() {
    const [weight, setWeight] = useState("")
    const [calories_in, setCalories_in] = useState("")
    const [calories_out, setCalories_out] = useState("")
    const [heartrate, setHeartrate] = useState("")
    const apiUrl = 'http://127.0.0.1:8000/api/7';
    axios.get(apiUrl).then((repos) => {
            setWeight(repos.data.weight);
            setCalories_in(repos.data.calories_in);
            setCalories_out(repos.data.calories_out);
            setHeartrate(repos.data.heartrate);
        });
    }