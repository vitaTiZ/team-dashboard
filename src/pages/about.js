import React from "react"
import firebase from "gatsby-plugin-firebase"
import {Test} from "../components/test"


export default function About() {

  const [data, setData] = React.useState("Loading...")

  const getFromFirestore = async () => {
    const { docs } = await firebase.firestore()
    .collection('data')
    .get()
    
    const mappedDocs = docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
  
    return mappedDocs;
  
  }

  getFromFirestore().then(res => console.log('>>>>>', res))

  // React.useEffect(() => {
  //   firebase
  //     .database()
  //     .ref("/data")
  //     .once("value")
  //     .then(snapshot => {
  //       setData(snapshot.val())
  //     })
  // }, [])

  return (
    <div>
      <Test name={data}/>
      <Test name="ABOUT"/>
    </div>
  )
}
