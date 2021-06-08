import { useEffect, useMemo, useState } from 'react'

import RuleList from './RuleList'
import RulesContext from './RulesContext'

export default function App() {
    const [rules, setRules] = useState([])
    useEffect(() => {
        fetch('/rest/rules')
            .then(response => response.json())
            .then(rulesData => setRules(rulesData))
    }, [])

    const rulesContextValue = useMemo(() => {
        return { rules, setRules }
    }, [rules, setRules])

    return (
        <RulesContext.Provider value={rulesContextValue}>
            <RuleList rules={rules} />
        </RulesContext.Provider>
    )
}