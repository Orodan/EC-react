import { useState, useEffect } from 'react'

import RuleList from './RuleList'

export default function App() {
    const [rulesData, setRulesData] = useState([])
    const [titleData, setTitleData] = useState()
    const [descriptionData, setDescriptionData] = useState()

    function addRule() {
        const newRule = {
            title: titleData,
            description: descriptionData
        }

        console.log(newRule)

        fetch('http://localhost:4000/rest/rules', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(newRule)
        })
        .then(() => {
            fetch('http://localhost:4000/rest/rules')
                .then(response => response.json())
                .then(data => setRulesData(data))
        })
    }

    useEffect(() => {
        fetch('http://localhost:4000/rest/rules')
            .then(response => response.json())
            .then(data => setRulesData(data))
    }, [])

    return (
        <div>
            <div>
                <h3>Add a new rule</h3>
                <label>title<input onInput={event => setTitleData(event.target.value)} type="text" name="title" className="form-control" /></label>

                <br/>

                <label>description<input onInput={event => setDescriptionData(event.target.value)} type="text" name="description" className="form-control" /></label>

                <br/>

                <button onClick={() => addRule()} type="button">Submit</button>
            </div>
            <RuleList rules={rulesData} />
        </div>
    )
}