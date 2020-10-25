import React from "react"
import firebase from "gatsby-plugin-firebase"
import {Test} from "../components/test"


export default function About() {

  const [data, setData] = React.useState("Loading...")

  firebase.auth().signInAnonymously();

  React.useEffect(() => {
    firebase
      .database()
      .ref("/data")
      .once("value")
      .then(snapshot => {
        setData(snapshot.val())
      })
  }, [])

  return (
    <div>
      <Test name={data}/>
      <Test name="ABOUT"/>
    </div>
  )
}
