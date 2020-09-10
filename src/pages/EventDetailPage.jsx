import React, { useEffect, useState, useContext } from "react"
import { UserContext } from "../contexts/UserContext"

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/"

export default function EventDetailPage(props) {
  const { token } = useContext(UserContext)
  const [mainPageData, setMainPageData] = useState(null)

  useEffect(() => {
    fetchEventMainPage()
  }, [])

  function fetchEventMainPage() {
    console.log("props", props)
    const currentSlug = props.match.params.slug
    const eventMainPageUrl = `${ROOT_URL}cms/${currentSlug}/main-page/`
    console.log("currentSlug", currentSlug)
    console.log("eventMainPageUrl", eventMainPageUrl)

    fetch(eventMainPageUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setMainPageData(data)
      })
  }
  return (
    <div>
      {mainPageData && (
        <div>
          <h1>{mainPageData.title}</h1>
          <p>{mainPageData.description}</p>
          {mainPageData.actionPoints &&
            mainPageData.actionPoints.map((actionPoints, index) => {
              return (
                <div key={index}>
                  <p>{actionPoints.title}</p>
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}
