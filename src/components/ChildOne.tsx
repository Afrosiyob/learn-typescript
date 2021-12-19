 interface ChildOneProps {
     title?:string,
     body? :string,
     children?: any
 }
 
 
 function ChildOne  ({title, body, children}:ChildOneProps) {
     return <>
     
        <h1> {title}  </h1>
        <p> {body}  </p> 
     </>
 } 

 export default ChildOne