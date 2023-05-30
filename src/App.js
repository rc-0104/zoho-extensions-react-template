import React, { useEffect, useState } from "react";
import "./App.css";
import { getCurrentUserInfos, initializeWidget } from "./services/crm.services";
import { ZOHO } from './vendor/ZohoWidgetSdk';

function App() {
  const [entity, setEntity] = useState(null);

  const initializeWidget = async () => {
    console.log("initializing app...");
    ZOHO.embeddedApp.on("PageLoad", function (data) {
      console.log("current entity data: ", data);
      if (data && data.Entity) {
        setEntity((prevState) => {
          return {
            ...prevState,
            Entity: data.Entity,
            EntityId: data.EntityId,
          };
        });
      }
    })
    await ZOHO.embeddedApp.init();
  }

  useEffect(async () => {
    await initializeWidget();
  }, []);

  return (
    <div className="App d-flex justify-center items-center m-4 gap-2">
      <h1 className="text-2xl font-bold">Zoho CRM Widget Extension</h1>
      <div className="d-flex">
        <span>Current module infos : </span>
        <span>{JSON.stringify(entity)}</span>
      </div>
    </div>
  );
}

export default App;
