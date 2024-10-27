"use client";

import React, { useState } from 'react'
import AgoraUIKit, { PropsInterface } from 'agora-react-uikit'

const AgoraComponent = ({ id }: { id: string }) => {
    const [videocall, setVideocall] = useState(true);

    const props: PropsInterface = {
      rtcProps: {
        appId: process.env.NEXT_PUBLIC_AGORA_APP_ID as string,
        channel: id, // Now `id` is directly accessible
        token: null, // pass in channel token if the app is in secure mode
      },
      callbacks: {
        EndCall: () => setVideocall(false)
      }
    };

    return (
        <div style={styles.container}>
          {videocall ? (
            <AgoraUIKit
              rtcProps={props.rtcProps}
              callbacks={props.callbacks}
            />
          ) : null}
        </div>
    );
};


const styles = {
    container: { width: '100vw', height: '100vh', display: 'flex', flex: 1},
}  

export default AgoraComponent