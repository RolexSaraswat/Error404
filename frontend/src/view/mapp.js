import * as React from 'react';

export class DisplayMapClass extends React.Component {
  mapRef = React.createRef();

  state = {
    // The map instance to use during cleanup
    map: null
  };

  componentDidMount() {

    const H = window.H;
    // function addMarkersToMap(map) {
    //   var parisMarker = new H.map.Marker({ lat: 33.0308, lng: 74.9490 });
     
    
    //   // var romeMarker = new H.map.Marker({lat:41.9, lng: 12.5});
    //   // map.addObject(romeMarker);
    
    //   // var berlinMarker = new H.map.Marker({lat:52.5166, lng:13.3833});
    //   // map.addObject(berlinMarker);
    
    //   // var madridMarker = new H.map.Marker({lat:40.4, lng: -3.6833});
    //   // map.addObject(madridMarker);
    
    //   // var londonMarker = new H.map.Marker({lat:51.5008, lng:-0.1224});
    //   // map.addObject(londonMarker);
    // }
    const platform = new H.service.Platform({
        apikey: "9sgfVJxITN6FXa5u9fxATA"
    });

    const defaultLayers = platform.createDefaultLayers();

    // Create an instance of the map
    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        // This map is centered over Europe
        center: { lat: 33.0308, lng: 74.9490 },
        zoom: 4,
        pixelRatio: window.devicePixelRatio || 1
      }
    );
    var a = H.map.DomMarker({ lat: 33.0308, lng: 74.9490 })
    map.addObject(a);
  

    // addMarkersToMap(map);
    this.setState({ map });
  }

  componentWillUnmount() {
    // Cleanup after the map to avoid memory leaks when this component exits the page
    if(this.state.map)
    {
      this.state.map.dispose();

    }
    console.log("bsdi")

  }
  render() {
    return (
      // Set a height on the map so it will display
      <div ref={this.mapRef} style={{ height: "500px" }} />
    );
  }
}