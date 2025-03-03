import { registerWebModule, NativeModule } from 'expo';

import { ExpoAudioSessionModuleEvents } from './ExpoAudioSession.types';

class ExpoAudioSessionModule extends NativeModule<ExpoAudioSessionModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoAudioSessionModule);
