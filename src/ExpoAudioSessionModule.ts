import { NativeModule, requireNativeModule } from "expo";

declare class ExpoAudioSessionModule extends NativeModule {
  isOtherAudioPlaying(): boolean;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoAudioSessionModule>("ExpoAudioSession");
