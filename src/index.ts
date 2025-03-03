import ExpoAudioSession from "./ExpoAudioSessionModule";

export function isOtherAudioPlaying(): boolean {
  return ExpoAudioSession.isOtherAudioPlaying();
}
