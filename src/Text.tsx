type Props = {
  color:string;
  fontSize:string;
  children: string;
}


export const Text:React.VFC<Props> = (props) => {
  const {color, fontSize, children} = props;
  return (
    <p style={{color, fontSize}}>
      {children}
    </p>
  )
}
