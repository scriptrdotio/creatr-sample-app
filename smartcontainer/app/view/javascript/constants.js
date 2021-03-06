myApp.constant("constants", {
  
  appTitle: "Smart Container",
   sources : {
    "simulator": { 
   	  "mapMarker": {
          url: "//s3.amazonaws.com/scriptr-cdn/common/images/marker-container.png"
   	  }
    }
  },
  sourcesLabels: {
    "simulator": "STM32L4 Discovery kit IoT node, low-power wireless, BLE, NFC, SubGHz, Wi-Fi"
  },
  infoWindows: {
    "icons": {
         "id": '<img  src="//s3.amazonaws.com/scriptr-cdn/common/images/container.png">',
         "temperature": '<img alt="Embedded Image"  width="17" height="30" src="//s3.amazonaws.com/scriptr-cdn/common/images/temperature.png" />',
         "humidity": '<img alt="Embedded Image"  src="//s3.amazonaws.com/scriptr-cdn/common/images/humidity.png" />',
         "pressure": '<img alt="Embedded Image"  src="//s3.amazonaws.com/scriptr-cdn/common/images/pressure.png" />',
         "address": '<img alt="Embedded Image"  src="//s3.amazonaws.com/scriptr-cdn/common/images/location.png" />',
         "locationType": '<img alt="Embedded Image"    src="//s3.amazonaws.com/scriptr-cdn/common/images/industrial.png" />',
         "time": '<img  alt="Embedded Image"    src="//s3.amazonaws.com/scriptr-cdn/common/images/time.png" />',
        "luminosity": '<img  alt="Embedded Image"    src="//s3.amazonaws.com/scriptr-cdn/common/images/light.png" />',
         "device": ' <img   alt="Embedded Image" src="//s3.amazonaws.com/scriptr-cdn/common/images/device.png">',
         "proximity": '<img alt="Embedded Image"  src="//s3.amazonaws.com/scriptr-cdn/common/images/proximity.png" />',
         "accelerometer": '<img alt="Embedded Image"  src="//s3.amazonaws.com/scriptr-cdn/common/images/accelerometer.png" />',
         "gyroscope": '<img alt="Embedded Image" src="//s3.amazonaws.com/scriptr-cdn/common/images/gyroscope.png" />',
         "magnetic": '<img alt="Embedded Image"  src="//s3.amazonaws.com/scriptr-cdn/common/images/magnetic.png" />'
     }
  },
  alertsGrid: [
      {headerName: "Temperature", field: "temperature", cellRenderer: function(params){return params.value + " " + ((params.data.temperature_unit) ? params.data.temperature_unit : "°C")} },
      
      {headerName: "Humidity", field: "humidity", cellRenderer: function(params){return params.value + " " +((params.data.humidity_unit) ? params.data.humidity_unit : "%")}},
      
      {headerName: "Pressure", field: "pressure", cellRenderer: function(params){return params.value + " " + ((params.data.pressure_unit) ? params.data.pressure_unit : "Pa")}},
      
      {headerName: "Proximity", field: "proximity", cellRenderer: function(params){return params.value + " " +
((params.data.proximity_unit) ? params.data.proximity_unit : "mm")}},
      
      {headerName: "Accelerometer", field: "acc_x", cellRenderer: function(params){return params.value + ", "+ params.data.acc_y+", "+params.data.acc_z}},
      
      {headerName: "Gyroscope", field: "gyr_x", cellRenderer: function(params){return params.value + ", "+ params.data.gyr_y+", "+params.data.gyr_z}},
      
      {headerName: "Magnetometer", field: "mag_x", cellRenderer: function(params){return params.value + ", "+ params.data.mag_y+", "+params.data.mag_z}},
      
      {headerName: "Timestamp", field: "creationDate", cellStyle: {'white-space': 'normal', 'word-break': 'break-all'}},
      
      {headerName: "Alerts", field: "alert_type", cellStyle: {'white-space': 'normal', 'word-break': 'break-all'}},
      
      {field: "acc_y", hide: true},
      {field: "acc_z", hide: true},
      {field: "gyr_y", hide: true},
      {field: "gyr_z", hide: true},
      {field: "mag_y", hide: true},
      {field: "mag_z", hide: true},
      {field: "temperature_unit", hide: true},
      {field: "humidity_unit", hide: true},
      {field: "pressure_unit", hide: true}
  ],
    
  apis: {
	  getDeviceHistory: "smartcontainer/app/api/getDeviceHistory",
	  getLatestDevice: "smartcontainer/app/api/getLatestDevice",
	  getGenericRuleEditor: "smartcontainer/app/api/rules/getGenericRuleEditor",
	  getDevices: "smartcontainer/app/api/getDevices",
	  updateSettings: "smartcontainer/app/api/notifications/updateSettings",
	  getSettings: "smartcontainer/app/api/notifications/getSettings",
	  getLatestDevices: "smartcontainer/app/api/getLatestDevices",
	  getDeviceAlerts: "smartcontainer/app/api/getDeviceAlerts"
  }
})