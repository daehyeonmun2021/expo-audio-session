import * as React from 'react';

import { ExpoAudioSessionViewProps } from './ExpoAudioSession.types';

export default function ExpoAudioSessionView(props: ExpoAudioSessionViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
