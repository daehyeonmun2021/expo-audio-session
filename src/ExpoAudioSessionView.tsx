import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoAudioSessionViewProps } from './ExpoAudioSession.types';

const NativeView: React.ComponentType<ExpoAudioSessionViewProps> =
  requireNativeView('ExpoAudioSession');

export default function ExpoAudioSessionView(props: ExpoAudioSessionViewProps) {
  return <NativeView {...props} />;
}
