import { NativeModule, requireNativeModule } from 'expo';

import { ExpoAudioSessionModuleEvents } from './ExpoAudioSession.types';

declare class ExpoAudioSessionModule extends NativeModule<ExpoAudioSessionModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoAudioSessionModule>('ExpoAudioSession');
