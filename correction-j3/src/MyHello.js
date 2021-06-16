export default function MyHello(props) {
    console.log('props: ', props)

    return (
        <div>Hello {props.name}</div>
    )
}