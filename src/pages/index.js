import React from "react"
import { Link } from "gatsby"
import { Test } from "../components/test"

export default function Home() {


  // React.useEffect(() => {
  //   firebase.auth()
  //     .signInAnonymously()
  //     .then(snapshot => {
  //       console.log('snapshot', snapshot)
  //     })
  // }, [])

  


  return (
    <div>
      <Test name="test"/>
      <Link to="/about">go to about...</Link>
      <Test name="test1"/>
    </div>
  )
}
