import { createContext } from 'react'

const RulesContext = createContext({ rules: [], setRules: () => {} })

export default RulesContext