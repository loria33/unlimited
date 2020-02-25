import React, { useEffect, useRef,useState } from 'react'
import { useSelector} from "react-redux";

export default function Map({ props,options, onMount, className, onMountProps }) {
  const getAddress = useSelector(state => state.homepageReducer.getAddress);
  const lonlat = getAddress[0].geometry.location;
  const ref = useRef()
  const [map, setMap] = useState()

  useEffect(() => {
    debugger;
    const onLoad = () => setMap(new window.google.maps.Map(ref.current, options))
    if (!window.google) {
      const script = document.createElement(`script`)
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=XXXXXXXXXXXXXX`
      document.head.append(script)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  }, [options])

  if (map && typeof onMount === `function`) onMount(onMountProps)(map)

  return (
    <div
      style={{ height: `60vh`, margin: `1em 0`}}
      {...{ ref, className }}
    />
  )
}
const noPoi = [
  {
      featureType: "poi",
      stylers: [
        { visibility: "off" }
      ]   
    }
  ];


const addMarkers = links => map => {
    debugger;
    const marker = new window.google.maps.Marker({
      map,
      position: { lat: 32.0853, lng: 34.7818 },
      animation: window.google.maps.Animation.DROP,
      draggable:false,
      title: 'Hello World!'
    })
    marker.addListener(`click`, () => {
      var infowindow = new window.google.maps.InfoWindow({
        content:'Hello Title',
        position:{ lat: 32.0853, lng: 34.7818 },
      });
      infowindow.open(map);
    })
}

Map.defaultProps = {
  options: {
    center: { lat: 32.0853, lng: 34.7818 },
    zoom: 18,
    showTooltip: true,
    showInfoWindow:true,
    styles:noPoi,
  },
  onMount: addMarkers,
}