import { useState } from 'react'
import MyHello from './MyHello'

export default function MyApp() {
    const [word, setWord] = useState('world')

    return (
        <div>
            <button type="button" onClick={() => setWord('Riri')}>Riri</button>
            <MyHello name={word} />
        </div>
    )
}